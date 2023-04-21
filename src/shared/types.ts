export enum SelectedPage {
  Home = "home",
  Regulamentos = "regulamentos",
  OurClasses = "ourclasses",
  Contacto = "contactos",
  AdultList = "listagem-adulto/master",
  InfantList = "listagem-infantil/juvenil"
}

export interface RegulamentoType {
  icon: JSX.Element;
  title: string;
  description: string;
  link?: string;
}

export interface ClassType {
  name: string;
  description?: string;
  image: string;
}

export type DadosAdulto = {
  nome: string;
  faixa: string;
  peso: string;
  categoria: string;
  equipe: string;
  sexo: string;
};

export type DadosInfatil = {
  nome: string;
  faixa: string;
  peso: number;
  categoria: string;
  equipe: string;
};