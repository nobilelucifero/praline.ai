export default function Prompt(props) {
  const { text, answers, name } = props;

  // const fieldsetId = `group-${name}`;

  return (
    <section
      className="
        mb-12
        last:mb-0
      "
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
            <div className="flex items-center mb-0" key={id}>
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
