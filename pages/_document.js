import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
      // lo que se hace aquí aplica a todas las páginas
      // si no se necesita se puede boorar
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
            {/* favicon */}
            {/* webfont */}
            {/* stylesheet */}
            {/* script/js */}
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&display=swap" rel="stylesheet" />
            <script src="https://kit.fontawesome.com/4510c7bce0.js" crossorigin="anonymous"></script>
        </Head>
        <body className="body">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;