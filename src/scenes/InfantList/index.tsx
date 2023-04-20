import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useState } from "react";


type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

type DadosInfant = {
  nome: string;
  faixa: string;
  peso: number;
  categoria: string;
  equipe: string;
};

const dados: DadosInfant[] = [
  { nome: "Santiago Afonso", faixa: "Amarela", peso: 51, categoria: "Infanto-Juvenil", equipe: "CVA" },
  { nome: "Tiago Faísco", faixa: "Branca", peso: 38, categoria: "Mirim", equipe: "CVA" },
  { nome: "Rosa Getsel", faixa: "Cinza", peso: 31.6, categoria: "Infantil", equipe: "CVA" },
  { nome: "Tiago Kempe", faixa: "Cinza", peso: 45, categoria: "Infantil", equipe: "ATOS São Luís" },
  { nome: "Tiago Julian Fernandes Kempe", faixa: "Cinza", peso: 45, categoria: "Infantil", equipe: "ATOS São Luís" },
  { nome: "Balian Hellinger", faixa: "Cinza", peso: 64, categoria: "Juvenil", equipe: "Atos Jiu-Jitsu" },
  { nome: "Tomas Guia", faixa: "Amarela", peso: 78.4, categoria: "Infantil", equipe: "SampaioBJJ_FCS" },
  { nome: "Heitor Pereira", faixa: "Branca", peso: 56, categoria: "Infanto-Juvenil", equipe: "Academia DL BJJ" },
  { nome: "Moussa Rashed", faixa: "Branca", peso: 31, categoria: "Infantil", equipe: "Odojo Sao Luis" },
  { nome: "Samuel Rosa", faixa: "Laranja", peso: 50, categoria: "Infantil", equipe: "DL-BJJ QUELUZ" },
  { nome: "Samuel Rosa", faixa: "Laranja", peso: 50, categoria: "Infantil", equipe: "DL-BJJ QUELUZ" },
  { nome: "NOAH LOPEZ", faixa: "Branca", peso: 38, categoria: "Infantil", equipe: "O dojo do Sao Luis" },
  { nome: "LEON LOPEZ", faixa: "Branca", peso: 30, categoria: "Infantil", equipe: "O dojo do Sao Luis" },
  { nome: "Emanuel Rosa", faixa: "Cinza", peso: 38, categoria: "Mirim", equipe: "DL-BJJ QUELUZ" },
  { nome: "Samuel Rosa", faixa: "Laranja", peso: 50, categoria: "Infanto-Juvenil", equipe: "DL-BJJ QUELUZ" },
  { nome: "Thallyson Vasconcelos", faixa: "Azul", peso: 72, categoria: "Juvenil", equipe: "ZR team Sintra" },
  { nome: "Gabriel Inácio Krushovski", faixa: "Amarela", peso: 49.3, categoria: "Infantil", equipe: "Ícone jiu jitsu Algarve" },
  { nome: "Francisco Ferreira", faixa: "Branca", peso: 25.3, categoria: "Mirim", equipe: "CVA" },
  { nome: "Alície Vermelho", faixa: "Branca", peso: 20.5, categoria: "Pré-Mirim", equipe: "CVA" },
  { nome: "Simão Alexandrino", faixa: "Cinza", peso: 28.8, categoria: "Mirim", equipe: "CVA" },
  { nome: "Margarida Mestre", faixa: "Cinza", peso: 19.7, categoria: "Mirim", equipe: "CVA" },
  { nome: "Mara Rebolo", faixa: "Branca", peso: 23.6, categoria: "Mirim", equipe: "CVA" },
  { nome: "Ana Cunha", faixa: "Branca", peso: 58.5, categoria: "Infanto-Juvenil", equipe: "CVA" },
  { nome: "Carolina Lança", faixa: "Cinza", peso: 28.1, categoria: "Infantil", equipe: "CVA" },
  { nome: "Iara Guerreiro", faixa: "Branca", peso: 55.5, categoria: "Infantil", equipe: "CVA" },
  { nome: "Fabiana Guerreiro", faixa: "Branca", peso: 49.8, categoria: "Infantil", equipe: "CVA" },
  { nome: "Louis Gana", faixa: "Branca", peso: 57.7, categoria: "Infanto-Juvenil", equipe: "CVA" },
  { nome: "Maliah Noack", faixa: "Branca", peso: 55, categoria: "Infanto-Juvenil", equipe: "CVA" },
  { nome: "Samuel Savador", faixa: "Branca", peso: 31, categoria: "Infantil", equipe: "Sampaiobjj-fcs Algarve" },
  {
    nome: "Lea Salazar",
    faixa: "Cinza",
    peso: 45,
    categoria: "Infantil",
    equipe: "O Dojo São Luís"
    },
    {
    nome: "Salvador Balicevic",
    faixa: "Amarela",
    peso: 52.55,
    categoria: "Infantil",
    equipe: "Icon jiujitsu Algarve"
    },
  {
    nome: "Diego soares",
    faixa: "Cinza",
    peso: 24.50,
    categoria: "Mirim",
    equipe: "Icon jiu jitsu algarve"
    },
    {
      nome: "Moritz Fajan Hänsel ",
      faixa: "Cinza",
      peso: 54,
      categoria: "Infantil",
      equipe: "Atos  Sao Luis"
      },
      {
        nome: "Liedson Arrulo",
        faixa: "Branca",
        peso: 56,
        categoria: "Infanto-Juvenil",
        equipe: "Bragança Essence internacional"
       },
      {
        nome: "Telma Rodrigues",
        faixa: "Verde",
        peso: 60,
        categoria: "Infanto-Juvenil",
        equipe: "Fighters Inside Regunegos de Monsaraz"
        },
        {
        nome: "William Machado",
        faixa: "Branca",
        peso: 64,
        categoria: "Juvenil",
        equipe: "Endless Team Algés"
        },
];

const InfantList = ({ setSelectedPage }: Props) => {
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
    <div className="ml-20">
          <HText>
            <span className="text-primary-500">Inscritos Infantil/Juvenil</span>
          </HText>
      <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={handleToggleListClick}>Ver lista de inscritos</button>
      {showList && (
        <section id="listagem-infantil" className="mx-auto w-5/6 pt-24 pb-32">
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
