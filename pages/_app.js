import Layout from '@components/Layout';


export const reportWebVitals = (metric) => {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }

export default MyApp;