import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";

import BearBones from "../../assets/img-resultados/BearBones.jpg";
import graciebarrapacodarcos from "../../assets/img-resultados/Gracie-Barra-Paco-Darcos.png";
import KAISHI from "../../assets/img-resultados/KAISHI.jpg";
import cobrinha from "../../assets/img-resultados/cobrinha.png";
import cvabjj from "../../assets/img-resultados/cvabjj.jpg";
import endless from "../../assets/img-resultados/endless-team.jpg";
import gasTeam from "../../assets/img-resultados/gasTeam.png";
import icon from "../../assets/img-resultados/icon.jpg";
import marola from "../../assets/img-resultados/marola.jpg";
import olddogteam from "../../assets/img-resultados/old-dog-team.jpg";
import sampaio from "../../assets/img-resultados/sampaio.jpg";













type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

interface Atleta {
  nome: string;
  faixa: string;
  peso: string;
  categoria: string;
  equipe: string;
  sexo: string;
}

const Lutas = ({ setSelectedPage }: Props) => {

  return (
    <section id="lutas" className="mx-auto w-5/6 pt-24 pb-32">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Lutas)}
      >
        {/* HEADER */}
        <motion.div
          className="md:w-3/5 mt-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span className="text-primary-500">Resultados</span> por Equipas
          </HText>
          <p className="my-5 flex">
            <strong className="mr-1">1° </strong>  Old Dog Team 
            <strong className="ml-2">193 pontos </strong> 
              <img
                src={olddogteam}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 2° </strong>  Cobrinha Beja
            <strong className="ml-2">135 pontos </strong> 
              <img
                src={cobrinha}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 3° </strong>  Bear Bones
            <strong className="ml-2">117 pontos </strong> 
              <img
                src={BearBones}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 4° </strong>  CVABJJ
            <strong className="ml-2">68 pontos </strong> 
              <img
                src={cvabjj}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
              <p className="my-5 flex">
            <strong className="mr-1"> 5° </strong>  Kaishi Lagoa
            <strong className="ml-2">55 pontos </strong> 
              <img
                src={KAISHI}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 6° </strong>  Sampaio
            <strong className="ml-2">54 pontos </strong> 
              <img
                src={sampaio}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 7° </strong> Família Marola
            <strong className="ml-2">40 pontos </strong> 
              <img
                src={marola}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 8° </strong>  Gas Team
            <strong className="ml-2">58 pontos </strong> 
              <img
                src={gasTeam}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
           <p className="my-5 flex">
            <strong className="mr-1"> 9° </strong>  Icon
            <strong className="ml-2">9 pontos </strong> 
              <img
                src={icon}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 10° </strong>  Gracie-barra
            <strong className="ml-2">4 pontos </strong> 
              <img
                src={graciebarrapacodarcos}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 11° </strong>  Endless Team
            <strong className="ml-2">2 pontos </strong> 
              <img
                src={endless}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          {/* <p className="my-5 flex">
            <strong className="mr-1"> 8° </strong>  Endless Team
            <strong className="ml-2">43 pontos </strong> 
              <img
                src={endless}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 9° </strong>  Cobrinha
            <strong className="ml-2">43 pontos </strong> 
              <img
                src={cobrinha}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 12° </strong>  Fighters Inside
            <strong className="ml-2">33 pontos </strong> 
              <img
                src={fighters}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 13° </strong>  Atos S. Luis
            <strong className="ml-2">29 pontos </strong> 
              <img
                src={atos}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 14° </strong> Checkmat
            <strong className="ml-2">22 pontos </strong> 
              <img
                src={checkmate}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 15° </strong> Clone
            <strong className="ml-2">17 pontos </strong> 
              <img
                src={clone}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 16° </strong>  GB Paço de Arcos
            <strong className="ml-2">12 pontos </strong> 
              <img
                src={graciebarrapacodarcos}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 17° </strong>  Katsu Jiu-Jitsu
            <strong className="ml-2">10 pontos </strong> 
              <img
                src={katsu}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 18° </strong>  BPT
            <strong className="ml-2">3 pontos </strong> 
              <img
                src={bpt}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 19° </strong>  Vita-Team
            <strong className="ml-2">3 pontos </strong> 
              <img
                src={vitateam}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 20° </strong>  Five Elements
            <strong className="ml-2">3 pontos </strong> 
              <img
                src={five}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p>
          <p className="my-5 flex">
            <strong className="mr-1"> 21° </strong>  GB Hamburgo
            <strong className="ml-2">1 pontos </strong> 
              <img
                src={graciebarrahamurgo}
                alt="Perfil do 1° colocado"
                className="w-10 h-10 ml-2"
              />
          </p> */}
          <strong className="mr-1"> A classificação das equipas vencedoras foram determinada com base na totalidade das pontuações conquistadas.
          Em caso de empate entre equipas com a mesma pontuação, o critério de desempate foram o número de vantagens acumuladas ao longo do torneio.</strong>
{/* <p className="my-5">
  <strong>2° </strong> ZR
  <img
    src={secondPlaceImage}
    alt="Perfil do 2° colocado"
    className="w-10 h-10 ml-2"
  />
</p>
<p className="my-5">
  <strong>3° </strong> Old Dog
  <img
    src={thirdPlaceImage}
    alt="Perfil do 3° colocado"
    className="w-10 h-10 ml-2"
  />
</p> */}

          {/* <HText>
            <span className="text-primary-500">Cronograma</span> do evento
          </HText>
          <div className="container mx-auto p-4">
          <div className="flex flex-col space-y-4">
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">09h00</div>
              <div className="w-2/3">Abertura</div>
            </div>
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">09h05</div>
              <div className="w-2/3">Pesagem e chamada para a área de aquecimento – Categoria Mirim</div>
            </div>
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">9h15</div>
              <div className="w-2/3">Categoria Mirim</div>
            </div>
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">10h00</div>
              <div className="w-2/3">Categoria Infantil</div>
            </div>
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">10h30</div>
              <div className="w-2/3">Categoria Infanto-Juvenil e Juvenil</div>
            </div>
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">11h15</div>
              <div className="w-2/3">Faixa Preta/Marron/Roxa – Adulto Masculino</div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/3"></div>
              <div className="w-2/3">Faixa Branca/Azul – Feminino</div>
            </div>
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">12h00</div>
              <div className="w-2/3">Faixa Azul Adulto</div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/3"></div>
              <div className="w-2/3">Faixa Preta/Marron/Roxa – Masters</div>
            </div>
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">13h00</div>
              <div className="w-2/3">Faixa Azul - Masters</div>
            </div>
            <div className="flex space-x-4">
              <div className="w-1/3"></div>
              <div className="w-2/3">Faixa Branca – Adulto e Masters</div>
            </div>
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">14h30</div>
              <div className="w-2/3">Absoluto – Faixa Roxa</div>
            </div>
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">15h00</div>
              <div className="w-2/3">Absoluto – Faixa Marron e Preta</div>
            </div>
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">15h30</div>
              <div className="w-2/3">Absoluto – Faixa Azul</div>
            </div>
            <div className="flex space-x-4">
              <div className="font-bold w-1/3 text-right">.</div>
              <div className="w-2/3">As pesagens das demais categorias serão realizadas 20 minutos antes do início de cada chave.</div>
            </div>
    </div>
  </div> */}






          {/* <HText>
            <span className="text-primary-500">Pesquisa de Chaves</span> de lutas
          </HText>
          <p className="my-5">
            Adultos & Masters: Verifique sua chave e edite caso deseje lutar em categoria superior.
          </p> */}

          {/* <LutasComponent atletas={Atletas} /> */}
          
        </motion.div>
        {/* FORM AND IMAGE */}
        {/* <div className="mt-10 justify-between gap-8 md:flex">
          <motion.div
            className="mt-10 basis-3/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
          </motion.div>

          <motion.div
            className="relative mt-16 basis-2/5 md:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
          </motion.div>
        </div> */}
      </motion.div>
    </section>
  );
};

export default Lutas;
