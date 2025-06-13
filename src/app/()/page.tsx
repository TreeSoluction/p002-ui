import { Copyright } from "lucide-react";
import Image from "next/image";
import Carousel from "./carousel";

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

      <div className="flex gap-1 items-center justify-center w-full text-sm text-center p-6 mt-4 text-white bg-green-bg">
        DESENVOLVIDO POR <Copyright className="w-4 h-4" /> SOLUTION TREE
      </div>
    </div>
  );
}
