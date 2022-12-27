const Slide = ({ slideDataIndex, setSlideIndex, title, className }) => {
  return (
    <div
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
};

export default Slide;
