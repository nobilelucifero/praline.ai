import { Section } from "../components/Section";

export function Footer(props) {
  const { children } = props;

  return (
    <footer className="">
      <Section>
        <p>
          <small>
            &copy; Copyright {new Date().getFullYear()} marmelade.ai
          </small>
        </p>
      </Section>
    </footer>
  );
}
