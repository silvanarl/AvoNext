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