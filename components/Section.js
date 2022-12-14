import { Wrapper } from "./Wrapper";

export function Section(props) {
  const { children } = props;

  return (
    <div className="py-12">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
