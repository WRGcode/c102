import Head from "next/head";


const HeadTag = () => {
  return <Head>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta charSet="UTF-8" />

    <link rel="icon" href="/favicon.ico" sizes="16*16" type="image/png" />

    <link rel="stylesheet" href="/listMessages.css" />
    <link rel="stylesheet" href="style.css" />
    <link rel="stylesheet" href="nprogress.css" />

    <title>Social media app</title>
  </Head>
};

export default HeadTag;
