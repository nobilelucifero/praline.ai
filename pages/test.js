import { useState, useEffect } from "react";

import { formContent } from "../data/schema";

export default function Test() {
  const [content] = useState(formContent);

  return (
    <div>
      <Slides data={content.prompts} />
    </div>
  );
}

export function Slides({ data }) {
  const items = useState(formContent);
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
    <div className="h-24">
      {items &&
        data.map((item, index) => {
          const { text, name, theme } = item;

          return (
            <div
              key={`${name}-${index}`}
              className={
                slideIndex === index
                  ? "flex justify-between items-center"
                  : "hidden"
              }
            >
              Slide no. {text}{" "}
              {/* {slideIndex === index ? "slide active-anim" : "slide"} */}
            </div>
          );
        })}
      <div>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
      </div>
    </div>
  );
}

export function BtnSlider({ direction, moveSlide }) {
  return (
    <button className="btn-slide" onClick={moveSlide}>
      {direction === "next" ? "Next &rarr;" : "&larr; Prev"}
    </button>
  );
}
