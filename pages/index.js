import { useState, useEffect } from "react";

import Head from "next/head";
import Image from "next/image";
import HeroImage from "../public/hero.jpg";

import Link from "next/link";
import Page from "../layouts/page";

import { Section } from "../components/Section";

import { Button } from "../components/Button";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";

const res200 = {
  text: "1. Continued growth and maturation of the VC sector, with increasing amounts of capital flowing into startups and emerging industries.\n2. A focus on diversity and inclusion, with more VC firms looking to invest in underrepresented founders and ideas.\n3. The rise of environmental, social, and governance (ESG) investing, with more VC firms incorporating sustainability and impact into their investment strategies.\n4. An increasing emphasis on innovation and technology, with artificial intelligence, robotics, and other cutting-edge technologies becoming increasingly important to VC investors.\n5. Continued consolidation and evolution of the VC landscape, with larger, more established firms growing in size and influence, and newer, more specialized firms emerging to focus on specific industries and geographies.",
  info: "success",
};

export default function Home() {
  // const [data, setData] = useState(null);
  // const [isLoading, setLoading] = useState(false);

  // useEffect(() => {
  //   setLoading(true);

  //   // temp
  //   // setLoading(false);
  //   // setData(res200);

  //   fetch("http://20.113.19.4:80/api/v1/service/aks-d80a/score", {
  //     method: "POST",
  //     headers: {
  //       Authorization: `Bearer ${token}`,
  //     },
  //     body: JSON.stringify(deets),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setData(data);
  //       setLoading(false);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No profile data</p>;

  return (
    <div className="bg-sky-300">
      <Head>
        <title>Marmelade.ai</title>
        <meta
          name="description"
          content="Put your content strategy on autopilot with AI"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <Page>
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="lr:pr-8 lg:basis-2/5">
            <h1
              className="
          text-3xl
          font-bold
          mb-2
          lg:w-5/6
          "
            >
              Put your content strategy on autopilot with AI
            </h1>

            <p className="mb-8 text-lg lg:w-3/4">
              Research and create relevant content for your audience 10x faster.
            </p>

            <a
              className="
             inline-block
              whitespace-nowrap
          text-white
              font-bold
              tracking-wide
              rounded-lg
            px-4 py-3 mr-2
            bg-gray-900
            hover:bg-gray-800
          focus:outline-none
                focus:ring-4
              focus:ring-blue-300"
              onClick={(e) => {
                e.preventDefault();
                gtag("event", "page_view", {
                  page_title: "survey_view-index",
                });
                window.open("https://tally.so/r/wvXL5d");
              }}
              href="https://tally.so/r/wvXL5d"
              target="_blank"
              rel="noreferrer"
            >
              Get early access
            </a>
          </div>
          <div className="lg:pl-8 lg:basis-3/5 mb-12 lg:mb-0">
            <Image
              width={592}
              height={592}
              src={"/hero-transparent.png"}
              alt=" "
              priority="true"
            />
          </div>
        </div>
      </Page>
    </div>
  );
}
