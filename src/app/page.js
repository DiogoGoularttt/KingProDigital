import Conteudo1 from "./componentes/conteudo1";
import Conteudo2 from "./componentes/conteudo2";
import Conteudo3 from "./componentes/conteudo3";
import Footer from "./componentes/footer";
import Formulario from "./componentes/formulario";
import Header from "./componentes/header";
import WhatsappButton from "./componentes/whatsapp-button";

export default function Home() {
  return (
    <>
      <Header />
      <Conteudo1 />
      <Conteudo2 />
      <Conteudo3 />
      <Formulario />
      <Footer />
      <WhatsappButton />
    </>
  );
}
