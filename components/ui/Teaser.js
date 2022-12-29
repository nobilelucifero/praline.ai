import React, { useRef, useState } from "react";

import { setCookie, hasCookie } from "cookies-next";

// import ModalToolbar from "../ui/ModalToolbar";

import IconTwitter from "../icons/IconTwitter";
import IconEmail from "../icons/IconEmail";

import { Tabs, TabPane } from "./Tabs";

const EmailLabel = () => (
  <>
    <IconEmail style={{ stroke: "inherit" }} />{" "}
    <span className="hidden">Email address</span>
  </>
);

export function TwitterLabel() {
  return (
    <>
      <IconTwitter style={{ stroke: "inherit" }} />{" "}
      <span className="hidden">Twitter</span>
    </>
  );
}

export function TeaserContent({ childToParent }) {
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
    inputEl.current.value = "";
    setMessage("Success! 🎉 You will hear from us soon.");

    setCookie("hasEmail", "true", { maxAge: 60 * 60 * 24 * 365 });

    setTimeout(() => {
      childToParent();
    }, 500);
  };

  return (
    <div
      className="
            py-4
            flex
            flex-col
            items-center
        "
    >
      <div
        className="
        p-4
        flex
        flex-col
        items-center
      "
      >
        <h3
          className="
            font-bold
            text-xl
        "
        >
          Time to post your prediction
        </h3>
        <p>Sign up for early updates on praline.ai.</p>
      </div>
      {/* <Tabs>
        <TabPane title="Basic">
          <div>Basic</div>
        </TabPane>
        <TabPane title="Standard">
          <div>Standard</div>
        </TabPane>
        <TabPane title="Premium">
          <div>Premium</div>
        </TabPane>
      </Tabs> */}
      <form className="flex flex-col justify-center" onSubmit={subscribe}>
        {/* <Tabs
          className="
        bg-rose-500
      "
        > */}
        <div className="flex justify-center">
          <label
            className="
              hidden
            font-bold
            mb-2
          "
            htmlFor="email-input"
          >
            Your email address
          </label>
          <input
            className="
            py-2
            px-4
            mx-2
            rounded-lg
            0bg-gray-100
            0placeholder-gray-500
            bg-white
          "
            id="email-input"
            name="email"
            type="email"
            ref={inputEl}
            required
            placeholder="email@provider.com"
          />
          <button
            className="
                bg-gray-900
                text-white
                font-bold
                py-2
                px-4
                rounded-lg
                tracking-wide
            "
          >
            Send
          </button>
        </div>

        <p className="mt-2 text-sm text-center">
          {message
            ? message
            : `We'll send you a short survey to let you enter the waitlist.`}
        </p>

        {/* <TabPane title={<TwitterLabel />}>
          <>
            <label
              className="
              hidden
            font-bold
            mb-2
          "
              htmlFor="email"
            >
              Twitter handle
            </label>
            <input
              className="
            py-2
            px-2
            mx-2
            rounded-lg
          "
              id="handle"
              type="text"
              placeholder="@username"
            />
            <button
              className="
                bg-gray-900
                text-white
                font-bold
                py-2
                px-4
                rounded-lg
            "
              onClick={() => childToParent()}
            >
              Send
            </button>
          </>
        </TabPane> */}
        {/* <TabPane></TabPane> */}
        {/* </Tabs> */}
        <button
          className="
            block
            mt-2
            underline
            text-sm
            pt-2
          "
          // onClick={setIsContentHidden(false)}
          onClick={() => {
            document.querySelector("#email-input").required = false;
            childToParent();
          }}
        >
          Skip this time
        </button>
      </form>
    </div>
  );
}

export default function Teaser({ children, hidden, output }) {
  const [isContentHidden, setIsContentHidden] = useState(hidden);

  const [feedback, setFeedback] = useState();

  // console.log(isContentHidden);
  // console.log("children", children);

  const childToParent = () => {
    setIsContentHidden(false);
  };

  if (!isContentHidden)
    return (
      <div
        className="
        grid lg:grid-rows-2 lg:grid-flow-col gap-8
      "
      >
        <div
          className="
          row-span-2
          p-6
          bg-gray-200
          rounded-2xl
          0shadow-md
        "
        >
          <textarea
            name="text"
            id="generated-text"
            className="
              w-full
              min-h-[16rem]
              py-2 px-4
              rounded
              bg-white
              border
              border-gray-400
              shadow-inner
            "
            readOnly
            value={output}
            onClick={(e) => {
              e.target.select();
            }}
          />
          <div className="mt-2">
            <button
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
                focus:ring-blue-300
              "
              onClick={() => {
                navigator.clipboard.writeText(output);
                // document.execCommand("copy", true, textToCopy);
                setFeedback("✅ Prediction copied");
              }}
            >
              Copy text
            </button>
            {feedback && (
              <div className="bg-green-200 inline-block rounded-lg px-4 py-3">
                {feedback}
              </div>
            )}
          </div>
        </div>

        <div
          className="
            col-span-1
            p-6
            bg-gray-200
            rounded-xl
            0shadow-md
          "
        >
          <h4
            className="
              font-bold
              text-lg
            "
          >
            Interested in learning more?
          </h4>
          <p>We are putting content strategy on autopilot.</p>
          <p>
            <a
              onClick={(e) => {
                e.preventDefault();
                gtag("event", "page_view", {
                  page_title: "survey_view-index",
                });
                window.open("https://tally.so/r/wvXL5d");
              }}
              href="https://tally.so/r/wvXL5d"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                mt-4
                bg-gray-900
                tracking-wide
                text-white
                px-4 py-3
                font-bold
                rounded-lg
              "
            >
              Join the waitlist
            </a>
          </p>
        </div>

        <div
          className="
            row-span-1 col-span-1
            p-6
            bg-gray-200
            rounded-xl
            0shadow-md
          "
        >
          <h4
            className="
              font-bold
              text-lg
            "
          >
            Want to have another go?
          </h4>
          <p>Simply hit the button below or close this window.</p>
          <p>
            <a
              onClick={(e) => {
                e.preventDefault();
                window.location = "/predict2023";
              }}
              href="#"
              rel="noopener noreferrer"
              className="
                      inline-block
                      mt-4
                      bg-gray-900
    tracking-wide
    text-white
    px-4 py-3
                      font-bold
                      rounded-lg
                    "
            >
              Start again
            </a>
          </p>
        </div>
      </div>
    );

  return (
    <div>
      <div
        className={
          isContentHidden
            ? `
              relative
              h-40
              overflow-hidden
              w-[calc(100%_+_32px)]
              `
            : ``
        }
      >
        <div
          className={
            isContentHidden
              ? `
              px-4
              -ml-4
              relative
              h-40`
              : ``
          }
        >
          <>{children}</>
          {isContentHidden ? (
            <div
              className="
                absolute
                bottom-0
                w-full
                h-24
                bg-gradient-to-t from-gray-100
              "
            ></div>
          ) : (
            ""
          )}
        </div>
      </div>
      {isContentHidden ? <TeaserContent childToParent={childToParent} /> : ""}
    </div>
  );
}
