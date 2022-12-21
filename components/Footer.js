import Link from "next/link";

import { Section } from "../components/Section";

export function Footer(props) {
  const { children } = props;

  return (
    <footer className="">
      <Section>
        <p>
          <small>
            <span className="inline-block mr-2">
              &copy; Copyright {new Date().getFullYear()} marmelade.ai
            </span>
            <Link href="/privacy" className="underline inline-block ml-2">
              Privacy
            </Link>
            <Link href="/imprint" className="underline inline-block ml-2">
              Imprint
            </Link>
          </small>
        </p>
      </Section>
    </footer>
  );
}
