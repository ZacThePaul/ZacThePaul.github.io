// DOM Elements
const imageInput = document.getElementById('imageInput');
const qualityInput = document.getElementById('quality');
const compressBtn = document.getElementById('compressBtn');
const downloadBtn = document.getElementById('downloadBtn');
const originalPreview = document.getElementById('originalPreview');
const compressedPreview = document.getElementById('compressedPreview');
const originalInfo = document.getElementById('originalInfo');
const compressedInfo = document.getElementById('compressedInfo');

let originalImage = null;
let compressedImage = null;

// Handle file selection
imageInput.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Display original file info
    originalInfo.textContent = `Size: ${(file.size / 1024).toFixed(2)} KB`;
    
    // Create object URL for preview
    const reader = new FileReader();
    reader.onload = (e) => {
        originalImage = e.target.result;
        originalPreview.src = originalImage;
        compressBtn.disabled = false;
        downloadBtn.disabled = true;
        compressedPreview.src = '';
        compressedInfo.textContent = '';
    };
    reader.readAsDataURL(file);
});

// Compress image
compressBtn.addEventListener('click', () => {
    if (!originalImage) return;

    const quality = parseInt(qualityInput.value) / 100;
    const img = new Image();
    img.src = originalImage;

    img.onload = () => {
        // Create canvas
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');

        // Calculate new dimensions (maintaining aspect ratio)
        const maxWidth = 1920;
        const maxHeight = 1080;
        let width = img.width;
        let height = img.height;

        if (width > maxWidth) {
            height = Math.round((height * maxWidth) / width);
            width = maxWidth;
        }
        if (height > maxHeight) {
            width = Math.round((width * maxHeight) / height);
            height = maxHeight;
        }

        // Set canvas dimensions
        canvas.width = width;
        canvas.height = height;

        // Draw and compress image
        ctx.drawImage(img, 0, 0, width, height);
        compressedImage = canvas.toDataURL('image/jpeg', quality);

        // Update preview
        compressedPreview.src = compressedImage;
        
        // Calculate compressed size
        const compressedSize = (compressedImage.length * 3) / 4; // Base64 to binary approximation
        compressedInfo.textContent = `Size: ${(compressedSize / 1024).toFixed(2)} KB`;
        
        downloadBtn.disabled = false;
    };
});

// Download compressed image
downloadBtn.addEventListener('click', () => {
    if (!compressedImage) return;

    const link = document.createElement('a');
    link.download = 'compressed-image.jpg';
    link.href = compressedImage;
    link.click();
});