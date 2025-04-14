import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="uz">
                <Head>
                    {/* Preconnect to fonts provider */}
                    <link rel="preconnect" href="https://fonts.bunny.net" />
                    <link
                        href="https://fonts.bunny.net/css?family=epilogue:400,500,600,700"
                        rel="stylesheet"
                    /> 

                    {/* Meta Tags for SEO */}
                    <meta charset="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
                    <meta 
                        name="description" 
                        content="Boaz.uz - Logistika xizmatlari, yuk tashish, transport, yetkazib berish, ombor xizmatlari. O'zbekiston va xalqaro miqyosda tezkor va ishonchli yetkazib berish. Eng yaxshi logistika kompaniyasi O'zbekistonda va Markaziy Osiyoda." 
                    />
                    <meta name="keywords" content="logistika, yuk tashish, transport, yetkazib berish, ombor, xususiy logistik xizmatlar, xalqaro yetkazib berish, O'zbekiston logistikasi, Boaz.uz, transport xizmatlari, yuk tashish kompaniyasi, eng yaxshi logistika kompaniyasi, tezkor yetkazib berish" />
                    <meta name="robots" content="index, follow" />

                    {/* Open Graph Meta Tags */}
                    <meta property="og:title" content="Boaz Logistics - Transport va Yetkazib Berish Xizmatlari" />
                    <meta property="og:description" content="Boaz.uz - Logistika va transport sohasida yetkazib berish xizmatlari. Xalqaro va mahalliy yuk tashish, omborxona, va logistika yechimlari. Tezkor va ishonchli xizmatlar." />
                    <meta property="og:image" content="/logo.svg" />
                    <meta property="og:url" content="https://boaz.uz" />
                    <meta property="og:type" content="website" />

                    {/* Twitter Card Meta Tags */}
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:title" content="Boaz Logistics - Transport va Yetkazib Berish Xizmatlari" />
                    <meta name="twitter:description" content="Boaz.uz - Eng ishonchli logistik va transport xizmatlari. O'zbekiston va xalqaro miqyosda." />
                    <meta name="twitter:image" content="/logo.svg" />

                    {/* JSON-LD Schema Markup */}
                    <script type="application/ld+json">
                    {`
                    {
                        "@context": "http://schema.org",
                        "@type": "Organization",
                        "name": "Boaz Logistics",
                        "url": "https://boaz.uz",
                        "logo": "/logo.svg",
                        "sameAs": [
                            "https://www.facebook.com/boaz.uz",
                            "https://www.linkedin.com/company/boaz-uz",
                            "https://twitter.com/boaz_uz"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+998 71 123 45 67",
                            "contactType": "Customer Service",
                            "areaServed": "UZ",
                            "availableLanguage": "Uzbek, Russian"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "Tashkent, Uzbekistan",
                            "addressLocality": "Tashkent",
                            "postalCode": "100100",
                            "addressCountry": "UZ"
                        }
                    }
                    `}
                    </script>
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument
