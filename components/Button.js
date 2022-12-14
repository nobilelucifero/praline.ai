import Link from "next/link";

export function Button(props) {
  const { children } = props;

  return (
    <Link
      className="
    text-white
    font-bold
    tracking-wide
    rounded-lg
    px-4 py-3 mr-2 mb-2
    bg-gray-900
    hover:bg-gray-800
    0dark:bg-gray-50
    0dark:hover:bg-gray-100
    focus:outline-none
    focus:ring-4
    focus:ring-blue-300
    0dark:focus:ring-blue-500"
      href="#"
    >
      {children}
    </Link>
  );
}
