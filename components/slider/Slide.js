import { forwardRef } from "react";

// const Tab = forwardRef((props, ref) => {
//   const { label } = props;
//   return (
//     <li {...props} ref={ref}>
//       {label}
//     </li>
//   );
// });
// const Slide = forwardRef((props, ref) => {
const Slide = forwardRef(
  (
    {
      // key,
      // innerRef,
      // slideDataIndex,
      // setSlideIndex,
      title,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        // key={key}
        className={`
          flex
          items-center
          justify-items-center
          w-[400px] h-[300px]
          ${className}
        `}
      >
        <h1 className="text-xl font-bold">{title}</h1>
      </div>
    );
  }
);

export default Slide;
