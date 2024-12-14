<?php

  $site_url = 'banas.com';

?>

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tip Calculator - Calculate Your Tip Instantly</title>

    <link rel="canonical" href="https://<?php echo $site_url; ?>/tip-calculator">

    <meta name="description" content="Use this free Tip Calculator to quickly calculate your tip amount and total bill. Fast, simple, and mobile-friendly!">
    <meta property="og:title" content="Tip Calculator - Calculate Your Tip Instantly">
    <meta property="og:description" content="Use this free Tip Calculator to quickly calculate your tip amount and total bill. Fast, simple, and mobile-friendly!">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://<?php echo $site_url; ?>/tip-calculator">
    <!-- <meta property="og:image" content="https://<?php echo $site_url; ?>/images/tip-calculator-preview.png"> -->

    <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "WebPage",
            "@id": "https://<?php echo $site_url; ?>/tip-calculator",
            "url": "https://<?php echo $site_url; ?>/tip-calculator",
            "name": "Tip Calculator - Calculate Your Tip Instantly",
            "description": "Use this free Tip Calculator to quickly calculate your tip amount and total bill. Fast, simple, and mobile-friendly!",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do you calculate a tip?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "To calculate a tip, multiply the total bill amount by the tip percentage (e.g., 20%). Add the result to the original bill to get the total amount."
                }
              },
              {
                "@type": "Question",
                "name": "What is the best tip percentage?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most people tip 15-20% for restaurant service, but this can vary based on the quality of service."
                }
              },
              {
                "@type": "Question",
                "name": "Can I split the tip with friends?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes! Simply enter the number of people splitting the bill, and the tool will calculate the amount each person owes."
                }
              }
            ]
          },
          {
            "@type": "SoftwareApplication",
            "name": "Tip Calculator",
            "operatingSystem": "Web",
            "applicationCategory": "BusinessApplication",
            "description": "Free, easy-to-use Tip Calculator to calculate tip amounts and split bills.",
            "url": "https://<?php echo $site_url; ?>/tip-calculator"
          }
        ]
      }
    </script>
      

    <link rel="stylesheet" href="/tip-calculator/dist/styles.css">
</head>