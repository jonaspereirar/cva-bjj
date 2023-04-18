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

  function ListagemAdult(page: SelectedPage) {
    setSelectedPage(page);
  }

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} bg-black fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Regulamentos"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contacto"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  {/* <Link
                    page="listagem-adulto"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> */}
                </div>
                 {/* <div className={`${flexBetween} gap-8`}>
                  <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white" >Inscritos Adulto/Master</button>

                  <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
                    Inscritos Infantil/Juvenil
                  </button>
                </div> */}
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2 mr-24 "
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-black drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {isMenuToggled && (
            // <div className="flex flex-col gap-8 mt-10">
            //   <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">Inscritos Adulto/Master</button>
            //   <button className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white">
            //   Inscritos Infantil/Juvenil
            //   </button>
            // </div>
          )}

          {/* MENU ITEMS */}
          <div className="ml-[33%] mt-10 flex flex-col gap-10 text-2xl bg-black">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Regulamentos"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contacto"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link
              page="AdultList"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
