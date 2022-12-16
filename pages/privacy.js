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
        <h1 className="text-3xl font-bold mb-12">
          Website privacy policy page content
        </h1>
        <p>Information according to § 5 of the German Telemedia Act</p>
        <hr class="my-8 h-px bg-gray-300 border-0 dark:bg-gray-700" />

        <div className="mb-12">
          <h2 className="font-bold text-xl mb-4">Operator and Contact</h2>
          <p>Marmelade.ai UG (in Gründung)</p>
          <p>
            Berlinstraße 99 <br />
            10123 Berlin <br />
            Germany
          </p>
        </div>

        <div className="mb-12">
          <p>
            Head office and register court: TBA <br />
            Street: TBA <br />
            VAT ID: TBA <br />
            Contact: katia@marmelade.ai
          </p>
        </div>

        <div className="mb-12">
          <h2 className="font-bold text-xl mb-4">Representation</h2>
          <p>
            Marmelade.ai UG (in Gründung) is represented by its Managing
            Directors: TBD
          </p>
        </div>
      </Page>
    </div>
  );
}
