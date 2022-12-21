import Link from "next/link";

export default function PromoBanner({ children }) {
  return (
    <div className="py-3 px-4 bg-orange-300 bg-gradient-to-r from-orange-500 to-pink-500 overflow-hidden w-full">
      <div
      // data-custom=""
      // className="bg-lime-300
      //     relative
      //     z-1

      //     before:content-[attr(data-custom)]
      //     before:block
      //     before:bg-blue-500

      //     before:absolute
      //     before:inset-0
      //     before:w-[4rem]
      //     before:h-[4rem]
      //     before:z-10

      //     "
      //         style={{
      //           backgroundImage: `url("data:image/svg+xml;utf8,\
      // <svg xmlns='http://www.w3.org/2000/svg' width='390'>\
      //   <text font-family='inherit' x='0' y='18'>hello world foo bar fizz buzz lorem ipsum</text>\
      // </svg>\
      // ")`,
      //         }}
      >
        {/* <h4 className="mb-2 font-bold">It's almost 2023</h4>
      <p className="mb-2 text-sm">
        Predict what'll happen next year with AI. ✨ #predict2023
      </p> */}
        <p className="text-center font-bold text-white tracking-wide 0animate-[marquee_15s_linear_infinite]">
          <Link className="" href="/predict2023">
            Predict what'll happen next year with AI.{" "}
            <span className="opacity-70">#predict2023</span>
            {/* <span className="mr-4"> */}
            <span className="inline-block ml-2 underline">
              Get started &rarr;
            </span>
            {/* </span>
            <span className="mr-4">
              Predict what'll happen next year with AI.{" "}
              <span>#predict2023</span>
            </span>
            <span className="mr-4">
              Predict what'll happen next year with AI.{" "}
              <span>#predict2023</span>
            </span> */}
          </Link>
        </p>
      </div>
    </div>
  );
}
