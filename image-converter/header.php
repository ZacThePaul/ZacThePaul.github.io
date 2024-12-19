<header>
    <div class="header-wrapper">
        <!-- Logo with alt text for accessibility -->
        <div class="logo">
            <a href="http://<?= $_SERVER['HTTP_HOST']?>" title="Go to Homepage">
                <img src="http://<?= $_SERVER['HTTP_HOST'] . '/media/utilihub-logo.png'?>" alt="Utilihub Logo" width="100" height="100">
            </a>
        </div>

        <!-- Primary Navigation Menu wrapped in a semantic <nav> tag -->
        <nav aria-label="Primary Navigation">
            <ul>
                <li><a href="/" title="Go to Home Page">Home</a></li>
                <li><a href="/tip-calculator" title="Go to Tip Calculator">Tip Calculator</a></li>
                <li><a href="/convert-to-webp" title="Go to WEBP Converter">Convert to WEBP</a></li>
                <li><a href="/image-converter/png-to-webp" title="Go to PNG to WEBP converter">PNG to WEBP</a></li>
            </ul>
        </nav>

        <!-- Call-to-Action (CTA) Button -->
        <div class="cta-button">
            <a href="https://www.example.com/get-started" class="btn" title="Start your journey with us">Get Started</a>
        </div>
    </div>
</header>

<style>
    header {
        background-color: black;
        padding: 20px 0;
    }

    .header-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        max-width: 1250px;
        margin: auto;
    }

    nav ul {
        display: flex;
        gap: 15px;
    }

    nav ul li {
        list-style-type: none;
    }

    nav ul li a {
        color: white;
    }

</style>