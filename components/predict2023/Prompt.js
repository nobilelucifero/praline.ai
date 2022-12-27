import { useState } from "react";

export default function Prompt(props) {
  const { text, answers, name, className, style, handleChange } = props;

  // const [inputValues, setInputValues] = useState(
  //   new Array(answers.length).fill(false)
  // );

  // console.log("inputValues", inputValues);

  // const handleOnChange = (position) => {
  //   const updatedInputValues = inputValues.map((item, index) =>
  //     index === position ? !item : item
  //   );
  //   setInputValues(updatedInputValue, () => {});
  // };

  return (
    <section
      style={style}
      className={`
      opacity-0
        mb-12
        last:mb-0
        0flex
        0items-center
        0w-screen
        0h-sreen
        0bg-lime-500
        ${className}
      `}
    >
      <h3
        className="
          text-xl
          font-bold
        "
      >
        {text}
      </h3>
      <fieldset id={name}>
        {answers.map((answer, index) => {
          const id = `${name}-${index}`;

          return (
            <label
              className="
            flex items-center
            transition-all
            hover:bg-white
            cursor-pointer
            shadow-none
            hover:shadow-xl
            bg-gray-200
            first:mt-2
            mb-2
            px-4
            py-3
            rounded-lg
            "
              key={id}
              // onClick={(e) => (e.target.children[0].checked = true)}
              // onClick={(e) => {
              //   e.stopPropagation();
              //   // console.log(e.currentTarget, e.target.children[0]);
              //   if (e.target.children[0]) {
              //     e.target.children[0].checked = true;
              //   }
              // }}
            >
              <input
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                value={index}
                // checked={inputValues[index]}
                // value={id}
                name={name}
                id={id}
                // onChange={(e) => {
                //   handleOnChange(index);
                //   handleChange;
                // }}
                onChange={handleChange}
              />
              <span
                className="
                    block
                    ml-2
                  "
                // htmlFor={id}
              >
                {answer}
              </span>
            </label>
          );
        })}
      </fieldset>
    </section>
  );
}
