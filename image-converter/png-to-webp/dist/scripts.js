console.log('pngwebp');var a=document.getElementById('fileInput'),b=document.getElementById('fileList'),c=document.getElementById('convertAllBtn'),d=document.getElementById('bulkDownloadBtn'),A=document.getElementById('clearAllBtn'),f=[];a.addEventListener('change',_=>{var B=[..._.target.files];for(const _a of B){var C=f.length;f.push({id:C,file:_a,convertedUrl:null});g(C,_a)}});function g(D,_b){var _c=document.createElement('div');_c.className='file-item';_c.dataset.id=D;var _d=new FileReader;_d.onload=e=>{_c.innerHTML=`
      <img src="${e.target.result}" alt="Image Preview">
      <span>${_b.name}</span>
      <button class="convertBtn">Convert</button>
      <a class="downloadLink" style="display: none;" download="${_b.name.replace(/\.\w+$/,'.webp')}">Download</a>
      <button class="deleteBtn">❌</button>
      <div class="progress">
        <div class="progress-bar"></div>
      </div>
    `;b.appendChild(_c);var _B=_c.querySelector('.convertBtn'),_C=_c.querySelector('.downloadLink'),_D=_c.querySelector('.deleteBtn');_B.addEventListener('click',()=>h(D,_C,_c));_D.addEventListener('click',()=>i(D,_c))};_d.readAsDataURL(_b)}function h(_A,E,aA){var aB=f[_A].file,_e=aA.querySelector('.progress-bar');var F=new FileReader;F.onload=e=>{var aC=new Image;aC.src=e.target.result;aC.onload=()=>{var aD=document.createElement('canvas'),aE=aD.getContext('2d');aD.width=aC.width;aD.height=aC.height;aE.drawImage(aC,0,0,aD.width,aD.height);aD.toBlob(aF=>{var aG=URL.createObjectURL(aF);f[_A].convertedUrl=E.href=aG;E.style.display='inline';E.textContent='Download';E.download=aB.name.replace(/\.\w+$/,'.webp');_e.style.width='100%'},'image/webp')}};F.onloadstart=()=>_e.style.width='25%';F.onloadend=()=>_e.style.width='50%';F.readAsDataURL(aB)}function i(aH,aI){f[aH]=null;aI.remove()}c.addEventListener('click',()=>{for(const[aJ,aK] of f.entries())if(aK&&!aK.convertedUrl){var aL=b.querySelector(`[data-id='${aJ}']`),aM=aL.querySelector('.downloadLink');h(aJ,aM,aL)}d.style.display='inline'});d.addEventListener('click',()=>{var aN=new JSZip;var aO=aN.folder('converted-files');Promise.all(f.map((aP,aQ)=>{if(aP?.convertedUrl)return fetch(aP.convertedUrl).then(res=>res.blob()).then(aR=>aO.file(aP.file.name.replace(/\.\w+$/,'.webp'),aR));return null})).then(()=>aN.generateAsync({type:'blob'}).then(aS=>{var aT=document.createElement('a');aT.href=URL.createObjectURL(aS);aT.download='converted-files.zip';aT.click()}))});A.addEventListener('click',()=>{b.innerHTML='';f.length=0;d.style.display='none'});