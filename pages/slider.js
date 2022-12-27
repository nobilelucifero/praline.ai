import { useCallback, useState, useEffect, createRef } from "react";

import Head from "next/head";

import Page from "../layouts/page";

import ContentBlock from "../components/website/ContentBlock";
import H2 from "../components/website/H2";
import Slide from "../components/slider/Slide";
import H3 from "../components/website/H3";
import P from "../components/website/P";
import { render } from "react-dom";

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

  const refs = sliderData.reduce((acc, value) => {
    acc[value] = createRef();
    return acc;
  }, {});

  const inc = () => {
    if (slideIndexEnd) return;

    if (slideIndex < sliderDataLength) {
      setSlideIndex(slideIndex + 1);
    }
  };

  const dec = () => {
    if (slideIndexStart) return;

    if (slideIndex > 0) {
      setSlideIndex(slideIndex - 1);
    }
  };

  console.log("refs", refs);

  useEffect(() => {
    if (slideIndex > 0) {
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
  }, [slideIndex]);

  return (
    <div>
      <Head>
        <title>Slider - Praline.ai</title>
        <meta name="description" content="Praline.ai Slider" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="bg-gray-100">
        {sliderData.map((slide, slideDataIndex) => {
          console.log("slide", slide);
          return (
            <Slide
              key={slideDataIndex}
              slideDataIndex={slideDataIndex}
              setSlideIndex={setSlideIndex}
              className={`${
                slideIndex == slideDataIndex ? "bg-pink-300" : "bg-sky-300"
              }`}
              title={slide.title}
            />
          );
        })}

        {/* Controls */}
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
    </div>
  );
}
