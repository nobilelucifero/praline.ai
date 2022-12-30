import Link from "next/link";

export function Button({
  className,
  children,
  href,
  type = "button",
  onClick,
  disabled,
}) {
  const CSSclasses = `
    inline-block
    whitespace-nowrap
    text-white
    font-bold
    tracking-wide
    rounded-lg
    px-4 py-3
    bg-gray-900
    hover:bg-gray-800
    0dark:bg-gray-50
    0dark:hover:bg-gray-100
    focus:outline-none
    focus:ring-4
    focus:ring-blue-300
    0dark:focus:ring-blue-500
    ${" " + className}
  `;

  if (href) {
    return (
      <Link className={CSSclasses} href={href}>
        {children}
      </Link>
    );
  } else {
    return (
      <button
        className={CSSclasses}
        type={type}
        disabled={disabled}
        onClick={onClick}
      >
        {children}
      </button>
    );
  }

  // return (
  //   <button className={CSSclasses}>
  //     {href ? <Link href="#">{children}</Link> : <Link href="#">{children}</Link>}
  //     <Link href="#">{children}</Link>
  //   </button>
  // );
}
