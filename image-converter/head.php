<?php
    $domain = 'utilihub.tools';
?>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Lossless <?= $file_from ?> to <?= $file_to ?> Image Converter | Convert <?= $file_from ?> to <?= $file_to ?> Online for Free</title>

  <!-- Meta Tags for SEO -->
  <meta name="description" content="Convert images from <?= $file_from ?> to <?= $file_to ?> format with our free, fast, and secure online image converter. No downloads required.">
  <meta name="keywords" content="image converter, convert <?= $file_from ?> to <?= $file_to ?>, online image converter, convert images">
  <meta name="robots" content="index, follow">
  <meta name="author" content="YourSiteName">
  
  <!-- Open Graph (OG) for Social Media Sharing -->
  <meta property="og:title" content="Lossless <?= $file_from ?> to <?= $file_to ?> Image Converter | Convert <?= $file_from ?> to <?= $file_to ?> Online for Free">
  <meta property="og:description" content="Easily convert images from <?= $file_from ?> to <?= $file_to ?> online. Fast, free, and secure. No downloads required.">
  <meta property="og:type" content="website">
  <meta property="og:url" content="https://<?= $domain ?>">
  <meta property="og:image" content="https://<?= $domain ?>/assets/image-converter-og.png">
  
  <!-- Twitter Cards for Social Sharing -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="Lossless <?= $file_from ?> to <?= $file_to ?> Image Converter | Convert <?= $file_from ?> to <?= $file_to ?> Online for Free">
  <meta name="twitter:description" content="Fast, free, and secure online image converter. Convert <?= $file_from ?> to <?= $file_to ?>. No downloads required.">
  <meta name="twitter:image" content="https://<?= $domain ?>/assets/image-converter-og.png">

  <!-- Canonical URL to Prevent Duplicate Content Issues -->
  <link rel="canonical" href="https://<?= $domain ?>/image-converter/<?= $this_page_url?>">

  <!-- Favicon -->
  <link rel="icon" href="/favicon.ico" type="image/x-icon">

  <!-- Include CSS and External Libraries -->
  <link rel="stylesheet" href="/image-converter/dist/styles.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jszip/3.10.1/jszip.min.js" defer></script>

  <!-- Structured Data (JSON-LD) for Rich Snippets -->
  <script type="application/ld+json" defer>
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "Lossless <?= $file_from ?> to <?= $file_to ?> Image Converter",
    "url": "https://<?= $domain ?>/image-converter",
    "description": "Convert images from <?= $file_from ?> to <?= $file_to ?> format with our free, fast, and secure online image converter. No downloads required.",
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Browser",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "author": {
      "@type": "Person",
      "name": "YourSiteName"
    }
  }
  </script>

</head>