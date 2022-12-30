import React, { useRef, useState } from "react";

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
        <meta
          name="description"
          content="The AI-powered workspace for content marketing"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        ></meta>
      </Head>

      <Page showPromoMessage={true}>
        <div className="flex flex-col-reverse lg:flex-row items-center">
          <div className="lr:pr-8 lg:basis-2/5">
            <h1
              className="
                text-3xl
                font-bold
                mb-2
                lg:w-11/12
              "
            >
              The AI-powered workspace for content marketing
            </h1>

            <p className="mb-8 text-lg xl:w-10/12">
              Boost your content creation by 10x, be on top of your insights and
              grow your business.
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
            <form className="flex flex-col gap-2" onSubmit={subscribe}>
              <p>
                <strong>Want to learn more?</strong>
                <small className="block">
                  Be one of the first to hear about us.
                </small>
              </p>
              <label className="hidden font-bold mb-2" htmlFor="email-input">
                Your email address
              </label>
              <div className="flex flex-col lg:flex-row gap-2">
                <input
                  className="
                  py-2 px-4
                  border border-gray-300
                  bg-white
                  rounded-lg
                "
                  id="email-input"
                  name="email"
                  type="email"
                  ref={inputEl}
                  required
                  placeholder="email@provider.com"
                />
                <Button type="submit">Get early access</Button>
              </div>
              <p className="mt-2 text-sm">{message ? message : null}</p>
            </form>
          </div>
          <div className="lg:pl-8 lg:basis-3/5 mb-12 lg:mb-0">
            <Image
              width={592}
              height={592}
              src={"/hero-transparent.png"}
              alt=" "
              priority="true"
            />
          </div>
        </div>
      </Page>
    </div>
  );
}
