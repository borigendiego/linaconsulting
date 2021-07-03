import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>
                    <title>Lina Consulting</title>
                    <meta name='viewport' content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover' />
                    <meta name="theme-color" content="#000000" />
                    <meta
                        name="Lina Consulting"
                        content="Consulting services"
                    />
                    <meta property='og:type' content='website' />
                    <meta property='og:title' content='Lina Consulting' />
                    <meta property='og:description' content='Lina Consulting - website' />
                    <meta property='og:site_name' content='Lina Consulting' />
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script
                        async
                        src={`https://www.googletagmanager.com/gtag/js?id=G-2R7QQ6B1B7`}
                    />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', 'G-2R7QQ6B1B7', {
                                  page_path: window.location.pathname,
                                });
                              `,
                        }}
                    />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}
