import { useState, useEffect } from "react";
import useSWR from "swr";

// const fetcher = (url) => fetch(url).then((res) => res.json());

export default function ApiTest() {
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(false);

  // const deets = { data: [0, 0, 0, 0, 0] };

  // useEffect(() => {
  // setLoading(true);

  // fetch("/api/vc", {
  // method: "GET",
  // headers: {
  //   Authorization: `Bearer ${token}`,
  // },
  // body: JSON.stringify(deets),
  //   })
  //     .then((res) => {
  //       res.json();
  //       console.log("???", res);
  //     })
  //     .then((data) => {
  //       console.log("???", data);

  //       // setData(data);
  //       // setLoading(false);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // const { data, error } = useSWR("/api/vc", fetcher);

  // console.log(data);
  // const { data, error } = useSWR("/api/vc", fetcher);

  const formData = {
    industry: 0,
    style: 0,
    personality: 0,
    verbosity: 0,
    emojis: 2,
  };

  const calcFormData = Object.values(formData).join("-");

  console.log(">>>", calcFormData);

  const submitValues = async () => {
    const res = await fetch(`/api/vc`, {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json",
        //   Accept: "application/json",
      },
    });
    const response = await res.json();
    const obj = JSON.parse(response);

    setData(obj[calcFormData]);
    console.log(data);
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

  // console.log("???", data.data);

  // if (error) return <div>Failed to load</div>;
  // if (!data) return <div>Loading...</div>;

  // if (isLoading) return <p>Loading...</p>;
  // if (!data) return <p>No data.</p>;

  return (
    <div className="p-12">
      <h1 className="text-3xl font-bold">API test</h1>
      <h2 className="text-xl font-bold">Sent</h2>
      <pre className="p-4 rounded-lg w-[720px] overflow-scroll bg-gray-100 font-mono whitespace-pre">
        {calcFormData}
      </pre>
      <button onClick={submitValues}>Send</button>

      {/* <div className="mt-12">
        <h2 className="text-xl font-bold">Received /api/ledger</h2>
        <pre className="p-4 rounded-lg w-[720px] h-[720px] overflow-scroll bg-gray-100 font-mono whitespace-pre">
          ...
        </pre>
      </div> */}

      <div className="mt-12">
        <h2 className="text-xl font-bold">Received /api/vc</h2>
        <pre className="p-4 rounded-lg w-[720px] h-[720px] overflow-scroll bg-gray-100 font-mono whitespace-pre">
          {JSON.stringify(data, null, 4)}
        </pre>
      </div>
    </div>
  );
}
