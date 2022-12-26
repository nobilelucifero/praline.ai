import { useCallback, useState, useEffect } from "react";

import Head from "next/head";

import Page from "../layouts/page";

import ContentBlock from "../components/website/ContentBlock";
import H2 from "../components/website/H2";
import H3 from "../components/website/H3";
import P from "../components/website/P";

export default function PrivacyPolicy() {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideIndexStart, setSlideIndexStart] = useState(true);
  const [slideIndexEnd, setSlideIndexEnd] = useState(false);

  const sliderData = [
    {
      title: "I'm Slide A",
    },
    {
      title: "I'm Slide B",
    },
    {
      title: "I'm Slide C",
    },
    {
      title: "I'm Slide D",
    },
  ];

  const [sliderDataLength, setSliderDataLength] = useState(
    sliderData.length - 1
  );

  // const inc = useCallback(() => {
  //   console.log("slideIndex inc before", slideIndex);
  //   if (slideIndex < sliderDataLength) {
  //     setSlideIndex(slideIndex + 1);
  //   }
  //   console.log("slideIndex inc after", slideIndex);
  // }, [slideIndex, sliderDataLength]);

  const inc = () => {
    if (slideIndexEnd) return;
    // console.log("slideIndex inc before", slideIndex);
    if (slideIndex < sliderDataLength) {
      setSlideIndex(slideIndex + 1);
    }
    // console.log("slideIndex inc after", slideIndex);
  };

  const dec = () => {
    if (slideIndexStart) return;
    // const dec = useCallback(() => {
    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
    // console.log("slideIndex", slideIndex);
  };
  // }, [slideIndex]);

  useEffect(() => {
    // inc();
    // return () => {
    // second
    console.log("slideIndex", slideIndex);
    console.log("slideIndexStart", slideIndexStart);
    console.log("slideIndexEnd", slideIndexEnd);

    if (slideIndex > 0) {
      console.log("slideIndex?", slideIndex);

      setSlideIndexStart(false);
    }
    if (slideIndex == sliderDataLength) {
      setSlideIndexEnd(true);
    }

    if (slideIndex == 0) {
      setSlideIndexStart(true);
    }
    if (slideIndex < sliderDataLength) {
      setSlideIndexEnd(false);
    }
    // };
  }, [slideIndex]); // third

  return (
    <div>
      <Head>
        <title>Slider - Marmelade.ai</title>
        <meta name="description" content="Marmelade.ai Slider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page className="bg-gray-100">
        <div>
          <div
            className="
              flex
              items-center
              justify-items-center
              width-[400px] height-[300px]
            "
          >
            <h1 className="text-xl font-bold">
              {sliderData[slideIndex].title}
            </h1>
          </div>
          <div className="flex flex-row gap-6">
            <button
              className={`${slideIndexStart ? "opacity-50" : null}`}
              onClick={dec}
            >
              &larr; Prev
            </button>

            <button
              className={`${slideIndexEnd ? "opacity-50" : null}`}
              onClick={inc}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </Page>
    </div>
  );
}
