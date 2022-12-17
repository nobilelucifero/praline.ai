export function Wrapper(props) {
  const { children } = props;

  return <div className="mx-auto w-full max-w-7xl px-16">{children}</div>;
}
