import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* 사이트 타이틀 변경 */}
      <Head>
        <title>test</title>
      </Head>
      <h1>pages/_app 최상위 테스트</h1>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
