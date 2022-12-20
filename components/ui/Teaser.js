import React, { useRef, useState } from "react";

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

  const subscribe = async (e) => {
    e.preventDefault();

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
      setMessage(error);

      return;
    }

    // 5. Clear the input value and show a success message.
    inputEl.current.value = "";
    setMessage("Success! 🎉 You are now subscribed to the newsletter.");
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
        <p>Sign up for early updates on marmelade.ai.</p>
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
      <form onSubmit={subscribe}>
        {/* <Tabs
          className="
        bg-rose-500
      "
        > */}
        <TabPane title={<EmailLabel />}>
          <>
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
            px-2
            mx-2
            rounded-lg
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
            "
            >
              Send
            </button>
          </>
        </TabPane>

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
          onClick={() => childToParent()}
        >
          Skip (this time)
        </button>
        <div>
          {message
            ? message
            : `I'll only send emails when new content is posted. No spam.`}
        </div>
      </form>
    </div>
  );
}

export default function Teaser({ children, hidden }) {
  const [isContentHidden, setIsContentHidden] = useState(hidden);

  console.log(isContentHidden);

  const childToParent = () => {
    setIsContentHidden(false);
  };

  if (!isContentHidden) return <>{children}</>;

  return (
    <div>
      <div
        className={
          isContentHidden
            ? `
              relative
              h-40
              overflow-hidden
              `
            : ``
        }
      >
        {children}
        {isContentHidden ? (
          <div
            className="
                absolute
                bottom-0
                w-full
                h-24
                bg-gradient-to-t from-white
              "
          ></div>
        ) : (
          ""
        )}
      </div>
      {isContentHidden ? <TeaserContent childToParent={childToParent} /> : ""}
    </div>
  );
}
