import { useState } from "react";

import Head from "next/head";
import Image from "next/image";

import Page from "../layouts/page";

import { Button } from "../components/Button";

export default function PrivacyPolicy() {
  return (
    <div>
      <Head>
        <title>Privacy Policy - Marmelade.ai</title>
        <meta name="description" content="Get predictin'!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page className="bg-gray-100">
        <h1 className="text-3xl font-bold">
          Website privacy policy page content
        </h1>
      </Page>
    </div>
  );
}
