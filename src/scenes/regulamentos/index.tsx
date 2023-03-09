import ActionButton from "@/shared/ActionButton";
import HText from "@/shared/HText";
import { RegulamentoType, SelectedPage } from "@/shared/types";
import {
  CalendarDaysIcon,
  HomeModernIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import regulamentosPageGraphic from "@/assets/RegulamentosPageGraphic.png";
import Regulamento from "./Regulamento";

const regulamentos: Array<RegulamentoType> = [
  {
    icon: <CalendarDaysIcon className="h-6 w-6" />,
    title: "Data e Hora do evento ",
    description:
      "Dia 06 de Maio de 2023, Início às 09 horas",
  },
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "Local do evento",
    description: "Pavilhão Desportivo Municipal de Castro Verde",
    link: "https://www.google.com/maps/place/Pavilh%C3%A3o+Desportivo+Mun.+de+Castro+Verde,+7780-188+Castro+Verde/@37.7039999,-8.0894345,19z/data=!4m15!1m8!3m7!1s0xd1a61d4da312f5b:0x7da5f7b3da2a3144!2sPavilh%C3%A3o+Desportivo+Mun.+de+Castro+Verde,+7780-188+Castro+Verde!3b1!8m2!3d37.703933!4d-8.0894064!16s%2Fg%2F11bvt9j807!3m5!1s0xd1a61d4da312f5b:0x7da5f7b3da2a3144!8m2!3d37.703933!4d-8.0894064!16s%2Fg%2F11bvt9j807"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Inscrições",
    description:
      "As inscrições para o torneio terão que ser realizadas através dos link da pagina Home.",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Regulamentos = ({ setSelectedPage }: Props) => {
  return (
    <section id="regulamentos" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Regulamentos)}
      >
        {/* HEADER */}
        <motion.div
          className="md:my-5 md:w-3/5"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>Regulamento e Premiação</HText>
          <p className="my-5 text-sm">
            Este torneio é dirigido a todos os atletas e
            professores que pretendem competir no
            evento e apresenta todas as informações
            necessárias para a participação.

          </p>
        </motion.div>

        {/* Regulamentos */}
        <motion.div
          className="mt-5 items-center justify-between gap-8 md:flex"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
        >
          {regulamentos.map((regulamento: RegulamentoType) => (
            <Regulamento
              key={regulamento.title}
              icon={regulamento.icon}
              title={regulamento.title}
              description={regulamento.description}
              setSelectedPage={setSelectedPage}
              children
              link="https://www.google.com/maps/place/Pavilh%C3%A3o+Desportivo+Mun.+de+Castro+Verde,+7780-188+Castro+Verde/@37.7039999,-8.0894345,19z/data=!4m15!1m8!3m7!1s0xd1a61d4da312f5b:0x7da5f7b3da2a3144!2sPavilh%C3%A3o+Desportivo+Mun.+de+Castro+Verde,+7780-188+Castro+Verde!3b1!8m2!3d37.703933!4d-8.0894064!16s%2Fg%2F11bvt9j807!3m5!1s0xd1a61d4da312f5b:0x7da5f7b3da2a3144!8m2!3d37.703933!4d-8.0894064!16s%2Fg%2F11bvt9j807"
            />
          ))}
        </motion.div>

        {/* GRAPHICS AND DESCRIPTION */}
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          {/* GRAPHIC */}
          {/* <img
            className="mx-auto"
            alt="regulamentos-page-graphic"
            src={regulamentosPageGraphic}
          /> */}

          {/* DESCRIPTION */}
          <div>
            {/* TITLE */}
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >

<HText>
  Datas importantes do evento e {" "}
  <span className="text-primary-500">preços</span>
</HText>
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, amount: 0.5 }}
  transition={{ delay: 0.2, duration: 0.5 }}
  variants={{
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 },
  }}
>
  <p className="my-5">
    Data limite de inscrição no torneio: até ao final do dia 23 de Abril de  2023.
  </p>
  <p className="my-5">
    Data da publicação das listas provisórias: até ao final do dia 16 de  Abril de 2023.
  </p>
  <p className="my-5">
    Data limite de edição de inscrições pelo atleta: até ao final do dia 16 de  Abril de 2023.
  </p>
  <p className="my-5">
    Data de publicação das chaves: até ao final do dia 30 de Abril de  2023.
  </p>
  <p className="my-5">
    ATENÇÃO: Não serão permitidas quaisquer alterações às listas após a  publicação das chaves do torneio.
  </p>
  <p className="my-5">
    A premiação será efetuada da seguinte forma:
  </p>
  <p className="my-5">
    Categoria:
  </p>
  <p className="my-5">
    . 1° colocado Medalha + kimono *
  </p>
  <p className="my-5">
    . 2° colocado Medalha
  </p>
  <p className="my-5">
    . 3° colocado Medalha
  </p>
  <p className="my-5">
    Absoluto:
  </p>
  <p className="my-5">
    . 1° colocado  Medalha + inscrição campeonato europeu IBJJ *
  </p>
  <p className="my-5">
    . 2° colocado Medalha
  </p>
  <p className="my-5">
    . 3° colocado Medalha 
  </p>
  <p className="my-5">
    * A premiação será efetuada ao 1° colocado, desde que a chave esteja composta por no mínimo 5 atletas. 
  </p>
  <p className="my-5">
    Preço da inscrição no torneio até ao final do dia 23 de Abril de 2023:
  </p>
  <p className="my-5">
    • €15 para atletas com idade inferior aos 18 anos.
  </p>
  <p className="my-5">
    • €20 para atletas com idade igual ou superior aos 18 anos.  Estes preços têm os seguintes acréscimos:
  </p>
  <p className="my-5">
    • Acréscimos de €10 para inscrições efectuadas de dia 16 de Abril  de 2023 até à data limite de inscrição.
  </p>
  <p className="

</p>
<p className="my-5">
A premiação será efetuada da seguinte forma:
</p>
<p>Categoria:</p>
<ul>
  <li>1° colocado Medalha + kimono *</li>
  <li>2° colocado Medalha</li>
  <li>3° colocado Medalha</li>
</ul>
<p>Absoluto:</p>
<ul>
  <li>1° colocado Medalha + inscrição campeonato europeu IBJJ *</li>
  <li>2° colocado Medalha</li>
  <li>3° colocado Medalha</li>
</ul>
<p>* A premiação será efetuada ao 1° colocado, desde que a chave esteja composta por no mínimo 5 atletas. </p>
<p className="mb-5">
Preço da inscrição no torneio até ao final do dia 23 de Abril de 2023:
</p>
<ul>
  <li>€15 para atletas com idade inferior aos 18 anos.</li>
  <li>€20 para atletas com idade igual ou superior aos 18 anos.</li>
</ul>
<p>Estes preços têm os seguintes acréscimos:</p>
<ul>
  <li>Acréscimos de €10 para inscrições efectuadas de dia 16 de Abril  de 2023 até à data limite de inscrição.</li>
  <li>Acréscimos de €10 para os atletas sem filiação atualizada na FPJJB  ou IBJJF, para efeitos de seguro desportivo.</li>
</ul>
<p>PAGAMENTO:</p>
<p>Transferência bancária para o IBAN PT50 xxxxxxxxxxxxxx  (Associação de Jiu Jitsu Brasileiro de Castro Verde).</p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton link="Home" setSelectedPage={setSelectedPage}>
                  Inscrever-se
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Regulamentos;
