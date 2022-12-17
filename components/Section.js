import { Wrapper } from "./Wrapper";

export function Section(props) {
  const { children } = props;

  return (
    <div className="w-full py-12">
      <Wrapper>{children}</Wrapper>
    </div>
  );
}
