export enum SelectedPage {
  Home = "home",
  Regulamentos = "regulamentos",
  OurClasses = "ourclasses",
  Contacto = "contactos",
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
