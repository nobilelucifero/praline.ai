import { useState, useEffect } from "react";
import { setCookie, hasCookie } from "cookies-next";

import { formContent as content } from "../data/schema";

import Head from "next/head";

import Page from "../layouts/page";

import Modal from "../components/ui/Modal";
import Teaser from "../components/ui/Teaser";
import Prompt from "../components/predict2023/Prompt";

export default function Predict2023() {
  // const [data, setData] = useState(initialData);
  // const [currentData, setCurrentData] = useState();
  const [submitMessage, setSubmitMessage] = useState({
    text: null,
    type: null,
  });

  const [response, setResponse] = useState("");
  const [open, setOpen] = useState(false);
  const [teaserHidden, setTeaserHidden] = useState(true);

  useEffect(() => {
    // setConsent(hasCookie("hasEmail"));
    if (hasCookie("hasEmail")) {
      setTeaserHidden(false);
      // setCookie("hasEmail", "false", { maxAge: 60 * 60 * 24 * 365 });
    }
  }, []);

  // const handleChange = async (event) => {
  //   setData({ ...data, [event.target.name]: event.target.value });
  // };

  function basicValidation(array) {
    return array.some((el) => el == null || el === "");
  }

  const submitValues = async (value) => {
    const keys = Object.values(value).join("-");

    const res = await fetch(`/api/lookup`, {
      method: "POST",
      body: JSON.stringify(value),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const APIdata = await res.json();
    const obj = JSON.parse(APIdata);
    const result = obj[keys];

    const resultCleaned = result.replace(/\n\n/g, "\n");
    const resultFormatted = resultCleaned.replace(/\n/g, "\n\n");
    const resultWithWatermark = resultFormatted.concat(
      "\n\nTrend predictions 2023 by praline.ai\n#predict2023"
      // "\n\nMade with praline.ai"
    );

    setResponse(resultWithWatermark);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSubmitMessage({
      text: null,
      type: null,
    });

    const values = {
      industry: event.target.elements.industry.value,
      style: event.target.elements.style.value,
      personality: event.target.elements.personality.value,
      verbosity: event.target.elements.verbosity.value,
      emoji: event.target.elements.emoji.value,
    };

    const arrayValues = Object.values(values);

    if (basicValidation(arrayValues)) {
      setSubmitMessage({
        text: "Make sure to fill in all the prompts before submitting.",
        type: null,
      });
    } else {
      submitValues(values);
      setOpen(true);
    }
  };

  return (
    <div>
      <Head>
        <title>Praline.ai | Predict 2023 with praline.ai</title>
        <meta name="description" content="Predict 2023 with AI" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page className="bg-gray-100">
        <div className="mb-24 animate-[fadeIn_0.5s_ease-out_forwards]">
          <h1 className="mb-2 text-5xl font-bold">Predict 2023 with AI</h1>
          <p className="text-xl">
            Choose from a few prompts and impress your audience with the best
            predictions for the upcoming year. 🔥
            <small className="block text-gray-800 mt-1">
              Powered by{" "}
              <a
                className="border-b-2 border-gray-900 border-dotted hover:border-solid"
                href="https://openai.com"
              >
                ChatGPT
              </a>{" "}
              and some secret sauce. ✨
            </small>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          {content &&
            content.prompts.map((prompt, promptIndex) => {
              const promptId = `prompt-${prompt.name}-${promptIndex}`;
              return (
                <Prompt
                  text={prompt.text}
                  answers={prompt.answers}
                  name={prompt.name}
                  key={promptId}
                  className={`
                    animate-[fadeIn_0.5s_ease-out_forwards]
                  `}
                  style={{
                    animationDelay: `${((promptIndex + 2) * 2.5) / 10 + "s"}`,
                  }}
                />
              );
            })}
          <button
            className="
              whitespace-nowrap
              text-white
              font-bold
              tracking-wide
              rounded-lg
              px-4 py-3 mb-2
              bg-gray-900
              hover:bg-gray-800
              focus:outline-none
              focus:ring-4
              focus:ring-blue-300
            "
            type="submit"
          >
            Submit
          </button>

          {submitMessage.text && (
            <div className="inline-block px-4 py-3 ml-2 bg-red-200 rounded-lg">
              {submitMessage.text}
            </div>
          )}

          <Modal
            title="Your trend predictions for 2023 are ready!"
            isOpen={open}
            onClose={() => setOpen(false)}
          >
            <Teaser hidden={teaserHidden} output={response}>
              <div
                className="
                flex flex-col
              "
              >
                {response ? (
                  response.split("\n\n").map(function (item, index) {
                    return (
                      <span
                        className="
                        block
                        mb-2
                        last:mb-0
                        p-4
                        lg:p-8
                        bg-white
                        shadow-xl
                        rounded-xl
                      "
                        key={index}
                      >
                        {item}
                        {/* <br /> */}
                      </span>
                    );
                  })
                ) : (
                  <p>Loading…</p>
                )}
              </div>
            </Teaser>
            {/* <ModalToolbar hidden={true} input={response} /> */}
          </Modal>
        </form>
      </Page>
    </div>
  );
}
