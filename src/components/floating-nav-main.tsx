"use client";
import React from "react";
import { FloatingNav } from "@/components/ui/floating-navbar";

import { Home, CodeSquare, MessageCircle } from "lucide-react";

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
        <MessageCircle className="h-4 w-4 dark:text-white sm:text-text_span" />
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
  return null;
};
