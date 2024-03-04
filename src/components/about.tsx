import Image from "next/image";
import { Play } from "lucide-react";
import { Separator } from "./ui/separator";

import Profile from "@/app/assets/profile.jpeg";

const About = () => {
  return (
    <section className="container mt-52 bg-bg_primary sm:mt-[18rem] lg:pl-36">
      <div className="mb-7 flex items-center">
        <span className="mr-2 mt-1 text-text_span sm:text-2xl">01.</span>
        <p className="text-2xl text-text_primary sm:text-2xl">Sobre min</p>
        <Separator className="ml-4 h-[1px] w-[120px] bg-[#233554] sm:min-w-[320px]" />
      </div>
      <div className="mt-10 grid w-full grow grid-cols-2">
        <div className="order-2 col-span-2 sm:col-span-1">
          <p className="max-w-2xl tracking-wider text-text_secondary sm:w-full">
            Minha jornada no mundo do desenvolvimento começou em 2021, quando
            estava ainda na faculdade cursando{" "}
            <span className="font-semibold text-emerald-300">
              análise em desenvolvimento de sistemas.
            </span>{" "}
            Foi fascinante descobrir como funcionava um software no backstage me
            proporcionou valiosos aprendizados em{" "}
            <span className="font-semibold text-emerald-300">
              HTML, CSS e JavaScript.
            </span>{" "}
            <br />
            Em 2022, decidi me aventurar no mundo do desenvolvimento web,
            alimentando minha paixão por construir na web. Atualmente, estou
            empenhado em aprimorar minhas habilidades de desenvolvimento web
            enquanto estudo. Embora eu ainda não tenha experiência profissional,
            tenho investido tempo e dedicação para absorver conhecimentos e
            aplicá-los em projetos pessoais. <br />
            Aqui estão algumas técnologias com as quais tenho trabalhado
            recentemente:
          </p>

          <div className="mt-5 grid w-full grid-cols-2 gap-3 gap-x-4 text-nowrap text-sm font-semibold text-text_primary sm:max-w-[500px]">
            <span className="flex items-center gap-x-2">
              <Play className="h-4 w-4 text-text_span" />
              JavaScript (ES6+)
            </span>

            <span className="flex items-center gap-x-2">
              <Play className="h-4 w-4 text-text_span" />
              React
            </span>

            <span className="flex items-center gap-x-2">
              <Play className="h-4 w-4 text-text_span" />
              Node.js
            </span>

            <span className="flex items-center gap-x-2">
              <Play className="h-4 w-4 text-text_span" />
              Next.js
            </span>
            <span className="flex items-center gap-x-2">
              <Play className="h-4 w-4 text-text_span" />
              Nest.js
            </span>
          </div>
        </div>

        <div className="group order-3 transition-transform duration-1000 ease-in sm:-mt-5 sm:ml-10">
          <div className="relative z-20 order-3 mt-8 h-[200px] w-[260px] translate-x-2 overflow-visible rounded-xl bg-slate-100  sm:order-1 sm:ml-6 sm:mt-0 sm:h-[300px] sm:w-[300px]">
            <div className="z-10 h-[200px] w-[260px] translate-x-4 translate-y-4 rounded-md border border-text_span transition-transform duration-500 ease-in-out group-hover:translate-x-2 group-hover:translate-y-2 sm:h-[300px] sm:w-[300px]" />
            <Image
              src={Profile}
              layout="fill"
              alt="Foto de Perfil"
              className="rounded-md object-cover object-top"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
