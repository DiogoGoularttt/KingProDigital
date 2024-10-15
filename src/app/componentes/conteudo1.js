import Image from "next/image";
import Logo from "../img/logo2.png"

export default function Conteudo1() {
  return (
    <div className="bg-primary text-white p-6 md:p-32 flex flex-col md:flex-row">
      <div className="md:w-1/2">
        <h1>Quem somos?</h1>
        <p className="mt-6">
          Somos uma empresa dedicada ao desenvolvimento de anúncios estratégicos
          para empresas, serviços e produtos na internet.
        </p>
        <br />
        <p>
          Fundamentamo-nos em princípios sólidos como confiança, honestidade,
          integridade, transparência e respeito. Esses valores orientam nosso
          trabalho e fortalecem nossos relacionamentos com clientes e parceiros.
        </p>
        <br />
        <p>
          Nossa missão é impulsionar o crescimento de empresas de todos os
          tamanhos, ajudando-as a alcançar seu público-alvo de forma eficaz e
          impactante.
        </p>
      </div>

      <div className="md:w-2/3 flex items-center justify-end mt-4 md:mt-0">
        <div className="flex items-center justify-center h-full">
          <Image
            src={Logo}
            alt="Descrição da imagem"
            className="rounded-full shadow-lg"
            width={500}
            height={500}
            priority
          />
        </div>
      </div>
    </div>
  );
}
