import React, { useState } from "react";
import { Separator } from "./ui/separator";

const content = [
  {
    content: "IT. 4M",
    works: [
      {
        title: "Título 1",
        description: "Descrição 1",
      },
    ],
  },
  {
    content: "Meu Trabalho",
    works: [
      {
        title: "Título 2",
        description: "Descrição 2",
      },
    ],
  },
  // Adicione mais conteúdos conforme necessário
];

const Works = () => {
  const [selectedContentIndex, setSelectedContentIndex] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedContentIndex(index);
  };

  return (
    <>
      <div className="mb-12 flex items-center sm:pl-28">
        <span className="mr-2 text-text_span sm:text-2xl">02.</span>
        <p className="text-2xl text-text_primary sm:text-2xl">Experiência</p>
        <Separator className="ml-4 h-[1px] w-[120px] bg-[#233554] sm:min-w-[320px]" />
      </div>
      <div className="flex">
        <div className="flex sm:flex-col sm:pl-28">
          {content.map((section, index) => (
            <div
              key={index}
              className={`flex h-10 cursor-pointer items-center  pl-4 text-center hover:bg-[#112240] sm:min-h-[50px] ${
                index === selectedContentIndex
                  ? "border-l-2 border-[#5AE6C7] bg-[#112240]"
                  : "border-l-2 border-[#233554] "
              }`}
              onClick={() => handleMenuClick(index)}
            >
              <p
                className={`mr-10 w-[75px] text-nowrap text-base text-text_secondary sm:text-sm   ${
                  index === selectedContentIndex ? "text-text_span " : ""
                }`}
              >
                {section.content}
              </p>
            </div>
          ))}
        </div>

        <div className="mb-36 flex -translate-x-[290px] translate-y-[80px] transform sm:min-h-[170px] sm:translate-x-[30px] sm:translate-y-[0px] sm:flex-col">
          <div className="flex flex-col">
            <h2 className="flex w-fit items-center px-10 py-3 text-2xl font-semibold text-text_primary">
              {content[selectedContentIndex].content} <span></span>
            </h2>
            {content[selectedContentIndex].works.map((work, workIndex) => (
              <div key={workIndex} className="flex flex-col px-10 py-3">
                <span className="font-bold">{work.title}</span>
                <span>{work.description}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Works;
