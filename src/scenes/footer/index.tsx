import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-300 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            Associação de Jiu-Jitsu Brasileiro de Castro Verde
          </p>
          <p>© Todos os direitos reservados</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">
            <a href="https://www.facebook.com/CVABJJ">Facebook</a>
          </p>
          <p className="my-5">
            <a href="https://www.instagram.com/torneiobjjcastroverde/">Instagram</a>
          </p>

        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Associação de Jiu-Jitsu Brasileiro de Castro Verde</p>
          <p>castroverdejiujitsu@gmail.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
