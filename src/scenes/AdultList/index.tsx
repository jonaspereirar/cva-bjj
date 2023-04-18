import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useState } from "react";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type DadoAdult = {
  nome: string;
  faixa: string;
  peso: string;
  categoria: string;
  equipe: string;
  sexo: string;
};

const dados: DadoAdult[] = [
  { nome: "Filipe Goes", faixa: "Roxa", peso: "Pena", categoria: "Master 1", equipe: "Icon jiu jitsu", sexo: "Masculino" },
  { nome: "Eduardo Peixoto", faixa: "Azul", peso: "Leve", categoria: "Master 2", equipe: "5 Element Jiu jitsu Alentejo", sexo: "Masculino" },
  { nome: "Jonas Rodrigues", faixa: "Preta", peso: "Pesado", categoria: "Master 3", equipe: "CVA", sexo: "Masculino" },
  { nome: "Pedro Santinhos", faixa: "Branca", peso: "Médio", categoria: "Master 3", equipe: "5 elements jui-jitsu Alentejo", sexo: "Masculino" },
  { nome: "Lauro de Souza", faixa: "Preta", peso: "Super-Pesado", categoria: "Master 1", equipe: "Acreditar Sempre Jiu-Jitsu Academy, Queluz", sexo: "Masculino" },
  { nome: "Rodrigo Silva", faixa: "Roxa", peso: "Pluma", categoria: "Adulto", equipe: "CVA", sexo: "Masculino" },
  { nome: "David Lima", faixa: "Preta", peso: "Leve", categoria: "Master 4", equipe: "AJA JIU JITSU ASSOCIATION", sexo: "Masculino" },
  { nome: "Cristian Salazar", faixa: "Roxa", peso: "Médio", categoria: "Master 1", equipe: "Atos Alentejo" , sexo: "Masculino"},
  { nome: "Pedro Silva", faixa: "Branca", peso: "Médio", categoria: "Adulto", equipe: "DLL BJJ QUELUZ", sexo: "Masculino" },
  { nome: "Márcio Vieira", faixa: "Branca", peso: "Meio-Pesado", categoria: "Adulto", equipe: "Sampaio", sexo: "Masculino" },
  { nome: "Glaucilene Oliveira", faixa: "Azul", peso: "Leve", categoria: "Master 3", equipe: "Sampaiobjj _FSC-Algarve", sexo: "Feminino" },
  { nome: "George Gomes", faixa: "Azul", peso: "Médio", categoria: "Master 1", equipe: "Gracie Barra Paços de Arcos", sexo: "Masculino" },
  { nome: "André pinto", faixa: "Azul", peso: "Pena", categoria: "Master 1", equipe: "CVA", sexo: "Masculino" },
  { nome: "Carlos Silva", faixa: "Azul", peso: "Médio", categoria: "Master 1", equipe: "Sampaio bjj", sexo: "Masculino" },
  { nome: "Ana Porto", faixa: "Azul", peso: "Pena", categoria: "Master 4", equipe: "Sampaio BJJ FCS Algarve", sexo: "Feminino" },
  { nome: "Moustafa Rashed", faixa: "Branca", peso: "Pesadíssimo", categoria: "Master 3", equipe: "Odojo Sao Luis", sexo: "Masculino" },
  { nome: "Geisi Souza", faixa: "Branca", peso: "Leve", categoria: "Adulto", equipe: "Sampaio BJJ FCS Algarve", sexo: "Feminino" },
  { nome: "Rui Pinheiro", faixa: "Azul", peso: "Super-Pesado", categoria: "Master 2", equipe: "Familia Andre Marola", sexo: "Masculino" },
  { nome: "Tymur Zakirov", faixa: "Branca", peso: "Médio", categoria: "Master 1", equipe: "ACADEMIA DL BJJ", sexo: "Masculino" },
  { nome: "Guilherme Cruz", faixa: "Branca", peso: "Meio-Pesado", categoria: "Adulto", equipe: "Academia DL-BJJ", sexo: "Masculino" },
  { nome: "George Gomes", faixa: "Azul", peso: "Médio", categoria: "Master 1", equipe: "Gracie Barra Paços de Arcos", sexo: "Masculino" },
  { nome: "André Matos", faixa: "Branca", peso: "Pena", categoria: "Adulto", equipe: "Sampaio Algarve", sexo: "Masculino" },
  { nome: "Alex Cardeira", faixa: "Roxa", peso: "Médio", categoria: "Adulto", equipe: "DL-bjj", sexo: "Masculino" },
  { nome: "David Mendes", faixa: "Azul", peso: "Pluma", categoria: "Adulto", equipe: "Família Marola Faro", sexo: "Masculino" },
  { nome: "Débora Cabrita", faixa: "Branca", peso: "Meio-Pesado", categoria: "Adulto", equipe: "Sampaio bjj", sexo: "Feminino" },
  { nome: "Atanas Nikolov Krushovski", faixa: "Marron", peso: "Pesado", categoria: "Master 4", equipe: "Icon jiu jitsu Algarve", sexo: "Masculino" },
  { nome: "Luís Martins", faixa: "Roxa", peso: "Super-Pesado", categoria: "Master 5", equipe: "Sampaio bjj_fcs", sexo: "Masculino" },
  { nome: "Hugo Tavares", faixa: "Preta", peso: "Meio-Pesado", categoria: "Master 3", equipe: "Endless Team Jiu Jitsu", sexo: "Masculino"},
  { 
    nome: "Bruno Carvalho",
    faixa: "Azul",
    peso: "Médio",
    categoria: "Master 1",
    equipe: "Endless Team",
    sexo: "Masculino"
  },
  { 
    nome: "Diogo Pinho",
    faixa: "Branca",
    peso: "Médio",
    categoria: "Master 1",
    equipe: "Endless Jiu Jitsu Algés",
    sexo: "Masculino"
  },
  { 
    nome: "Diogo Pena",
    faixa: "Branca",
    peso: "Pena",
    categoria: "Adulto",
    equipe: "ZR Team Sintra",
    sexo: "Masculino"
  },
  { 
    nome: "Leonardo Gana",
    faixa: "Branca",
    peso: "Médio",
    categoria: "Master 4",
    equipe: "CVA",
    sexo: "Masculino"
  },
  { 
    nome: "Henrique Silvestre",
    faixa: "Branca",
    peso: "Leve",
    categoria: "Adulto",
    equipe: "CVA",
    sexo: "Masculino"
  },
  { 
    nome: "António Pereira",
    faixa: "Branca",
    peso: "Leve",
    categoria: "Master 1",
    equipe: "O Dojo São Luís",
    sexo: "Masculino"
  }
];

const AdultList = ({ setSelectedPage }: Props) => {
  const [searchValue, setSearchValue] = useState("");
  const [showList, setShowList] = useState(false);

  const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };

  function handleToggleListClick() {
    setShowList(!showList);
  }

  const filteredData = dados.filter((dado) => {
    const searchRegex = new RegExp(searchValue, "i");
    return Object.values(dado).some((value) => searchRegex.test(String(value)));
  });

  return (
    <div className="ml-20 mb-10">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AdultList)}
      >
          <HText>
            <span className="text-primary-500">Inscritos Adulto/Master</span>
          </HText>
      <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={handleToggleListClick}>Ver lista de inscritos</button>
      {showList && (
        <section id="listagem-adulto/master" className="mx-auto w-5/6 pt-24 pb-32">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Pesquisar"
              className="px-4 py-2 w-full border rounded-lg"
              value={searchValue}
              onChange={handleSearchInputChange}
            />
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
                <div>Sexo: {dado.sexo}</div>
                <div>Equipe: {dado.equipe}</div>
              </div>
            </motion.li>
          ))}
          </ul>
        </section>
      )}
      </motion.div>
    </div>
  );
}

export default AdultList;