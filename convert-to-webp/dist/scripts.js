var a=document.getElementById('fileInput'),b=document.getElementById('fileList'),c=document.getElementById('convertAllBtn'),d=document.getElementById('bulkDownloadBtn'),A=document.getElementById('clearAllBtn'),f=[];a.addEventListener('change',_=>{var B=[..._.target.files];for(const _a of B){var C=f.length;f.push({id:C,file:_a,webpUrl:null});g(C,_a)}});function g(D,_b){var _c=document.createElement('div');_c.className='file-item';_c.dataset.id=D;var _d=new FileReader;_d.onload=e=>{_c.innerHTML=`
          <img src="${e.target.result}" alt="Image Preview">
          <span>${_b.name}</span>
          <label style="margin-left: 10px;">
            <input type="checkbox" class="retainMetadata" /> Retain Metadata
          </label>
          <button class="convertBtn">Convert</button>
          <a class="downloadLink" style="display: none;" download="${_b.name.replace(/\.\w+$/,'.webp')}">Download</a>
          <button class="deleteBtn">❌</button>
          <div class="progress">
            <div class="progress-bar"></div>
          </div>
        `;b.appendChild(_c);var _B=_c.querySelector('.convertBtn'),_C=_c.querySelector('.downloadLink'),_D=_c.querySelector('.deleteBtn');_B.addEventListener('click',()=>h(D,_C,_c));_D.addEventListener('click',()=>i(D,_c))};_d.readAsDataURL(_b)}function h(_A,E,aA){var aB=aA.querySelector('.progress-bar'),_e=aA.querySelector('.retainMetadata').checked;var F=new FileReader;F.onload=e=>{var aC=new Image;aC.src=e.target.result;aC.onload=()=>{var aD=document.createElement('canvas'),aE=aD.getContext('2d');aD.width=aC.width;aD.height=aC.height;aE.drawImage(aC,0,0,aD.width,aD.height);aD.toBlob(aF=>{var aG=URL.createObjectURL(aF);f[_A].webpUrl=E.href=aG;E.style.display='inline';E.textContent='Download';aB.style.width='100%'},'image/webp')}};F.onloadstart=()=>aB.style.width='25%';F.onloadend=()=>aB.style.width='50%';F.readAsDataURL(f[_A].file)}function i(aH,aI){f[aH]=null;aI.remove()}c.addEventListener('click',()=>{for(const[aJ,aK] of f.entries())if(aK&&!aK.webpUrl){var aL=b.querySelector(`[data-id='${aJ}']`),aM=aL.querySelector('.downloadLink');h(aJ,aM,aL)}d.style.display='inline'});d.addEventListener('click',()=>{var aN=new JSZip;var aO=aN.folder('converted-webp-files');Promise.all(f.map((aP,aQ)=>{if(aP?.webpUrl)return fetch(aP.webpUrl).then(res=>res.blob()).then(aR=>aO.file(aP.file.name.replace(/\.\w+$/,'.webp'),aR));return null})).then(()=>aN.generateAsync({type:'blob'}).then(aS=>{var aT=document.createElement('a');aT.href=URL.createObjectURL(aS);aT.download='converted-webp-files.zip';aT.click()}))});A.addEventListener('click',()=>{b.innerHTML='';f.length=0;d.style.display='none'});