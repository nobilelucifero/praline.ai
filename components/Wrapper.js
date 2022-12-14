export function Wrapper(props) {
  const { children } = props;

  return <div className="mx-auto max-w-7xl px-16">{children}</div>;
}
