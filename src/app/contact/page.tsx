import Link from "@/components/link";
import { MailIcon, PhoneIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-12 py-12 text-gray-800">
      <div className="flex flex-col items-center gap-2 sm:gap-3 mb-10 text-center">
        <PhoneIcon className="w-8 h-8 sm:w-12 sm:h-12 text-green-600" />
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
          Contato
        </h1>
      </div>

      <div className="space-y-8 leading-relaxed text-base sm:text-xl md:text-2xl text-left sm:text-justify">
        <p>
          Tem alguma dúvida, sugestão ou deseja fazer parte da Feiras de
          Pernambuco?
        </p>

        <p>Estamos prontos pra te atender:</p>

        <ul className="list-none space-y-6">
          <li className="flex items-center gap-3 flex-wrap">
            <FaWhatsapp className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
            <strong>WhatsApp:</strong>
            <Link
              href="https://wa.me/5581991002040?text=Vim%20pela%20plataforma%20da%20Feiras%20de%20Pernambuco"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline hover:text-green-700"
            >
              (81) 99100-2040
            </Link>
          </li>

          <li className="flex items-center gap-3 flex-wrap">
            <MailIcon className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
            <strong>Atendimento geral:</strong>
            <Link
              href="mailto:contatofeirasdepernambuco@gmail.com"
              className="text-blue-600 underline hover:text-blue-700"
            >
              contatofeirasdepernambuco@gmail.com
            </Link>
          </li>

          <li className="flex items-center gap-3 flex-wrap">
            <MailIcon className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
            <strong>Suporte ao cliente (SAC):</strong>
            <Link
              href="mailto:sac@feirasdepernambuco.com"
              className="text-blue-600 underline hover:text-blue-700"
            >
              sac@feirasdepernambuco.com
            </Link>
          </li>
        </ul>

        <p className="text-center text-base sm:text-lg md:text-xl">
          Nosso time está disponível de
          <strong>segunda a sexta, das 8h às 18h</strong>.
        </p>
      </div>
    </div>
  );
}
