<!DOCTYPE html>
<html lang="en">
<head>
    <?php include __DIR__ . '/head.php'; ?>
    <title><?php echo $file_from; ?> to <?= $file_to ?></title>
</head>

<body>

    <?php include __DIR__ . '/../header.php' ?>

    <div class="main-content">

        <!-- Main Content -->
        <main>
            <?php echo $content; ?>
        </main>

        <!-- Footer -->
        <footer>
            <p>&copy; <?php echo date('Y'); ?> YourSiteName. All rights reserved.</p>
            <nav>
            <a href="/privacy-policy">Privacy Policy</a> | 
            <a href="/terms-of-service">Terms of Service</a> | 
            <a href="/contact">Contact Us</a>
            </nav>
        </footer>

    </div>

  <!-- Include JS -->
   <script>
     const toFormat = '<?= $file_to; ?>'.toLowerCase();
   </script>
  <script src="/image-converter/dist/scripts.js" defer></script>
</body>
</html>
