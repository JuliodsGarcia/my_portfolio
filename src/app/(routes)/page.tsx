import About from "@/components/about";
import { TextGenerateEffectDemo } from "../../components/text-effect";

export default function HomePage() {
  return (
    <main className="relative mx-auto flex h-screen flex-col bg-primary/20">
      <div
        className="absolute -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] opacity-10 [background-size:20px_26px] 
        [mask-image:radial-gradient(ellipse_30%_50%_at_50%_50%,#000_70%,transparent_100%)]"
      />

      <div className="container mx-auto mt-32  flex w-full flex-col justify-center space-y-5 lg:mt-56 lg:px-52">
        <p className="ml-2 font-medium text-text_span lg:ml-5 lg:text-lg">
          Olá, meu nome é
        </p>
        <h2 className="text-5xl font-bold text-text_primary antialiased lg:text-7xl">
          Julio Cesar
        </h2>
        <TextGenerateEffectDemo />
        <p className="max-w-[700px] tracking-wider text-text_primary">
          Sou um entusiasta da tecnologia e estou mergulhando no mundo da
          programação com uma paixão fervorosa. Estou no início da minha
          jornada, buscando aprender e crescer constantemente. Atualmente, estou
          focado em construir experiências digitais envolventes e acessíveis,
          explorando as possibilidades emocionantes que a programação oferece.
          Mal posso esperar para compartilhar meu progresso e projetos neste
          emocionante caminho de aprendizado!
        </p>

        <button
          className="max-w-[300px] rounded-md border border-text_span bg-bg_primary px-4 py-4 text-sm font-semibold tracking-wider text-text_span transition duration-200 
          ease-in-out hover:shadow-[4px_4px_0px_0px_rgba(97,249,213)]"
        >
          Minhas Stacks
        </button>
      </div>

      <section className="">
        <About />
      </section>
    </main>
  );
}
