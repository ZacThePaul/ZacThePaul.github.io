<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Image Compressor</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            max-width: 800px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f5f5f5;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 8px;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
        }
        .preview-container {
            display: flex;
            gap: 20px;
            margin-top: 20px;
            flex-wrap: wrap;
        }
        .preview-box {
            flex: 1;
            min-width: 300px;
            border: 1px solid #ddd;
            padding: 10px;
            border-radius: 4px;
        }
        .preview-image {
            max-width: 100%;
            height: auto;
        }
        .controls {
            margin: 20px 0;
        }
        button, input {
            padding: 8px 16px;
            margin: 5px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
        }
        button {
            background-color: #4CAF50;
            color: white;
        }
        button:hover {
            background-color: #45a049;
        }
        .info {
            margin-top: 10px;
            color: #666;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Image Compressor</h1>
        <div class="controls">
            <input type="file" id="imageInput" accept="image/*">
            <div>
                <label for="quality">Quality (1-100):</label>
                <input type="number" id="quality" min="1" max="100" value="70">
            </div>
            <button id="compressBtn" disabled>Compress Image</button>
            <button id="downloadBtn" disabled>Download Compressed Image</button>
        </div>
        
        <div class="preview-container">
            <div class="preview-box">
                <h3>Original Image</h3>
                <img id="originalPreview" class="preview-image">
                <div id="originalInfo" class="info"></div>
            </div>
            <div class="preview-box">
                <h3>Compressed Image</h3>
                <img id="compressedPreview" class="preview-image">
                <div id="compressedInfo" class="info"></div>
            </div>
        </div>
    </div>
    <script src="scripts.js" defer></script>
</body>
</html>