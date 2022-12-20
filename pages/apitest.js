import { useState } from "react";

import { initialData, formContent as content } from "../data/schema";

export default function ApiTest() {
  const [data, setData] = useState(initialData);
  const [currentData, setCurrentData] = useState();
  const [response, setResponse] = useState("");
  // const [calcData, setCalcData] = useState(null);
  // const [x, setX] = useState(null);
  // const [isLoading, setLoading] = useState(false);

  // console.log("????", content);

  // content.prompts.map((prompt, index) => {
  //   setData((data) => ({
  //     ...data,
  //     [prompt.name]: null,
  //   }));
  //   console.log(data);
  // });
  // Object.keys(content).map((i) => {
  // console.log(content[i]);
  // if (content[i]) {
  // console.info("formData", formData);

  // setFormData((x) => ({
  // ...x,
  // [content[i].name]: content[i].value,
  // }));
  // }
  // });

  // setLoading(true);
  // console.info("formContent", formContent.prompts);

  // const formData = {
  //   industry: 0,
  //   style: 0,
  //   personality: 0,
  //   verbosity: 0,
  //   emojis: 2,
  // };

  const submitValues = async (value) => {
    const keys = Object.values(value).join("-");
    console.log("currentData before", keys, value);

    const res = await fetch(`/api/lookup`, {
      method: "POST",
      body: JSON.stringify(value),
      // body: values,
      headers: {
        "Content-Type": "application/json",
        //   Accept: "application/json",
      },
    });
    const APIdata = await res.json();
    const obj = JSON.parse(APIdata);

    // setCurrentData(keys);
    console.log("currentData after", keys);

    // let slug = (x) => {
    //   Object.values(x).join("-");
    // };

    // console.log("obj", obj);
    // console.log("response", currentData, obj[keys]);
    setResponse(obj[keys]);
    // setData(obj[calcFormData]);

    // calcData
    // const calcFormData = (x) => Object.values(x).join("-");

    // console.log(data);
    // fetch("/api/vc", {
    //   method: "POST",
    //   body: JSON.stringify(formData),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    //   .then((res) => {
    //     res.json();
    //     console.log("!!!", res);
    //   })
    //   .then((data) => {
    //     console.log("???", data);

    //     // setData(data);
    //     // setLoading(false);
    //     // setData(req);
    //   })
    //   .catch((err) => console.error(err));
    // const res = await req.json();
    // console.log("!!!", res);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setData({
      industry: event.target.elements.industry.value,
      style: event.target.elements.style.value,
      personality: event.target.elements.personality.value,
      verbosity: event.target.elements.verbosity.value,
      emoji: event.target.elements.emoji.value,
    });

    const keys = Object.values(data).join("-");
    setCurrentData(keys);
    // submitValues(currentData);
    submitValues(data);

    // console.table(data, Object.values(data));
    // console.log();
  };

  const handleChange = async (event) => {
    // console.log("data before:", data);
    // console.log("I", event.target.name);
    // let temp = (data) => ({
    //   ...data,
    //   [event.target.name]: event.target.value,
    // });
    // setData(temp);
    setData((data) => ({
      ...data,
      [event.target.name]: event.target.value,
    }));

    // console.log("data after:", data);
  };

  // console.log("???", data.data);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No data.</p>;

  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold">API test</h1>

      <div className="mt-12">
        <h2 className="text-xl font-bold">Form</h2>
        <form
          onSubmit={handleSubmit}
          // onChange={handleChange}
          className="p-4 rounded-lg w-[720px] bg-gray-100"
        >
          {content &&
            content.prompts.map((prompt, promptIndex) => {
              const { name, text, answers } = prompt;
              // console.log(answers);
              const promptId = `prompt-${name}-${promptIndex}`;
              console.log("key", promptId);

              return (
                <fieldset
                  className="mb-2 last:mb-0 px-2 pt-0 pb-2 border-2 border-gray-500"
                  id={name}
                  key={promptId}
                >
                  <legend className="font-bold">{name}</legend>
                  <h3 className="text-lg font-bold">{text}</h3>

                  {answers.map((answer, index) => {
                    const answerId = `answer-${name}-${index}`;
                    console.log("key", answerId);

                    return (
                      <div>
                        <input
                          type="radio"
                          value={index}
                          name={name}
                          id={answerId}
                          key={answerId}
                          className="mr-2"
                          // onChange={(e) => {
                          //   handleChange(e);
                          // }}
                          // onChange={handleChange}
                        />
                        <label htmlFor={answerId}>{answer}</label>
                      </div>
                    );
                  })}
                </fieldset>
              );
            })}
          <button type="submit">Submit</button>
        </form>
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold">To send</h2>
        <pre className="p-4 rounded-lg w-[720px] overflow-scroll bg-gray-100 font-mono whitespace-pre">
          <details>
            <summary>{currentData}</summary>
            {JSON.stringify(data)}
          </details>
        </pre>
        {/* <button onClick={submitValues}>Send</button> */}
      </div>

      <div className="mt-12">
        <h2 className="text-xl font-bold">Sent</h2>
        <pre className="p-4 rounded-lg w-[720px] overflow-scroll bg-gray-100 font-mono whitespace-pre">
          {currentData ? JSON.stringify(currentData) : "{}"}
        </pre>
        {/* <button onClick={submitValues}>Send</button> */}
      </div>

      {/* <div className="mt-12">
        <h2 className="text-xl font-bold">Received /api/ledger</h2>
        <pre className="p-4 rounded-lg w-[720px] h-[720px] overflow-scroll bg-gray-100 font-mono whitespace-pre">
          ...
        </pre>
      </div> */}

      <div className="mt-12">
        <h2 className="text-xl font-bold">Received /api/lookup</h2>
        <pre className="p-4 rounded-lg w-[720px] overflow-scroll bg-gray-100 font-mono whitespace-pre">
          {response.split("\n").map(function (item, index) {
            return (
              <span className="block mb-2 last:mb-0" key={`result=${index}`}>
                {item}
                <br />
              </span>
            );
          })}
          <details>
            <summary>Show raw JSON</summary>
            {response ? JSON.stringify(response, null, " ") : "{}"}
          </details>
        </pre>
      </div>
    </div>
  );
}
