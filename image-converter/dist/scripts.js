var a=document.getElementById('fileInput'),b=document.getElementById('fileList'),c=document.getElementById('convertAllBtn'),d=document.getElementById('bulkDownloadBtn'),A=document.getElementById('clearAllBtn'),f=[];a.addEventListener('change',_=>{var B=[..._.target.files];for(const _a of B){var C=f.length;f.push({id:C,file:_a,convertedUrl:null,format:'png'});g(C,_a)}});function g(D,_b){var _c=document.createElement('div');_c.className='file-item';_c.dataset.id=D;var _d=new FileReader;_d.onload=e=>{_c.innerHTML=`
      <img src="${e.target.result}" alt="Image Preview">
      <span>${_b.name}</span>
      <select class="file-format">
        <option value="png">PNG</option>
        <option value="webp">WebP</option>
        <option value="jpeg">JPEG</option>
      </select>
      <button class="convertBtn">Convert</button>
      <a class="downloadLink" style="display: none;" download="${_b.name.replace(/\.\w+$/,'.png')}">Download</a>
      <button class="deleteBtn">❌</button>
      <div class="progress">
        <div class="progress-bar"></div>
      </div>
    `;b.appendChild(_c);var _B=_c.querySelector('.file-format'),_D=_c.querySelector('.downloadLink'),E=_c.querySelector('.deleteBtn');_B.addEventListener('change',_A=>h(D,_A.target.value));var _C=_c.querySelector('.convertBtn');_C.addEventListener('click',()=>i(D,_D,_c));E.addEventListener('click',()=>j(D,_c))};_d.readAsDataURL(_b)}function h(aA,aB){f[aA]&&(f[aA].format=aB)}function i(aC,aD,aE){var aF=f[aC].file,_e=aE.querySelector('.progress-bar'),F=f[aC].format;var G=new FileReader;G.onload=e=>{var aG=new Image;aG.src=e.target.result;aG.onload=()=>{var aH=document.createElement('canvas'),aI=aH.getContext('2d');aH.width=aG.width;aH.height=aG.height;aI.drawImage(aG,0,0,aH.width,aH.height);aH.toBlob(aJ=>{var aK=URL.createObjectURL(aJ);f[aC].convertedUrl=aD.href=aK;aD.style.display='inline';aD.textContent='Download';aD.download=aF.name.replace(/\.\w+$/,`.${F}`);_e.style.width='100%'},`image/${F}`)}};G.onloadstart=()=>_e.style.width='25%';G.onloadend=()=>_e.style.width='50%';G.readAsDataURL(aF)}function j(aL,aM){f[aL]=null;aM.remove()}c.addEventListener('click',()=>{for(const[aN,aO] of f.entries())if(aO&&!aO.convertedUrl){var aP=b.querySelector(`[data-id='${aN}']`),aQ=aP.querySelector('.downloadLink');i(aN,aQ,aP)}d.style.display='inline'});d.addEventListener('click',()=>{var aR=new JSZip;var aS=aR.folder('converted-files');Promise.all(f.map((aT,aU)=>{if(aT?.convertedUrl)return fetch(aT.convertedUrl).then(res=>res.blob()).then(aV=>aS.file(aT.file.name.replace(/\.\w+$/,`.${aT.format}`),aV));return null})).then(()=>aR.generateAsync({type:'blob'}).then(aW=>{var aX=document.createElement('a');aX.href=URL.createObjectURL(aW);aX.download='converted-files.zip';aX.click()}))});A.addEventListener('click',()=>{b.innerHTML='';f.length=0;d.style.display='none'});
