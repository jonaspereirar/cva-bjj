import HText from "@/shared/HText";
import LutasComponent from "@/shared/LutasComponent";
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { Atletas } from "../AdultList/AdultListData";


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
            <span className="text-primary-500">Pesquisa de Chaves</span> de lutas
          </HText>
          <p className="my-5">
            Adultos & Masters: Verifique sua chave e edite caso deseje lutar em categoria superior.
          </p>

          <LutasComponent atletas={Atletas} />
          
        </motion.div>
        {/* FORM AND IMAGE */}
        <div className="mt-10 justify-between gap-8 md:flex">
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
        </div>
      </motion.div>
    </section>
  );
};

export default Lutas;
