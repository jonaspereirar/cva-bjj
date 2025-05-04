import Logo from "@/assets/Logo.png";
import useMediaQuery from "@/hooks/useMediaQuery";
import { SelectedPage } from "@/shared/types";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Link from "./Link";

type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-black drop-shadow";

  return (
    <nav>
      <style>
        {`
          @keyframes blinkStar {
            0%, 100% { opacity: 1; }
            50% { opacity: 0; }
          }

          .star {
            animation: blinkStar 1s infinite alternate;
          }

          .star:nth-child(1) { animation-delay: 0s; }
          .star:nth-child(2) { animation-delay: 0.3s; }
          .star:nth-child(3) { animation-delay: 0.6s; }

          .glow {
            animation: glowText 1.5s infinite ease-in-out;
          }

          @keyframes glowText {
            0%, 100% { color: #facc15; text-shadow: 0 0 5px #facc15; }
            50% { color: #fff; text-shadow: 0 0 10px #facc15; }
          }
        `}
      </style>

      <div
        className={`${navbarBackground} ${flexBetween} bg-black fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT */}
            <img alt="logo" src={Logo} />

            {/* RIGHT */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Regulamentos" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
                  <Link page="Contacto" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />

                  {/* Scoreboard Link */}
                  <div className="relative group flex flex-col items-start">
                    <a
                      href="https://scoreboardbjj.vercel.app/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-secondary-500 transition duration-300 flex items-center gap-1"
                    >
                      <span className="text-yellow-300 font-semibold">Scoreboard</span>
                      <span className="animate-bounce text-yellow-400">➜</span>
                      <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded animate-pulse">
                        NEW
                      </span>
                    </a>
                    <div className="text-sm mt-1 glow">
                      ⭐<span className="star">⭐</span><span className="star">⭐</span> Utilize em sua academia!
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 mr-24"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-black drop-shadow-xl">
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          <div className="ml-[33%] mt-10 flex flex-col gap-10 text-2xl text-white">
            <Link page="Home" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Regulamentos" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            <Link page="Contacto" selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
            
            {/* Scoreboard Mobile */}
            <div className="relative flex flex-col items-start">
              <a
                href="https://scoreboardbjj.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-secondary-500 transition duration-300 flex items-center gap-1"
              >
                <span className="text-yellow-300 font-semibold">Scoreboard</span>
                <span className="animate-bounce text-yellow-400">➜</span>
                <span className="ml-1 bg-red-500 text-white text-xs px-1.5 py-0.5 rounded animate-pulse">
                  NEW
                </span>
              </a>
              <div className="text-sm mt-1 glow">
                ⭐<span className="star">⭐</span><span className="star">⭐</span> Utilize em sua academia!
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;