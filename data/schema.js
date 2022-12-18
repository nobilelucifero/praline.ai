export const formContent = {
  v: 1,
  prompts: [
    {
      name: "industry",
      text: "Choose your industry",
      prompt_type: "text",
      answers: ["VC", "FinTech", "Creator economy", "Web3", "Sustainability"],
      answers_type: "tags",
    },
    {
      name: "style",
      text: "Style",
      prompt_type: "text",
      answers: ["Professional", "Sarcastic", "Optimistic"],
      answers_type: "single_choice",
    },
    {
      name: "personality",
      text: "Personality",
      prompt_type: "text",
      answers: ["Professional", "Medieval bard", "6 years old"],
      answers_type: "single_choice",
    },
    {
      name: "verbosity",
      text: "Verbosity",
      prompt_type: "text",
      answers: ["Brief", "Standard", "Detailed"],
      answers_type: "single_choice",
    },
    {
      name: "emoji",
      text: "Emoji level",
      prompt_type: "text",
      answers: ["None thanks", "Some 👌", "Make it rain 🌧🌧🌧"],
      answers_type: "single_choice",
    },
  ],
};
