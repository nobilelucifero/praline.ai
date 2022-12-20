export function Wrapper(props) {
  const { children, className } = props;

  return (
    <div className={`mx-auto w-full max-w-7xl px-16 ${className}`}>
      {children}
    </div>
  );
}
