import Link from "@/components/link";
import Image from "next/image";
import { FaWhatsapp } from "react-icons/fa";

interface IFreetterCardProps {
  data: {
    id: number;
    nome: string;
    local: string;
    cidade: string;
    imagem: string;
    phone_numbers: string[];
  };
}

export function Card({ data }: IFreetterCardProps) {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 rounded-xl p-4 gap-4 w-full max-w-4xl shadow-sm">
      <div className="w-24 h-24 min-w-[96px] relative rounded-xl overflow-hidden bg-white">
        <Image
          src={data.imagem}
          alt={data.nome}
          fill
          className="object-contain"
        />
      </div>

      <div className="flex-1 text-sm text-[#0E2F4B] space-y-1">
        <p className="font-medium">{data.local}</p>
        <p>{data.cidade}</p>
        <p className="text-[#0E2F4B] font-semibold">{data.nome}</p>
      </div>

      <div className="flex flex-wrap gap-2">
        {data.phone_numbers.map((phone, i) => (
          <Link
            key={i}
            href={`https://wa.me/55${phone.replace(/\D/g, "")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-green-100 hover:bg-green-200 text-green-800 px-3 py-2 rounded text-sm"
          >
            <FaWhatsapp size={20} />
            {phone}
          </Link>
        ))}
      </div>
    </div>
  );
}
