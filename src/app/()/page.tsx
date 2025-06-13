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
    </div>
  );
}
