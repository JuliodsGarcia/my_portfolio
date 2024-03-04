import { useState } from "react";
import { Separator } from "./ui/separator";

const Works = () => {
  // Estado para controlar o item de menu ativo
  const [activeMenu, setActiveMenu] = useState<string>("");

  // Lista de itens de menu e seus componentes associados
  const menuItems = [
    { id: "item1", label: "Item 1", component: <p>Componente 1</p> },
    { id: "item2", label: "Item 2", component: <p>Componente 2</p> },
    { id: "item3", label: "Item 3", component: <p>Componente 2</p> },
    { id: "item4", label: "Item 4", component: <p>Componente 2</p> },
    { id: "item5", label: "Item 5", component: <p>Componente 2</p> },
    // Adicione mais itens conforme necessário
  ];

  return (
    <>
      <div className="mb-12 flex items-center sm:pl-28">
        <span className="mr-2 text-text_span sm:text-2xl">02.</span>
        <p className="text-2xl text-text_primary sm:text-2xl">Experiência</p>
        <Separator className="ml-4 h-[1px] w-[120px] bg-[#233554] sm:min-w-[320px]" />
      </div>
      <div className="mb-40 flex w-full flex-col sm:flex-row sm:pl-28">
        <div className="flex overflow-auto border-b border-transparent sm:flex-col sm:overflow-visible sm:border-b-0 sm:border-l-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className={`cursor-pointer whitespace-nowrap p-2 ${activeMenu === item.id ? "border-b-2 border-text_span sm:border-l-4 sm:border-b-transparent" : "border-[#233554] sm:border-l-4"}`}
              onClick={() => setActiveMenu(item.id)}
            >
              <p
                className={`-ml-2 px-5 py-3 ${activeMenu === item.id ? "bg-slate-400 text-text_span" : "text-text_secondary"}`}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-5 flex-1 sm:ml-10 sm:mt-4">
          {menuItems.find((item) => item.id === activeMenu)?.component}
        </div>
      </div>
    </>
  );
};

export default Works;
