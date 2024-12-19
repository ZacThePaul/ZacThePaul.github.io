<header>
    <div class="header-wrapper">
        <!-- Logo with alt text for accessibility -->
        <div class="logo">
            <a href="http://<?= $_SERVER['HTTP_HOST']?>" title="Go to Homepage">
                <span>UTILIHUB</span>
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

        
    </div>
</header>

<style>
    header {
        background-color: #070F2B;
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
        color:#9b9ac9;
        text-decoration: none;
    }

</style>