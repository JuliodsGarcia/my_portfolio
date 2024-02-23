"use client";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

const words = [
  {
    text: "Eu",
  },
  {
    text: "construo",
  },
  {
    text: "coisas",
  },
  {
    text: "para",
  },
  {
    text: "a",
  },
  {
    text: "Internet.",
    className: "text-text_span dark:text-blue-500",
  },
];

export function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} className="mb-5 antialiased" />;
}
