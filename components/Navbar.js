import Image from "next/image";
import Link from "next/link";

import { Section } from "../components/Section";

export function Navbar(props) {
  const { children } = props;

  return (
    <header>
      <Section>
        <Link
          href="/"
          className="
            font-bold
            flex
            items-center
          "
        >
          <Image
            width={32}
            height={32}
            src="/marmelade-logo.svg"
            alt=" "
          ></Image>
          {/* 🍊 marmelade.ai */}
          &nbsp; marmelade.ai
        </Link>
      </Section>
    </header>
  );
}
