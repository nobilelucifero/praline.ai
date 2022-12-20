// import dynamic from "next/dynamic"
import { useState } from "react";
import { Button } from "../Button";

export default function ModalToolbar({ input }) {
  const [textToCopy] = useState(input);
  const [feedback, setFeedback] = useState(input);
  return (
    <div className="mt-6">
      {/* <Button>Post on Twitter</Button> */}
      {/* <Button>Post on Linkedin</Button> */}
      <button
        className="inline-block
      whitespace-nowrap
    text-white
    font-bold
    tracking-wide
    rounded-lg
    px-4 py-3 mr-2 mb-2
    bg-gray-900
    hover:bg-gray-800
    focus:outline-none
    focus:ring-4
    focus:ring-blue-300"
        onClick={() => {
          navigator.clipboard.writeText(textToCopy);
          // document.execCommand("copy", true, textToCopy);
          setFeedback("✅ Prediction copied");
        }}
      >
        Copy text
      </button>
      {feedback && (
        <div
          className="
           bg-green-200
           inline-block
           rounded-lg
            px-4 py-3
          "
        >
          {feedback}
        </div>
      )}
    </div>
  );
}
