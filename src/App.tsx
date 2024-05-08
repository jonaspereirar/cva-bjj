// import AdultList from "@/scenes/AdultList";
// import InfantList from "./scenes/InfantList";
import Contacto from "@/scenes/contacto";
import Footer from "@/scenes/footer";
import Home from "@/scenes/home";
import Navbar from "@/scenes/navbar";
import Regulamentos from "@/scenes/regulamentos";
import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
// import Lutas from "./scenes/Lutas";

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  );
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Regulamentos setSelectedPage={setSelectedPage} />
      {/* <AdultList setSelectedPage={setSelectedPage} />
      <InfantList setSelectedPage={setSelectedPage} /> */}
      {/* <Lutas setSelectedPage={setSelectedPage} /> */}
      <Contacto setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;