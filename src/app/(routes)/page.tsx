import { TextGenerateEffectDemo } from "@/components/text-effect";

import About from "@/components/about";
import { LampDemo } from "@/components/LampDemo";

export default function HomePage() {
  return (
    <main className="relative mx-auto flex h-screen flex-col bg-gradient-to-r from-[#0A192F] via-[#18243afb] to-[#151b27]">
      <div className="mt-56 flex flex-col sm:px-28">
        <span className="mb-2 ml-2 font-semibold text-text_span sm:ml-6">
          Olá, meu nome é
        </span>
        <h1 className="text-[40px] font-bold tracking-wider text-text_primary sm:mt-4 sm:text-8xl">
          Julio Cesar.
        </h1>
        <article className="space-y-3 text-left">
          <TextGenerateEffectDemo />

          <p className="text-[1rem] text-text_secondary sm:max-w-2xl">
            Sou um engenheiro de software especializado em construir (e
            ocasionalmente projetar) experiências digitais excepcionais.
            Atualmente, estou focado na construção de produtos acessíveis e
            centrados no ser humano na Upstatement.
          </p>
        </article>

        <button
          className="mt-10 rounded-sm border border-teal-500 bg-bg_primary px-4 py-4 text-sm font-bold tracking-wider text-text_span transition-all
          duration-300 ease-in-out hover:-translate-x-2 hover:-translate-y-1 hover:shadow-[4px_4px_0px_0px_rgba(89,227,197)] sm:max-w-[300px]"
        >
          Minhas Stacks
        </button>
      </div>

      <div>
        <About />
      </div>

      <section className="m-24 mx-auto mt-64 min-h-screen w-full bg-gradient-to-r from-[#0A192F] via-[#18243afb] to-[#151b27]">
        <LampDemo />
      </section>
    </main>
  );
}
