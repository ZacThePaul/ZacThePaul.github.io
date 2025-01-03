<?php

// Start the sessionr
session_start();

// Check if the session ID exists, if not, create it
if (!isset($_SESSION['session_id'])) {
    $_SESSION['session_id'] = bin2hex(random_bytes(16)); // 32-character session ID
}

// Send session data to a log file (or database)
file_put_contents('../analytics.log', json_encode([
    'session_id' => $_SESSION['session_id'],
    'url' => $_SERVER['REQUEST_URI'],
    'referrer' => $_SERVER['HTTP_REFERER'] ?? 'direct',
    'ip' => $_SERVER['REMOTE_ADDR'],
    'user_agent' => $_SERVER['HTTP_USER_AGENT'],
    'timestamp' => date('Y-m-d H:i:s')
]) . PHP_EOL, FILE_APPEND);

?>

<!DOCTYPE html>
<html lang="en">

<?php include 'head.php'; ?>

<body class="dark-mode">

    <?php include '../header.php'; ?>

    <main>

        <div class="page-info">

            <h1>Tip Calculator</h1>

        </div>   
            
        <section class="tool-wrapper">
            <div class="form-group">
                <label for="billAmount">Bill Amount ($):</label>
                <input type="number" id="billAmount" placeholder="Enter bill amount" step="0.01">
                <span class="error-message" id="billAmountError"></span>
            </div>

            <div class="form-group">
                <label>Tip Percentage (%):</label>
                <div class="tip-buttons">
                    <button >18%</button>
                    <button class="active">20%</button>
                    <button >22%</button>
                    <button >Custom</button>
                </div>
                <input type="number" id="customTipPercentage" placeholder="Enter custom tip percentage" step="1" style="display: none;">
                <span class="error-message" id="tipPercentageError"></span>
            </div>

            <div class="form-group">
                <label for="numPeople">Number of People (Optional):</label>
                <input type="number" id="numPeople" placeholder="Enter number of people" step="1" min="1">
                <span class="error-message" id="numPeopleError"></span>
            </div>

            <div class="result" id="result">
                <p id="tipAmount">Tip Amount: $0.00</p>
                <p id="totalAmount">Total Amount (Including Tip): $0.00</p>
                <p id="amountPerPerson">Amount Per Person: $0.00</p>
            </div>
        </section>

        <?php include 'how-to.php'; ?>  

        <section>
            <h2>What is a Tip Calculator?</h2>
            <p>A tip calculator is a simple tool that helps you quickly calculate the tip amount and total bill. Whether you're dining out or ordering delivery, this tool makes it easy to split bills fairly among friends or family.</p>
        </section>

        <hr>

        <?php include 'faq.php'; ?>     

        <!-- <button class="toggle-dark-mode" onclick="toggleDarkMode()">Toggle</button> -->

        <script src="/tip-calculator/dist/scripts.js" defer></script>
    </main>
    
</body>
</html>
