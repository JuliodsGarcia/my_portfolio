"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

import { Home, CodeSquare, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";
export function FloatingNavMain() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <Home className="h-4 w-4 text-text_span dark:text-white" />,
    },
    {
      name: "Projetos",
      link: "/contact",
      icon: <CodeSquare className="h-4 w-4 text-text_span dark:text-white" />,
    },
    {
      name: "Contato",
      link: "/about",
      icon: (
        <MessageCircle className="h-4 w-4 text-text_span dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
      <DummyContent />
    </div>
  );
}
const DummyContent = () => {
  return (
    <div className="relative flex h-[4rem] w-full  justify-end shadow-lg">
      <div className="0 flex w-full items-center justify-end gap-x-1 px-20">
        <Button
          variant="link"
          className="flex items-center gap-x-1 text-base  text-white hover:no-underline"
        >
          <strong className="text-text_span">01.</strong>
          <span className="font-semibold text-text_primary hover:text-text_span">
            Sobre-min
          </span>
        </Button>
        <Button
          variant="link"
          className="flex items-center gap-x-1 text-base  text-white hover:no-underline"
        >
          <strong className="text-text_span">02.</strong>
          <span className="font-semibold text-text_primary hover:text-text_span">
            Projetos
          </span>
        </Button>
        <Button
          variant="link"
          className="flex items-center gap-x-1 text-base  text-white hover:no-underline"
        >
          <strong className="text-text_span">03.</strong>
          <span className="font-semibold text-text_primary hover:text-text_span">
            Contato
          </span>
        </Button>
      </div>
    </div>
  );
};
