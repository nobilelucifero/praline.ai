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
                  ? "w-[800px] h-[400px] bg-gray-200 flex justify-between items-center"
                  : "w-[800px] h-[400px] hidden animate-none"
              }
            >
              <div className="animate-slide-move-in">Slide no. {text}</div>
              {/* {slideIndex === index ? "slide active-anim" : "slide"} */}
            </div>
          );
        })}
      <div>
        <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        <span className="mx-2"></span>
        <BtnSlider moveSlide={nextSlide} direction={"next"} />
      </div>
    </div>
  );
}

export function BtnSlider({ direction, moveSlide }) {
  return (
    <button className="btn-slide" onClick={moveSlide}>
      {direction === "next" ? "Next ➡️" : "⬅️ Prev"}
    </button>
  );
}
