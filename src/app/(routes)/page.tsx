"use client";

import { motion, useScroll, useTransform } from "framer-motion";

import About from "@/components/about";
import { TextGenerateEffectDemo } from "../../components/text-effect";
import Works from "@/components/works";

export default function HomePage() {
  return (
    <main className="relative mx-auto flex h-screen flex-col bg-bg_primary/10">
      <div
        className="absolute top-[5%] -z-10 h-1/2 w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-10 [background-size:20px_26px] sm:h-full 
        sm:[mask-image:radial-gradient(ellipse_30%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="container mx-auto mt-32  flex w-full flex-col justify-center sm:mt-20 lg:mt-56 lg:px-52">
        <p className="mb-4 ml-2 font-medium text-text_span lg:ml-5 lg:text-lg">
          Olá, meu nome é
        </p>
        <h2 className="text-5xl font-bold text-text_primary antialiased lg:text-7xl">
          Julio Cesar
        </h2>
        <TextGenerateEffectDemo />
        <motion.p
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="mt-6 max-w-[700px] tracking-wider text-text_primary"
        >
          Sou um desenvolvedor{" "}
          <span className="font-semibold text-text_span">Full Stack</span>{" "}
          apaixonado por tecnologia, sempre aprendendo e dominando novas
          ferramentas. O café me inspira enquanto trabalho em projetos
          desafiadores. Nos fins de semana, equilibro o desenvolvimento com
          jogos de futebol e momentos com amigos. Essa interação entre meu
          trabalho e minha vida social é essencial para meu crescimento pessoal
          e profissional.
        </motion.p>

        <button
          className="mt-10 max-w-[300px] rounded-md border border-text_span bg-bg_primary px-4 py-4 text-sm font-semibold tracking-wider text-text_span transition duration-200 
          ease-in-out hover:shadow-[4px_4px_0px_0px_rgba(97,249,213)]"
        >
          Minhas Stacks
        </button>
      </div>

      <section>
        <About />
      </section>

      <section className="container mt-52 bg-primary/20 sm:mt-[18rem] lg:pl-36">
        <Works />
      </section>
    </main>
  );
}
