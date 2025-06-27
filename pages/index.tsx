import Head from 'next/head';
import React from 'react';

import App from '../src/components/App';

export default function Home() {
  return (
    <>
      <Head>
        <title>Frontend Exercise</title>
        <link rel="icon" href="https://sierra.ai/icon.png" />
      </Head>
      <App />
    </>
  );
}
