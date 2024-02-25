"use client";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

export const Lamp = ({ children, className }) => (
  <div
    className={cn(
      "relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-none",
      className,
    )}
  >
    <div className="relative isolate z-50 flex w-full flex-1 scale-y-125 items-center justify-center">
      {/* Animação de opacidade */}

      {/* Animação de expansão */}
      <motion.div
        initial={{ width: "8rem", scale: [0.1] }}
        whileInView={{
          width: "20%",
          height: "7rem",
          opacity: 0.4,
          scale: 0.9,
          left: "60%",
          translateY: "-5rem",
        }}
        transition={{ delay: 1.3, duration: 1.8 }}
        className="absolute inset-auto z-30 h-10 w-64 -translate-y-[8rem] overflow-clip bg-sky-700/65 blur-2xl"
      />
      <motion.div
        initial={{ width: "8rem", scale: [0] }}
        whileInView={{
          width: "20%",
          height: "17rem",
          opacity: 0.4,
          scale: 0.9,
          right: "62%",
          translateY: "-5rem",
        }}
        transition={{ delay: 1.3, duration: 1.8 }}
        className="absolute inset-auto z-30 h-10 w-64 -translate-y-[8rem] overflow-clip bg-sky-700/25 blur-2xl"
      />
      <motion.div
        initial={{ width: "8rem", scale: [0.8] }}
        whileInView={{
          width: "46rem",
          height: "12rem",
          opacity: 0.4,
          scale: 0.9,
          translateY: "-3rem",
          boxShadow: "0px 10px 20px 5px rgba(0, 255, 255, 0.5)",
        }}
        transition={{ delay: 1.3, duration: 1.8 }}
        className="absolute inset-auto z-30 h-10 w-64 -translate-y-[8rem] overflow-clip bg-cyan-400/40 blur-2xl"
      />

      {/* Animação de sombra */}
      <motion.div
        initial={{ boxShadow: "0px -10px 20px 5px rgba(0, 0, 0, 0.5)" }}
        whileInView={{ boxShadow: "0px -10px 20px 7px rgba(0, 0, 0, 0.6)" }}
        transition={{ delay: 1.3, duration: 1.8 }}
        className="absolute inset-auto z-30 h-2 w-64 -translate-y-[7rem] overflow-clip bg-transparent"
      />
      <motion.div
        initial={{ width: "15rem" }}
        whileInView={{
          width: "40rem",
          boxShadow: "0px -5px 2px 2px rgba(0, 0, 0, 0.1), 0 1px 2px 0 #000",
        }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
        className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-cyan-400"
      />
    </div>
    {/* Conteúdo filho */}
    <div className="relative z-50 flex -translate-y-80 flex-col items-center px-5">
      {children}
    </div>
  </div>
);

export default Lamp;
