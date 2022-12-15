import Head from "next/head";
import "../styles/globals.css";
import { Layout } from "@/components";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        {/* 사이트 타이틀 변경 */}
        <title>test</title>
      </Head>

      <h1>pages/_app 최상위 테스트</h1>

      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
