import React, { useEffect, useRef, useState } from "react";

import { setCookie, hasCookie } from "cookies-next";

import Head from "next/head";
import Image from "next/image";

import Page from "../layouts/page";
import { Button } from "../components/Button";

export default function Home() {
  // 1. Create a reference to the input so we can fetch/clear it's value.
  const inputEl = useRef(null);
  // 2. Hold a message in state to handle the response from our API.
  const [message, setMessage] = useState("");
  // const [hasEmail, setHasEmail] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      // window.location.replace("http://contentradar.ai");
    }, 2000);
  }, []);

  const subscribe = async (e) => {
    e.preventDefault();
    e.stopPropagation();

    // if ((inputEl.current.value = null)) {
    //   setMessage("You need to add a valid email.");
    //   return;
    // }

    // 3. Send a request to our API with the user's email address.
    const res = await fetch("/api/subscribe", {
      body: JSON.stringify({
        email: inputEl.current.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const { error } = await res.json();

    if (error) {
      // 4. If there was an error, update the message in state.

      // 4b. If there was already an email, but uncaught, setCookie.
      if (res.status == 400) {
        setCookie("hasEmail", "true", { maxAge: 60 * 60 * 24 * 365 });
      }

      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    setMessage("Success! 🎉 You will hear from us soon.");

    setCookie("hasEmail", "true", { maxAge: 60 * 60 * 24 * 365 });

    setTimeout(() => {
      window.open(`https://tally.so/r/wvXL5d?email=${inputEl.current.value}`);
      inputEl.current.value = "";
    }, 500);
  };

  return (
    <div className="bg-gray-100">
      <Head>
        <title>Praline.ai</title>
        <meta name="description" content="Praline.ai is now ContentRadar" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <Page showPromoMessage={true}>
        <div className="flex flex-col-reverse items-center">
          <div className="">
            <h1
              className="
                text-3xl
                font-bold
                mb-2
              "
            >
              Praline.ai is now ContentRadar
            </h1>

            <p className="mb-8 text-lg xl:w-10/12">
              Same mission, new brand. Visit us on{" "}
              <a
                className="hover:underline cursor-pointer"
                href="//contentradar.ai"
              >
                contentradar.ai
              </a>
            </p>
            <p className="mb-8 text-lg text-gray-600">
              Redirecting you there&hellip;
            </p>

            {/* <a
              className="
             inline-block
              whitespace-nowrap
          text-white
              font-bold
              tracking-wide
              rounded-lg
            px-4 py-3 mr-2
            bg-gray-900
            hover:bg-gray-800
          focus:outline-none
                focus:ring-4
              focus:ring-blue-300"
              onClick={(e) => {
                e.preventDefault();
                gtag("event", "page_view", {
                  page_title: "survey_view-index",
                });
                window.open("https://tally.so/r/wvXL5d");
              }}
              href="https://tally.so/r/wvXL5d"
              target="_blank"
              rel="noreferrer"
            >
              Get early access
            </a> */}
          </div>
        </div>
      </Page>
    </div>
  );
}
