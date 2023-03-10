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
          <HText>Regulamento</HText>
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
                    Datas importantes do evento
                  </HText>
                </motion.div>
              </div>
            </div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.1, duration: 0.3 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              <p className="my-5">
                Data limite de inscrição no torneio: <p><strong> Até às 23h 59m do dia 23 de Abril de 2023</strong>.</p>
              </p>
              <p className="my-5">
                Data da publicação das listas provisórias: <p><strong>Até às 23h 59m do dia 16 de  Abril de 2023.</strong></p>
              </p>
              <p className="my-5">
                Data limite de edição de inscrições pelo atleta: <p><strong>Até às 23h 59m do dia 16 de  Abril de 2023.</strong></p>
              </p>
              <p className="my-5">
                Data de publicação das chaves: <p><strong>Até às 23h 59m do dia 30 de Abril de  2023.</strong></p>
              </p>
              <p className="my-5">
                <strong >ATENÇÃO: Não serão permitidas quaisquer alterações às <br />listas após a  publicação das chaves do torneio.</strong>
              </p>


              <HText>
                <span className="text-primary-500">Premiação</span>
              </HText>

              <p className="my-5">
                A premiação será efetuada da seguinte forma:
              </p>
              <p className="my-8">
                Categorias:  <strong>Mirin, Ifantil, Ifanto-juvenil, Juvenil, Adulto, Master </strong>
              </p>
              <p className="my-5 mx-4">
                <strong>. 1° classificado</strong> Medalha + kimono *
              </p>
              <p className="my-5 mx-4">
                <strong>. 2° classificado</strong> Medalha
              </p>
              <p className="my-5 mx-4">
                <strong>. 3° classificado</strong> Medalha
              </p>
              <p><strong>*</strong> Para a atribuição do prémio kimono é necessário haver no mínimo <strong>4</strong> atletas na chave. </p>


              <p className="my-8">
                Categoria Absoluto faixa Azul, Roxa, Marron, Preta: <strong>Adulto e Master</strong>
              </p>
              <p className="my-5 mx-4">
                <strong>. 1° classificado</strong>  Medalha + inscrição campeonato europeu IBJJ <strong>**</strong>
              </p>
              <p className="my-5 mx-4">
                <strong>. 2° classificado</strong> Medalha
              </p>
              <p className="my-5 mx-4">
                <strong>. 3° classificado</strong> Medalha
              </p>
              <p className="my-5">
                <strong>**</strong> Para a atribuição do prémio <strong>Inscrição Campeonato Europeu 2023</strong> é necessário haver no
                mínimo <strong>10</strong> atletas na chave.  Se na chave houver entre <strong>4</strong> a <strong>9</strong> atletas será atribuído como prémio um kimono.
              </p>

              <HText>
                <span className="text-primary-500">Valores</span>
              </HText>

              <p className="my-5">
                Preço da inscrição no torneio até ao final do dia 16 de Abril de 2023:
              </p>
              <p className="my-5">
                <strong>• €15</strong> para atletas com idade inferior aos 18 anos.
              </p>
              <p className="my-5">
                <strong>• €20 </strong>para atletas com idade igual ou superior aos 18 anos.

                <p className="my-5"> <strong>Estes preços têm os seguintes acréscimos:</strong></p>
              </p>
              <p className="my-5">
                • Acréscimos de <strong>€10</strong> para inscrições efectuadas depois do dia <strong>16 de Abril de 2023</strong> até à data limite de inscrição.
              </p>

              <p>PAGAMENTO:</p>
              <p>Transferência bancária para o IBAN PT50 PT50004560454027846447323 SWIFT: CCCMPTPL </p>
              <p>(Associação de Jiu Jitsu Brasileiro de Castro Verde).</p>

              <p className="my-5">Inscrição válidas após o envio do comprovativo de Transferências bancárias</p>
            </motion.div>

            {/* BUTTON */}
            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                {/* <ActionButton link="Home" setSelectedPage={setSelectedPage}>
                  Inscrever-se
                </ActionButton> */}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Regulamentos;
