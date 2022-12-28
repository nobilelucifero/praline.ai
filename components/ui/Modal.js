import { useEffect } from "react";
import * as ReactDOM from "react-dom";

import Image from "next/image";

import Page from "../../layouts/page";

function Title(props) {
  return (
    <h1
      className="
        text-2xl
        font-bold
        mb-6
        w-[calc(100%_-_48px)]
        text-center
        lg:text-left
    "
    >
      {props.children}
    </h1>
  );
}

function CloseButton(props) {
  const closeIcon = (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6L6 18M6 6L18 18"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <button
      className="
        block
        fixed
        top-5
        right-6
        w-10
        h-10
        p-2
        rounded-full
        bg-gray-900
        hover:bg-gray-700
        0overflow-hidden
        text-center
        "
      onClick={props.onClick}
      title={props.children}
    >
      {closeIcon} <span className="hidden">{props.children}</span>
    </button>
  );
}

export default function Modal({ isOpen, onClose, children, title }) {
  const inheritedTitle = title;
  useEffect(() => {
    if (isOpen) {
      document.body.className = "overflow-hidden";
      // Pageview
      gtag("event", "page_view", {
        page_title: inheritedTitle,
      });
    }
    if (!isOpen) document.body.className = "";
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="
        flex
        0lg:items-center
        justify-center
        0p-12
        fixed
        left-0
        top-0
        w-screen
        h-screen
        bg-gray-700
        bg-opacity-70
        backdrop-blur-sm
    "
      onClick={onClose}
    >
      <div
        className="
        relative
        bg-gray-100
        w-full
        min-h-screen
        py-6
        lg:px-6
        rounded-xl
        overflow-y-scroll
        opacity-0
        animate-[fadeIn_0.5s_ease-out_forwards]
        flex
        flex-col
      "
        onClick={(e) => e.stopPropagation()}
      >
        <Page contentOnly={true}>
          <div className="flex flex-col-reverse lg:flex-row items-center mb-12">
            <div className="lg:mt-12 lg:pr-0 lg:basis-3/5">
              <h1
                className="
                  text-3xl
                  text-center
                  lg:text-left
                  lg:text-6xl
                  font-bold
                "
              >
                {title ? <>{title}</> : null}
              </h1>
            </div>

            <div className="lg:pl-8 flex items-center justify-end lg:basis-2/5 mb-12 lg:mb-0">
              <div
                className="
              "
              >
                <Image
                  width={240}
                  height={240}
                  src={"/prediction-ready.png"}
                  alt=" "
                  priority="true"
                />
              </div>
            </div>
          </div>
          <div>{children}</div>
        </Page>
        <CloseButton onClick={() => (window.location = "./predict2023")}>
          Close
        </CloseButton>
        {/* <CloseButton onClick={onClose}>Close</CloseButton> */}
      </div>
    </div>,
    document.body
  );
}
