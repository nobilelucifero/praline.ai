export default function Prompt(props) {
  const { text, answers, name, className, style } = props;

  // const fieldsetId = `group-${name}`;

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
            <div
              className="
            flex items-center
            transition-all
            hover:bg-white
            cursor-pointer
            shadow-none
            hover:shadow-xl
            bg-sky-100
            first:mt-2
            mb-2
            px-4
            py-3
            rounded-lg
            "
              key={id}
              onClick={(e) => (e.target.children[0].checked = true)}
            >
              <input
                className="w-4 h-4 border-gray-300 focus:ring-2 focus:ring-blue-300 dark:focus:ring-blue-600 dark:focus:bg-blue-600 dark:bg-gray-700 dark:border-gray-600"
                type="radio"
                value={answer}
                // value={id}
                name={name}
                id={id}
              />
              <label
                className="
                    block
                    ml-2
                  "
                htmlFor={id}
              >
                {answer}
              </label>
            </div>
          );
        })}
      </fieldset>
    </section>
  );
}
