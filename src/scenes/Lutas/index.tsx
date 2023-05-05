import HText from "@/shared/HText";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";


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
    </div>






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
