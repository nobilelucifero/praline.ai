import { useState, useEffect } from "react";

import { formContent } from "../data/schema";

import Head from "next/head";
import Image from "next/image";

import Page from "../layouts/page";
import Modal from "../components/ui/Modal";
import Prompt from "../components/predict2023/Prompt";

import { Button } from "../components/Button";
import Teaser from "../components/ui/Teaser";

const res200 = {
  text: "1. Continued growth and maturation of the VC sector, with increasing amounts of capital flowing into startups and emerging industries.\n2. A focus on diversity and inclusion, with more VC firms looking to invest in underrepresented founders and ideas.\n3. The rise of environmental, social, and governance (ESG) investing, with more VC firms incorporating sustainability and impact into their investment strategies.\n4. An increasing emphasis on innovation and technology, with artificial intelligence, robotics, and other cutting-edge technologies becoming increasingly important to VC investors.\n5. Continued consolidation and evolution of the VC landscape, with larger, more established firms growing in size and influence, and newer, more specialized firms emerging to focus on specific industries and geographies.",
  info: "success",
};

export default function Predict2023() {
  const [content] = useState(formContent);
  const [resData, setResData] = useState(null);
  const [open, setOpen] = useState(false);
  const [resultHidden, setResultHidden] = useState(true);

  useEffect(() => {
    // temp
    setResData(res200);
  }, []);

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

      <Page className="bg-sky-300">
        <form onSubmit={handleSubmit}>
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
            onClick={() => setOpen(true)}
          >
            Submit
          </button>
          <Modal
            title="Your results are in 🎉"
            isOpen={open}
            onClose={() => setOpen(false)}
          >
            <Teaser hidden>
              {res200.text.split("\n").map(function (item, index) {
                return (
                  <span className="block mb-1 last:mb-0" key={index}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </Teaser>
          </Modal>
        </form>
      </Page>
    </div>
  );
}
