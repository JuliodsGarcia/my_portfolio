import Image from "next/image";
import { Play } from "lucide-react";
import { Separator } from "./ui/separator";

import Profile from "@/app/assets/profile.jpeg";

const About = () => {
  return (
    <section className="container mt-52 bg-primary/20 sm:mt-[18rem] lg:pl-36">
      <div className="mb-7 flex items-center">
        <span className="mr-2 mt-1 text-text_span sm:text-2xl">01.</span>
        <p className="text-2xl text-text_primary sm:text-2xl">Sobre min</p>
        <Separator className="ml-4 h-[1px] w-[120px] bg-[#233554] sm:min-w-[320px]" />
      </div>
      <div className="grid w-full grow grid-cols-2">
        <div className="order-2 col-span-2 sm:col-span-1">
          <p className="max-w-2xl tracking-wider text-text_secondary sm:w-full">
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
