import { useEffect } from "react";
import * as ReactDOM from "react-dom";

function Title(props) {
  return (
    <h1
      className="
        text-2xl
        font-bold
        mb-6
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
        absolute
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
  useEffect(() => {
    if (isOpen) {
      document.body.className = "overflow-hidden";
      // Pageview
      gtag("event", "page_view", {
        page_title: title,
      });
    }
    if (!isOpen) document.body.className = "";
  }, [isOpen]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="
        flex
        items-center
        justify-center
        0content-center
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
        bg-white
        w-[36rem]
        max-w-xl
        py-6
        px-6
        rounded-xl
        overflow-hidden
        opacity-0
        animate-[fadeIn_0.25s_ease-out_forwards]
      "
        onClick={(e) => e.stopPropagation()}
      >
        <CloseButton onClick={onClose}>Close</CloseButton>
        {title ? <Title>{title}</Title> : null}
        <div>{children}</div>
      </div>
    </div>,
    document.body
  );
}
