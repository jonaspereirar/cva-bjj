import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import ActionButton from "@/shared/ActionButton";
import HomePageText from "@/assets/HomePageText.png";
import EvolveText from "@/assets/EvolveText.png";
import HomePageGraphic from "@/assets/HomePageGraphic.png";
import SponsorRedBull from "@/assets/SponsorRedBull.gif";
import SponsorForbes from "@/assets/SponsorForbes.png";
import SponsorFortune from "@/assets/SponsorFortune.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

function SelectedPageGoogle() {

}

const Home = ({ setSelectedPage }: Props) => {
  //const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
  const isAboveSmallScreens = useMediaQuery("(min-width: 640px)");
  const isAbove768Screens = useMediaQuery("(min-width: 768px)");
  const isAboveMediumScreens = useMediaQuery("(min-width: 960px)");
  const isAboveLargeScreens = useMediaQuery("(min-width: 1280px)");


  return (
    <section id="home" className="gap-16 bg-black md:h-full md:pb-0">
      {/* IMAGE AND MAIN HEADER */}
      <motion.div
        className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6 bg-black"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/* MAIN HEADER */}
        <div className="z-10 mt-24 md:basis-3/5">
          {/* HEADINGS */}
          <motion.div
            className="mt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                <img alt="home-page-text" src={HomePageText} />
              </div>
            </div>
            <p className="mt-6 text-xl md:text-3xl text-red-800">
              6 de Maio
            </p>
          </motion.div>

          {/* ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            style={{ display: "flex", flexDirection: "column" }}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "20px" }}>
              <p className="text-white text-xl">ADULTO/MASTER</p>
              <button
                onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSdguq7WfhvHwmQE7D64yxXgVYzLsybSzid_sm93FtbjhjB2aw/viewform?usp=pp_url"}
                className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 px-4 py-2 rounded-md text-white"
              >
                ACESSAR
              </button>

            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <p className="text-white text-xl">INFANTIL/JUVENIL</p>
              <button
                onClick={() => window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSd-ARZARAWPzvoml820o8B1t2_7iev0UbmCn_-uIP4qb273FQ/viewform?usp=pp_url"}
                className="bg-yellow-500 hover:bg-yellow-600 active:bg-yellow-700 px-4 py-2 rounded-md text-white"
              >

                ACESSAR
              </button>
            </div>
            {/* <a
              className="text-l font-bold text-primary-500 underline hover:text-secondary-500"
              href="https://docs.google.com/forms/d/e/1FAIpQLSd-ARZARAWPzvoml820o8B1t2_7iev0UbmCn_-uIP4qb273FQ/viewform?usp=pp_url"
              target="_blank"
            >
              <p>Regulamento/Premia????o</p>
            </a> */}
          </motion.div>
        </div>

        {/* IMAGE */}
        <div
          className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img alt="home-pageGraphic" src={HomePageGraphic} />
        </div>
      </motion.div >

      {/* SPONSORS */}
      {
        isAboveLargeScreens && (
          <div className="h-[150px] w-full bg-white py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between gap-8">
                <img alt="redbull-sponsor" src={SponsorRedBull} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
              </div>
            </div>
          </div>
        )
      }
      {
        !isAboveLargeScreens && isAboveMediumScreens && (
          <div className="h-[150px] w-full bg-white py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between gap-8">
                <img alt="redbull-sponsor" src={SponsorRedBull} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
              </div>
            </div>
          </div>
        )
      }
      {
        isAbove768Screens && !isAboveMediumScreens && (
          <div className="h-[150px] w-full bg-white py-10">
            <div className="mx-auto w-5/4">
              <div className="flex w-3/5 items-center justify-between gap-8">
                <img alt="redbull-sponsor" src={SponsorRedBull} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
              </div>
            </div>
          </div>
        )
      }
      {
        !isAbove768Screens && isAboveSmallScreens && (
          <div className="h-[150px] w-full bg-white py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-3/5 items-center justify-between gap-8">
                <img alt="redbull-sponsor" src={SponsorRedBull} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
              </div>
            </div>
          </div>
        )
      }
      {
        !isAboveSmallScreens && (
          <div className="h-[150px] w-full bg-white py-10">
            <div className="mx-auto w-5/6">
              <div className="flex w-1/4 items-center justify-between gap-8">
                <img alt="redbull-sponsor" src={SponsorRedBull} />
                <img alt="forbes-sponsor" src={SponsorForbes} />
                <img alt="fortune-sponsor" src={SponsorFortune} />
              </div>
            </div>
          </div>
        )
      }
    </section >
  );
};

export default Home;
