import { useState } from "react";
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

export function TeaserContent() {
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
          Are you interested in seeing more?
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
      <Tabs
        className="
        bg-rose-500
      "
      >
        <TabPane title={<EmailLabel />}>
          <>
            <label
              className="
              hidden
            font-bold
            mb-2
          "
              htmlFor="email"
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
              id="email"
              type="email"
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
        <TabPane title={<TwitterLabel />}>
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
            >
              Send
            </button>
          </>
        </TabPane>
      </Tabs>
      <button
        className="
            block
            mt-2
            underline
            text-sm
            pt-2
          "
      >
        Skip (this time)
      </button>
    </div>
  );
}

export default function Teaser({ children, hidden }) {
  //   const [isHidden, setIsHidden] = useState(hidden);

  if (!hidden) return <>{children}</>;

  return (
    <div>
      <div
        className={
          hidden
            ? `
              relative
              h-44
              overflow-hidden
              `
            : ``
        }
      >
        {children}
        {hidden ? (
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
      {hidden ? <TeaserContent /> : ""}
    </div>
  );
}
