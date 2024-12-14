<header>
    <!-- Logo with alt text for accessibility -->
    <div class="logo">
        <a href="https://www.example.com" title="Go to Homepage">
            <img src="" alt="Example Company Logo" width="150" height="50">
        </a>
    </div>

    <!-- Primary Navigation Menu wrapped in a semantic <nav> tag -->
    <nav aria-label="Primary Navigation">
        <ul>
            <li><a href="/" title="Go to Home Page">Home</a></li>
            <li><a href="/tip-calculator" title="Go to Tip Calculator">Tip Calculator</a></li>
            <li><a href="/convert-to-webp" title="Go to Tip Calculator">Convert to WEBP</a></li>
        </ul>
    </nav>

    <!-- Call-to-Action (CTA) Button -->
    <div class="cta-button">
        <a href="https://www.example.com/get-started" class="btn" title="Start your journey with us">Get Started</a>
    </div>
</header>

<style>
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
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