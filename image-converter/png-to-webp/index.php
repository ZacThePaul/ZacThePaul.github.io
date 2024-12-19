<?php     
    $file_from = "PNG";
    $file_to = "WEBP";
    $this_page_url = 'png-to-webp';
    ob_start(); // Start output buffering
    ?>

    
    <section class="upload-section">
        <h1>Convert <?= $file_from ?> to <?= $file_to ?> Online</h1>
        <p>Convert PNG images to WebP format quickly, securely, and for free. No software required. Upload your images and get WebP files instantly.</p>
        <hr>
        <h2>Upload Your <?= $file_from ?> Images</h2>
        <p>Upload your <?= $file_from ?> images and convert them to <?= $file_to ?> format with just a few clicks.</p>
        <input type="file" id="fileInput" accept="image/png" multiple>
        <div class="file-list" id="fileList"></div>
        <button id="convertAllBtn" class="primary-btn">Convert All</button>
        <button id="bulkDownloadBtn" class="secondary-btn" style="display: none;">Download All</button>
        <button id="clearAllBtn" class="danger-btn">Clear All</button>
    </section>

    <?php include __DIR__ . '/../banner.php'; ?> <!-- Include Partial Template -->

    <section class="how-it-works">
      <h2>How It Works</h2>
      <ol>
        <li>Upload your <?= $file_from ?> images.</li>
        <li>Click "Convert" to turn them into <?= $file_to ?> files.</li>
        <li>Download the converted images instantly.</li>
      </ol>
    </section>

    <section class="faq">
      <h2>Frequently Asked Questions</h2>

      <div class="faq-item">
        <h3>What is a <?= $file_to ?> file?</h3>
        <p>WebP is a modern image format that provides better compression than PNG and JPEG while maintaining image quality. It's supported by all major browsers.</p>
      </div>

      <div class="faq-item">
        <h3>How do I convert <?= $file_from ?> to <?= $file_to ?>?</h3>
        <p>Upload your PNG files using the file uploader, click "Convert," and download the WebP versions instantly.</p>
      </div>

      <div class="faq-item">
        <h3>Is this converter free?</h3>
        <p>Yes, this converter is 100% free to use with no limits on the number of files you can convert.</p>
      </div>

      <div class="faq-item">
        <h3>Is it safe to use this converter?</h3>
        <p>Yes, your files are processed directly in your browser, so no files are uploaded to any server. Your files remain 100% private and secure.</p>
      </div>
    </section>

  <?php
$content = ob_get_clean(); // Capture content and clear buffer
include '../base.php';