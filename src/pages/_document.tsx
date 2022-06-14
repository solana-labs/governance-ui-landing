import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='stylesheet' href='https://use.typekit.net/cwm7dgy.css' />
          <link rel='manifest' href='/manifest.json' />
          <meta name='msapplication-TileColor' content='#ffffff' />
          <meta
            name='msapplication-TileImage'
            content='/favicons/ms-icon-144x144.png'
          />
          <meta name='theme-color' content='#ffffff' />
        </Head>
        <body className='bg-background'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
