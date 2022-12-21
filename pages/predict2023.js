import { useState, useEffect } from "react";

import { initialData, formContent as content } from "../data/schema";

import Head from "next/head";
import Image from "next/image";

import Page from "../layouts/page";
import Modal from "../components/ui/Modal";
// import ModalToolbar from "../components/ui/ModalToolbar";
import Teaser from "../components/ui/Teaser";
import Prompt from "../components/predict2023/Prompt";

// const res200 = {
//   text: "1. Continued growth and maturation of the VC sector, with increasing amounts of capital flowing into startups and emerging industries.\n2. A focus on diversity and inclusion, with more VC firms looking to invest in underrepresented founders and ideas.\n3. The rise of environmental, social, and governance (ESG) investing, with more VC firms incorporating sustainability and impact into their investment strategies.\n4. An increasing emphasis on innovation and technology, with artificial intelligence, robotics, and other cutting-edge technologies becoming increasingly important to VC investors.\n5. Continued consolidation and evolution of the VC landscape, with larger, more established firms growing in size and influence, and newer, more specialized firms emerging to focus on specific industries and geographies.",
//   info: "success",
// };

export default function Predict2023() {
  const [data, setData] = useState(initialData);
  const [currentData, setCurrentData] = useState();
  const [submitMessage, setSubmitMessage] = useState({
    text: null,
    type: null,
  });
  const [response, setResponse] = useState("");
  // const [content] = useState(content);
  // const [formData, setFormData] = useState({});
  // const [resData, setResData] = useState(null);
  const [open, setOpen] = useState(false);
  // const [resultHidden, setResultHidden] = useState(true);

  // useEffect(() => {
  //   // temp
  //   setResData(res200);
  // }, []);

  const handleChange = async (event) => {
    // const prevData = data;`

    // setData((prevState) => ({
    //   ...prevState,
    //   [event.target.name]: event.target.value,
    // }));
    // console.log("Data was:", data);
    // setData({
    //   [event.target.name]: event.target.value,
    // });
    setData({ ...data, [event.target.name]: event.target.value });
    // console.log("Data is:", data);
  };

  // let url = "http://localhost:3000/predict2023";
  // let domain = "localhost:3000";
  // let linkedinShareURL = `https://www.linkedin.com/sharing/share-offsite/?mini=true&url=${url}&title=How%20to%20make%20custom%20linkedin%20share%20button&summary=some%20summary%20if%20you%20want&source=${domain}`;
  // let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
  // width=0,height=0,left=-1000,top=-1000`;

  // const shareOnLinkedin = () => {
  //   window.open(linkedinShareURL, "Share on Linkedin", params);
  // };

  function basicValidation(array) {
    // return array.some((el) => el == null || el == "");
    return array.some((el) => el == null || el === "");
    // let valid = false;
    // for (var key in obj) {
    // if (obj[key]) {
    // console.log("obj[key]", obj[key]);
    // valid = true;
    // }
    // }
    // console.log("obj[key]", obj[key]);
    // return valid;
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
    const resultWithWatermark = result
      .replace("\n", "\n\n")
      .concat("\n\nMade with marmelade.ai");

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
    // setData({
    //   industry: event.target.elements.industry.value,
    //   style: event.target.elements.style.value,
    //   personality: event.target.elements.personality.value,
    //   verbosity: event.target.elements.verbosity.value,
    //   emoji: event.target.elements.emoji.value,
    // });

    // console.log("data", data);

    const arrayValues = Object.values(values);
    const keys = Object.values(data).join("-");

    // console.log("values", arrayValues);

    if (basicValidation(arrayValues)) {
      // console.log(
      //   "Form is complete ❌",
      //   "values",
      //   values,
      //   "arrayValues",
      //   arrayValues,
      //   "data",
      //   data,
      //   "basicValidation",
      //   basicValidation(arrayValues)
      // );
      setSubmitMessage({
        text: "Make sure to fill in all the prompts before submitting.",
        type: null,
      });
    } else {
      // console.log(
      //   "Form is complete ✅",
      //   "values",
      //   values,
      //   "arrayValues",
      //   arrayValues,
      //   "data",
      //   data,
      //   "basicValidation",
      //   basicValidation(arrayValues)
      // );
      // setCurrentData(values);
      submitValues(values);
      setOpen(true);
    }

    // setCurrentData(keys);
    // submitValues(currentData);
    // submitValues(values);

    // console.table(data, Object.values(data));
    // console.log();
  };

  return (
    <div>
      <Head>
        <title>Marmelade.ai | Predict 2023 with marmeldate.ai</title>
        <meta name="description" content="Get predictin'!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Page className="bg-sky-300">
        <div className="mb-24 animate-[fadeIn_0.5s_ease-out_forwards]">
          <h1 className="mb-2 text-5xl font-bold">Predict 2023 with AI</h1>
          <p className="text-xl">
            Choose from a few prompts and impress your audience with the best
            predictions for the upcoming year. 🔥
            <small
              className="
              block
              text-sky-900
              mt-1
            "
            >
              Powered by{" "}
              <a
                className="border-b-2 border-sky-900 border-dotted hover:border-solid"
                href="https://openai.com"
              >
                ChatGPT
              </a>{" "}
              and some secret sauce ✨
            </small>
          </p>
          {/* <p>
            {/* <button 
              // href={linkedinShareURL}
              // target="_blank"
              // onClick={shareOnLinkedin}
            // >
               Share on Linkedin 
             </button> 
          </p> */}
        </div>
        <form
          onSubmit={handleSubmit}
          // onChange={handleChange}
        >
          {content &&
            content.prompts.map((prompt, promptIndex) => {
              const promptId = `prompt-${prompt.name}-${promptIndex}`;
              // const key = `${prompt.text.substring(0, 3)}${index}`;
              // console.log("delay:", `${index * 100 + "s"}`);
              // <pre>{JSON.stringify(prompt, null, 4)}</pre>
              // console.log("$$$", prompt.name, prompt.answers);
              return (
                <Prompt
                  // handleChange={handleChange}
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
            0dark:bg-gray-50
            0dark:hover:bg-gray-100
            focus:outline-none
            focus:ring-4
            focus:ring-blue-300
            0dark:focus:ring-blue-500
            "
            type="submit"
            // onClick={() => {
            //   basicValidation(values) ? setOpen(true) : null;
            // }}
          >
            Submit
          </button>

          {submitMessage.text && (
            <div className="inline-block px-4 py-3 ml-2 bg-red-200 rounded-lg">
              {submitMessage.text}
            </div>
          )}

          <Modal
            title="Your trend predictions 2023 are ready!"
            isOpen={open}
            onClose={() => setOpen(false)}
          >
            <Teaser hidden={true} output={response}>
              {response.split("\n\n").map(function (item, index) {
                return (
                  <span className="block mb-2 last:mb-0" key={index}>
                    {item}
                    <br />
                  </span>
                );
              })}
            </Teaser>
            {/* <ModalToolbar hidden={true} input={response} /> */}
          </Modal>
        </form>
      </Page>
    </div>
  );
}
