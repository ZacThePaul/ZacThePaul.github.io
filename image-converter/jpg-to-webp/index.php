<?php     
    $file_from = "JPG";
    $file_to = "WEBP";
    $this_page_url = 'jpg-to-webp';
    ob_start(); // Start output buffering
    ?>

    <section class="upload-section">
        <h1>Convert <?= $file_from ?> to <?= $file_to ?> Online</h1>
        <p>Convert PNG images to WebP format quickly, securely, and for free. No software required. Upload your images and get WebP files instantly.</p>
        <hr>
        <h2>Upload Your <?= $file_from ?> Images</h2>
        <p>Upload your <?= $file_from ?> images and convert them to <?= $file_to ?> format with just a few clicks.</p>
        <div class="file-input-wrapper">
          <label for="fileInput" class="custom-file-label">Upload Files</label>
          <input type="file" id="fileInput" accept="image/jpg" multiple>
        </div>        
        <div class="file-list" id="fileList"></div>
        <button id="convertAllBtn" class="primary-btn">Convert All</button>
        <button id="bulkDownloadBtn" class="secondary-btn" style="display: none;">Download All</button>
        <button id="clearAllBtn" class="danger-btn">Clear All</button>
    </section>

    <?php include __DIR__ . '/../banner.php'; ?>
    <?php include __DIR__ . '/../partials/how-it-works.php'; ?>
    <?php include __DIR__ . '/../partials/faq.php'; ?>

  <?php
$content = ob_get_clean(); // Capture content and clear buffer
include '../base.php';