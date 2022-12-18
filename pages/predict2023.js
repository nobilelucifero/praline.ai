import { useState, useEffect } from "react";

import { formContent } from "../data/schema";

import Head from "next/head";
import Image from "next/image";

import Page from "../layouts/page";
import Modal from "../components/ui/Modal";
import ModalToolbar from "../components/ui/ModalToolbar";
import Teaser from "../components/ui/Teaser";
import Prompt from "../components/predict2023/Prompt";

const res200 = {
  text: "1. Continued growth and maturation of the VC sector, with increasing amounts of capital flowing into startups and emerging industries.\n2. A focus on diversity and inclusion, with more VC firms looking to invest in underrepresented founders and ideas.\n3. The rise of environmental, social, and governance (ESG) investing, with more VC firms incorporating sustainability and impact into their investment strategies.\n4. An increasing emphasis on innovation and technology, with artificial intelligence, robotics, and other cutting-edge technologies becoming increasingly important to VC investors.\n5. Continued consolidation and evolution of the VC landscape, with larger, more established firms growing in size and influence, and newer, more specialized firms emerging to focus on specific industries and geographies.",
  info: "success",
};

export default function Predict2023() {
  const [content] = useState(formContent);
  const [formData, setFormData] = useState({});
  const [resData, setResData] = useState(null);
  const [open, setOpen] = useState(false);
  const [resultHidden, setResultHidden] = useState(true);

  useEffect(() => {
    // temp
    setResData(res200);
  }, []);

  const handleChange = async (event) => {
    setFormData((formData) => ({
      ...formData,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    // console.info(event.target.elements.fieldset);
    // const elements = event.target.elements;
    // console.log(">>>", event.target.elements.value);

    // Object.keys(elements).map((i) => {
    //   if (elements[i]) {
    //     // console.info("formData", formData);

    //     setFormData((formData) => ({
    //       ...formData,
    //       [elements[i].name]: elements[i].value,
    //     }));
    //   }
    // });

    // setFormData({
    //   industry: event.target.elements.industry.value,
    //   style: event.target.elements.style.value,
    //   personality: event.target.elements.personality.value,
    //   verbosity: event.target.elements.verbosity.value,
    //   emoji: event.target.elements.emoji.value,
    // });
    // const data = {};
    // for (var x = 0; x < 100; x++) {
    //   data[x] = { name: etc };
    // }

    // const JSONdata = JSON.stringify(data);

    if (!formData) {
      console.error("formData is empty!");
    }
    console.log("POST", formData);
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
        <div className="mb-24 animate-[fadeIn_0.5s_ease-out_forwards]">
          <h1 className="mb-2 text-5xl font-bold">Predict 2023 with AI</h1>
          <p className="text-xl">
            Input a few prompts and impress your audience. 🔥
          </p>
        </div>
        <form onSubmit={handleSubmit} onChange={handleChange}>
          {content &&
            content.prompts.map((prompt, index) => {
              const key = `${prompt.text.substring(0, 3)}${index}`;
              console.log("delay:", `${index * 100 + "s"}`);
              // <pre>{JSON.stringify(prompt, null, 4)}</pre>
              // console.log("$$$", prompt.name, prompt.answers);
              return (
                <Prompt
                  text={prompt.text}
                  answers={prompt.answers}
                  name={prompt.name}
                  key={prompt.name}
                  className={`
                    animate-[fadeIn_0.5s_ease-out_forwards]
                  `}
                  style={{
                    animationDelay: `${((index + 2) * 2.5) / 10 + "s"}`,
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
            title="Your trend predictions 2023 are ready!"
            isOpen={open}
            onClose={() => setOpen(false)}
          >
            <Teaser hidden={true}>
              {res200.text.split("\n").map(function (item, index) {
                return (
                  <span className="block mb-2 last:mb-0" key={index}>
                    {item}
                    <br />
                  </span>
                );
              })}
              <ModalToolbar />
            </Teaser>
          </Modal>
        </form>
      </Page>
    </div>
  );
}
