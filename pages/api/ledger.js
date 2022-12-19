// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { data } from "../../data/responses/vc";

export async function getData() {
  const response = await fetch("http://localhost:3000/api/hello");
  const jsonData = await response.json();
  return jsonData;
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    res.status(200).json({ name: "John Doe" });
  } else if (req.method === "POST") {
    // const jsonData = await getData();
    console.log(data);
    res.status(200).json(req.body[0]);
    // res.status(200).json(req.body[0]);
    // res.status(200).json(jsonData);
  }
}

const industry_list = [
  "VC",
  "FinTech",
  "Creator economy",
  "Web3",
  "Sustainability",
];
const style_list = [
  "Professional",
  "sarcastic",
  "optimistic",
  "funny",
  "pessimistic",
];
const personality_list = [
  "Professional",
  "Medieval bard",
  "6 year old",
  "tech-insider",
  "Gen Z",
];
const verbosity_list = ["brief", "Standard", "detailed"];
const emoji_intensity_list = ["Standard", "some", "make it rain"];
