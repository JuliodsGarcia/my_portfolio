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
