import { useState, useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { formContent } from "../data/schema2";

import { Wrapper } from "../components/Wrapper";

export default function Test() {
  const [content] = useState(formContent);

  return (
    <div>
      <Slides data={content.prompts} />
    </div>
  );
}

export function Slides({ data }) {
  const items = data;
  const [slideIndex, setSlideIndex] = useState(0);
  const length = data.length - 1;

  const nextSlide = () => {
    if (slideIndex !== length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === length) {
      setSlideIndex(0);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 0) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 0) {
      setSlideIndex(length);
    }
  };

  return (
    <main className="relative">
      <Slide>
        <h1 className="mb-2 text-5xl font-bold">Predict 2023 with AI</h1>
        <p className="text-xl">
          Choose from a few prompts and impress your audience with the best
          predictions for the upcoming year. 🔥
          <small
            className="
              block
              text-sky-900
            "
          >
            Powered by{" "}
            <a
              className="border-b-2 border-sky-900 border-dotted hover:border-solid"
              href="https://openai.com"
            >
              ChatGPT
            </a>
            .
          </small>
        </p>
      </Slide>
      {items &&
        data.map((item, index) => {
          const { text, name, theme } = item;

          return (
            // <
            //   }
            //   className={
            //     slideIndex === index
            //       ? "w-full h-screen bg-gray-200 flex justify-center items-center align-items-center"
            //       : "w-full h-screen hidden"
            //   }
            // >
            <Slide
              key={`${name}-${index}`}
              className={slideIndex === index ? "" : "hidden"}
            >
              Slide no. {text}
            </Slide>
            //{/* {slideIndex === index ? "slide active-anim" : "slide"} */}
            // </section>
          );
        })}

      <div className="absolute flex left-0 bottom-0 w-full p-6 justify-between">
        <div className="flex items-center bg-white py-3 px-4 rounded-lg mr-2">
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
          <span className="mx-2"></span>
          <BtnSlider moveSlide={nextSlide} direction={"next"} />
        </div>
        <div className="flex items-center bg-white py-3 px-4 rounded-lg">
          By{" "}
          <Link
            href="/"
            className="
            ml-2
            font-bold
            flex
            items-center
          "
          >
            <Image
              width={32}
              height={32}
              src="/marmelade-logo.svg"
              alt=" "
            ></Image>
            {/* 🍊 marmelade.ai */}
            &nbsp; marmelade.ai
          </Link>
        </div>
      </div>
    </main>
  );
}

export function BtnSlider({ direction, moveSlide }) {
  return (
    <button className="btn-slide" onClick={moveSlide}>
      {direction === "next" ? "Next ➡️" : "⬅️ Prev"}
    </button>
  );
}

export function Slide({ children, className }) {
  return (
    <Wrapper
      className={`w-full h-screen bg-gray-200 flex justify-center items-center align-items-center animate-slide-move-in bg-pink-300 ${className}`}
    >
      {children}
    </Wrapper>
  );
}
