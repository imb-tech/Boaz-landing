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
                    <meta charSet="UTF-8" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                    <meta name="robots" content="index, follow" />

                    {/* Uzbek (uz) */}
                    <meta name="description" lang="uz" content="Boaz.uz - Logistika xizmatlari, yuk tashish, transport, yetkazib berish, ombor xizmatlari. O'zbekiston va xalqaro miqyosda tezkor va ishonchli yetkazib berish. Eng yaxshi logistika kompaniyasi O'zbekistonda va Markaziy Osiyoda." />
                    <meta name="keywords" lang="uz" content="logistika, yuk tashish, transport, yetkazib berish, ombor, xususiy logistik xizmatlar, xalqaro yetkazib berish, O'zbekiston logistikasi, Boaz.uz, transport xizmatlari, yuk tashish kompaniyasi, eng yaxshi logistika kompaniyasi, tezkor yetkazib berish" />

                    {/* Russian (ru) */}
                    <meta name="description" lang="ru" content="Boaz.uz - Логистические услуги, доставка грузов, транспорт, склады. Быстрая и надежная доставка по Узбекистану и за его пределами. Лучшая логистическая компания в Узбекистане и Центральной Азии." />
                    <meta name="keywords" lang="ru" content="логистика, грузоперевозки, транспорт, доставка, склад, международная доставка, логистика Узбекистана, Boaz.uz, транспортные услуги, логистическая компания, быстрая доставка" />

                    {/* Turkish (tr) */}
                    <meta name="description" lang="tr" content="Boaz.uz - Lojistik hizmetleri, taşıma, ulaşım, depo hizmetleri. Özbekistan ve uluslararası alanda hızlı ve güvenilir teslimat. Özbekistan ve Orta Asya'nın en iyi lojistik şirketi." />
                    <meta name="keywords" lang="tr" content="lojistik, taşıma, ulaşım, teslimat, depo, uluslararası lojistik, Özbekistan lojistiği, Boaz.uz, taşıma hizmetleri, lojistik şirketi, hızlı teslimat" />
                    {/* English (en) */}
                    <meta name="description" lang="en" content="Boaz.uz - Logistics services, freight transportation, delivery, warehouse solutions. Fast and reliable shipping in Uzbekistan and internationally. The best logistics company in Uzbekistan and Central Asia." />
                    <meta name="keywords" lang="en" content="logistics, freight, delivery, transport, shipping, warehouse, international logistics, Uzbekistan logistics, Boaz.uz, transport services, best logistics company, fast delivery" />

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
                    <script type="application/ld+json" dangerouslySetInnerHTML={{
                        __html: `
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
                                "telephone": "+998 95 010 91 32",
                                "contactType": "Customer Service",
                                "areaServed": "UZ",
                                "availableLanguage": ["Uzbek", "Russian"]
                            },
                            "address": {
                                "@type": "PostalAddress",
                                "streetAddress": "Tashkent, Uzbekistan",
                                "addressLocality": "Tashkent",
                                "postalCode": "100100",
                                "addressCountry": "UZ"
                            }
                        }
                        `
                    }} />

                    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-17008447270">
                    </script>
                    <script>
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments)}
                        gtag('js', new Date());

                        gtag('config', 'AW-17008447270');
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
