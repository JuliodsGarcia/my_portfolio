import { TextGenerateEffectDemo } from "@/components/text-effect";
import { Separator } from "@/components/ui/separator";

import Profile from "@/app/assets/profile.jpeg";
import Image from "next/image";
import { Play } from "lucide-react";

export default function HomePage() {
  return (
    <main className="container relative flex h-screen flex-col">
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

      <section className="mt-[340px] flex flex-col sm:px-28">
        <div className="flex items-center gap-x-3">
          <span className="mt-2 text-lg font-bold text-text_span">01.</span>
          <h2 className="text-3xl text-text_primary">Sobre min</h2>
          <Separator className="w-1/3 bg-[#233554]" />
        </div>

        <div className="mb-28 mt-14 flex h-auto w-full flex-col gap-x-4 sm:flex-row sm:flex-wrap">
          <p className="order-1 mb-10 max-w-2xl tracking-wider text-text_secondary">
            Hello! My name is Brittany and I enjoy creating things that live on
            the internet. My interest in web development started back in 2012
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS! Fast-forward to today, and I’ve had the privilege of working at
            an advertising agency, a start-up, a huge corporation, and a
            student-led design studio. My main focus these days is building
            accessible, inclusive products and digital experiences at
            Upstatement for a variety of clients. I also recently launched a
            course that covers everything you need to build a web app with the
            Spotify API using Node & React. Here are a few technologies I’ve
            been working with recently:
          </p>

          <div className="order-2  -mt-[20px] mr-12 grid min-w-[300px] grid-cols-3 gap-y-3 sm:order-3 sm:-mt-[180px] sm:min-w-[400px] sm:py-10">
            <span className="flex items-center gap-x-2 text-text_secondary">
              <Play className="h-4 w-4 text-text_span" />
              JavaScript (ES6+)
            </span>

            <span className="flex items-center gap-x-2 text-text_secondary">
              <Play className="h-4 w-4 text-text_span" />
              React
            </span>

            <span className="flex items-center gap-x-2 text-text_secondary">
              <Play className="h-4 w-4 text-text_span" />
              Node.js
            </span>

            <span className="flex items-center gap-x-2 text-text_secondary">
              <Play className="h-4 w-4 text-text_span" />
              Next.js
            </span>
            <span className="flex items-center gap-x-2 text-text_secondary">
              <Play className="h-4 w-4 text-text_span" />
              Nest.js
            </span>
          </div>

          <div className="relative z-20 order-3 mt-8 h-[300px] w-[260px] overflow-visible rounded-xl bg-slate-100 sm:order-1  sm:ml-6 sm:mt-0 sm:h-[400px] sm:w-[400px]">
            <div className="z-10 h-[300px] w-[260px] translate-x-4 translate-y-4 rounded-md border border-text_span sm:h-[400px] sm:w-[400px]" />
            <Image
              src={Profile}
              layout="fill"
              alt="Foto de Perfil"
              className=" rounded-md object-cover object-top"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
