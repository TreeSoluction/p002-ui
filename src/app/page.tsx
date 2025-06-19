import { Carousel } from "@/components/carousel";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Carousel />

      <div className="w-full px-4">
        <Image
          src="/anuncio.png"
          alt="Imagem de Anúncio"
          width={1920}
          height={1080}
          className="w-full h-auto rounded-4xl"
          priority
        />
      </div>

      <div className="w-full text-2xl text-center py-8 my-4 rounded-bl-4xl rounded-tr-4xl text-white bg-green-bg">
        CONFIRA O CALENDÁRIO DAS FERIAS
      </div>

      <div></div>
    </div>
  );
}
