import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { SelectedPage } from "./types";

type Props = {
  children: React.ReactNode;
  setSelectedPage: (value: SelectedPage) => void;
  link?: string;
};

const ActionButton = ({ children, setSelectedPage, link }: Props) => {
  const handleClick = () => {
    if (link) {
      window.location.href = link; // Redireciona para o link passado como prop
    } else {
      setSelectedPage(SelectedPage.Contacto);
    }
  };

  return (
    <AnchorLink
      className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
      onClick={handleClick}
      href={`#${SelectedPage.Contacto}`}
    >
      {children}
    </AnchorLink>
  );
};

export default ActionButton;
