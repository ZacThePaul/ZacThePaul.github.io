console.log('pngwebp');

const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
const convertAllBtn = document.getElementById('convertAllBtn');
const bulkDownloadBtn = document.getElementById('bulkDownloadBtn');
const clearAllBtn = document.getElementById('clearAllBtn');

const uploadedFiles = [];

fileInput.addEventListener('change', (event) => {
  const files = Array.from(event.target.files);
  files.forEach((file) => {
    const id = uploadedFiles.length;
    uploadedFiles.push({ id, file, convertedUrl: null });
    addFileToList(id, file);
  });
});

function addFileToList(id, file) {
  const fileItem = document.createElement('div');
  fileItem.className = 'file-item';
  fileItem.dataset.id = id;

  const fileReader = new FileReader();
  fileReader.onload = (e) => {
    fileItem.innerHTML = `
      <img src="${e.target.result}" alt="Image Preview">
      <span>${file.name}</span>
      <button class="convertBtn">Convert</button>
      <a class="downloadLink" style="display: none;" download="${file.name.replace(/\.\w+$/, '.webp')}">Download</a>
      <button class="deleteBtn">❌</button>
      <div class="progress">
        <div class="progress-bar"></div>
      </div>
    `;

    fileList.appendChild(fileItem);

    const convertBtn = fileItem.querySelector('.convertBtn');
    const downloadLink = fileItem.querySelector('.downloadLink');
    const deleteBtn = fileItem.querySelector('.deleteBtn');

    convertBtn.addEventListener('click', () => convertFile(id, downloadLink, fileItem));
    deleteBtn.addEventListener('click', () => deleteFile(id, fileItem));
  };

  fileReader.readAsDataURL(file);
}

function convertFile(id, downloadLink, fileItem) {
  const file = uploadedFiles[id].file;
  const progressBar = fileItem.querySelector('.progress-bar');

  const reader = new FileReader();
  reader.onload = (e) => {
    const img = new Image();
    img.src = e.target.result;

    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');

      canvas.width = img.width;
      canvas.height = img.height;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      canvas.toBlob((blob) => {
        const convertedUrl = URL.createObjectURL(blob);
        uploadedFiles[id].convertedUrl = convertedUrl;

        downloadLink.href = convertedUrl;
        downloadLink.style.display = 'inline';
        downloadLink.textContent = 'Download';
        downloadLink.download = file.name.replace(/\.\w+$/, '.webp');
        
        progressBar.style.width = '100%';
      }, 'image/webp');
    };
  };

  reader.onloadstart = () => {
    progressBar.style.width = '25%'; 
  };

  reader.onloadend = () => {
    progressBar.style.width = '50%'; 
  };

  reader.readAsDataURL(file);
}

function deleteFile(id, fileItem) {
  uploadedFiles[id] = null;
  fileItem.remove();
}

convertAllBtn.addEventListener('click', () => {
  uploadedFiles.forEach((file, id) => {
    if (file && !file.convertedUrl) {
      const fileItem = fileList.querySelector(`[data-id='${id}']`);
      const downloadLink = fileItem.querySelector('.downloadLink');
      convertFile(id, downloadLink, fileItem);
    }
  });

  bulkDownloadBtn.style.display = 'inline';
});

bulkDownloadBtn.addEventListener('click', () => {
  const zip = new JSZip();
  const folder = zip.folder('converted-files');

  const promises = uploadedFiles.map((file, id) => {
    if (file && file.convertedUrl) {
      return fetch(file.convertedUrl)
        .then((res) => res.blob())
        .then((blob) => {
          const fileName = file.file.name.replace(/\.\w+$/, '.webp');
          folder.file(fileName, blob);
        });
    }
    return null;
  });

  Promise.all(promises).then(() => {
    zip.generateAsync({ type: 'blob' }).then((content) => {
      const link = document.createElement('a');
      link.href = URL.createObjectURL(content);
      link.download = 'converted-files.zip';
      link.click();
    });
  });
});

clearAllBtn.addEventListener('click', () => {
  fileList.innerHTML = '';
  uploadedFiles.length = 0;
  bulkDownloadBtn.style.display = 'none';
});
