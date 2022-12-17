export const formContent = {
  v: 1,
  prompts: [
    {
      name: "industry",
      text: "Choose your industry",
      prompt_type: "text",
      answers: [
        "Design",
        "Mobility",
        "Sustainability",
        "Fashion",
        "Web3",
        "Sales",
      ],
      answers_type: "tags",
    },
    {
      name: "tone",
      text: "Tone of voice",
      prompt_type: "text",
      answers: [
        "Corporate, baby! 🤙",
        "Indutry expert",
        "Approachable",
        "Friendly",
        "Funny",
        "Ludicrous 🔥",
      ],
      answers_type: "single_choice",
    },
    {
      name: "emoji",
      text: "Emoji level",
      prompt_type: "text",
      answers: ["None, thanks", "Some 👌", "Many 💃", "Make it rain 🌧"],
      answers_type: "single_choice",
    },
  ],
};
