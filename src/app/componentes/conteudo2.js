import Image from "next/image";
import Logo from "../img/logo2.png"

export default function Conteudo2() {
    return (
        <div className="text-white p-6 md:p-32 flex flex-col md:flex-row">
            <div className="md:w-1/2 order-1 md:order-2">
                <h1>Como funciona?</h1>
                <p className="mt-6">
                    Iniciamos o processo com uma análise aprofundada da sua empresa, incluindo suas redes sociais e anúncios
                    existentes. Nosso objetivo é identificar as melhores estratégias para atrair seu público-alvo e otimizar os
                    resultados que você deseja alcançar.
                </p>
                <br />
                <p>
                    Com base nas informações fornecidas, desenvolveremos um anúncio estratégico, utilizando Facebook Ads ou
                    Google Ads, conforme sua preferência.
                </p>
                <br />
                <p>
                    Além disso, estamos à disposição para auxiliar na edição dos criativos. Embora a responsabilidade final seja
                    sua, garantimos suporte na entrega dos vídeos ou imagens que serão utilizados nos anúncios.
                </p>
            </div>

            <div className="md:w-2/3 order-2 md:order-1 flex items-center justify-start mt-4 md:mt-0">
                <div className="flex items-center justify-center h-full">
                    <Image 
                        src={Logo}
                        alt="Descrição da imagem" 
                        className="rounded-full shadow-lg shadow-white" 
                        width={400}
                        height={400}
                        priority
                    />
                </div>
            </div>
        </div>
    );
}
