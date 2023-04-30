import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useState } from "react";

import { Atletas } from "./InfantListData";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const InfantList = ({ setSelectedPage }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [showList, setShowList] = useState(false);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  function handleToggleListClick() {
    setShowList(!showList);
  }

  const filteredData = Atletas.filter((dado) => {
    const searchRegex = new RegExp(searchValue, "i");
    return Object.values(dado).some((value) => searchRegex.test(String(value)));
  });

  return (
    <div className="ml-20">
          <HText>
            <span className="text-primary-500">Inscritos Infantil/Juvenil</span>
          </HText>
      <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={handleToggleListClick}>Ver lista de inscritos</button>
      {showList && (
        <section id="listagem-infantil" className="mx-auto w-5/6 pt-24 pb-32">
         
          <div className="relative mb-4">
  <input
    type="text"
    placeholder="Pesquisar"
    //className="px-4 py-2 w-full border rounded-lg outline-none focus:border-blue-500 animate-pulse"
    className="px-4 py-2 w-full border rounded-lg 
    focus:outline-none focus:ring-2 focus:ring-blue-600 
    bg-gray-100 text-gray-700 placeholder-gray-500 animate-pulse"
    value={searchValue}
    onChange={handleSearchInputChange}
  />
  <div className="absolute inset-y-0 right-0 flex items-center pr-3">
    <svg className="h-5 w-5 text-gray-400" viewBox="0 0 24 24" fill="none">
      <path
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        d="M15 9l-4 4m0 0l-4-4m4 4v6a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h6"
      ></path>
    </svg>
  </div>
</div>
          
          <ul>
            {filteredData.map((dado, index) => (
              <motion.li
              key={index}
              onViewportEnter={() => setSelectedPage(SelectedPage.AdultList)}
              className="mb-4"
            >
              <div className="bg-white p-4 rounded-lg shadow-md">
                <div className="font-bold">{dado.nome}</div>
                <div>Faixa: {dado.faixa}</div>
                <div>Peso: {dado.peso}</div>
                <div>Categoria: {dado.categoria}</div>
                <div>Equipe: {dado.equipe}</div>
              </div>
            </motion.li>
          ))}
          </ul>
        </section>
      )}
    </div>
  );
}

export default InfantList;
