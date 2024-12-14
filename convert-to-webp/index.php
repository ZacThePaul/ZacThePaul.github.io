<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lossless Image to WebP Converter</title>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js"></script>

  <?php include 'head.php' ?>

</head>

<body>

    <?php include '../header.php'; ?>

  <h1>Lossless Image to WebP Converter</h1>
  <input type="file" id="fileInput" accept="image/*" multiple>
  <div class="file-list" id="fileList"></div>
  <button id="convertAllBtn">Convert All</button>
  <button id="bulkDownloadBtn" style="display: none;">Download All</button>
  <button id="clearAllBtn">Clear All</button>

  <script src="/convert-to-webp/dist/scripts.js">
    
  </script>
</body>
</html>
