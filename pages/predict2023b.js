import { useState } from "react";

import { formContent } from "../data/schema";

import Head from "next/head";
import Image from "next/image";

import Page from "../layouts/page";

import { Button } from "../components/Button";

const Prompt = (props) => {
  const { text, answers, name } = props;

  const fieldsetId = `group-${name}`;

  if (!name)
    return (
      <section
        className="
  0mb-12
  0last:mb-0
  snap-start
  bg-white
  0odd:bg-rose-200
  p-12
  w-[100%]
  min-h-[calc(100vh_-_160px_-_160px)]
  rounded-xl
  mb-4
"
      >
        {props.children}
      </section>
    );

  return (
    <section
      className="
      0mb-12
      0last:mb-0
      snap-start
      bg-white
      0odd:bg-rose-200
      p-12
      w-[100%]
      min-h-[calc(100vh_-_160px_-_160px)]
      rounded-xl
      mb-4
    "
    >
      <h3
        className="
        text-xl
        font-bold
      "
      >
        {text}
      </h3>
      <fieldset id={name}>
        {answers.map((answer, index) => {
          const id = `${name}-${index}`;
          return (
            <div className="flex items-center mb-0" key={index}>
              <input
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                value={answer}
                // value={id}
                name={name}
                id={id}
              />
              <label
                className="
                  block
                  ml-2
                "
                htmlFor={id}
              >
                {answer}
              </label>
            </div>
          );
        })}
      </fieldset>
    </section>
  );
};

export default function Predict2023() {
  const [content] = useState(formContent);
  // const [formData, setFormData] = useState();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      industry: event.target.elements.industry.value,
      tone: event.target.elements.tone.value,
      emoji: event.target.elements.emoji.value,
    };

    // const JSONdata = JSON.stringify(data);

    console.log("POST", data);
    // console.log("POST", JSONdata);
  };

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Get predictin'!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page className="bg-gray-200">
        <form
          onSubmit={handleSubmit}
          className="
          snap-y snap-mandatory
          w-full h-max max-h-[calc(100vh_-_160px_-_160px)]
          overflow-scroll
          "
        >
          {content &&
            content.prompts.map((prompt, index) => {
              const key = `${prompt.text.substring(0, 3)}${index}`;
              // <pre>{JSON.stringify(prompt, null, 4)}</pre>
              return (
                <Prompt
                  text={prompt.text}
                  answers={prompt.answers}
                  name={prompt.name}
                  key={prompt.name}
                />
              );
            })}
          <Prompt>
            <button
              className="
            whitespace-nowrap
            text-white
            font-bold
            tracking-wide
            rounded-lg
            px-4 py-3 mr-2
            bg-gray-900
            hover:bg-gray-800
            0dark:bg-gray-50
            0dark:hover:bg-gray-100
            focus:outline-none
            focus:ring-4
            focus:ring-blue-300
            0dark:focus:ring-blue-500
            "
              type="submit"
            >
              Submit
            </button>
          </Prompt>
        </form>
      </Page>
    </div>
  );
}
