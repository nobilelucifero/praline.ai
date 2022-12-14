import { Section } from "../components/Section";

export function Navbar(props) {
  const { children } = props;

  return (
    <header>
      <Section>
        <span
          className="
            font-bold
          "
        >
          🍊 marmelade.ai
        </span>
      </Section>
    </header>
  );
}
