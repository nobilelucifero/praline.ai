import Link from "next/link";

export default function PromoBanner({ children }) {
  return (
    <div className="py-3 px-4 bg-orange-600 bg-gradient-to-r from-purple-500 to-pink-500 overflow-hidden w-full">
      <div>
        <p className="text-center font-bold text-white tracking-wide 0animate-[marquee_15s_linear_infinite]">
          <Link className="" href="/predict2023">
            Predict what&apos;ll happen next year with AI.{" "}
            <span className="opacity-70">#predict2023</span>
            <span className="inline-block ml-2 underline">
              Get started &rarr;
            </span>
          </Link>
        </p>
      </div>
    </div>
  );
}
