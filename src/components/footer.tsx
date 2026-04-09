import { ArrowUp, Copyright, MailIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Link from "./link";

export function Footer() {
  return (
    <footer className="bg-[#345d8c] text-white py-10 px-4 mt-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid gap-10 grid-cols-1 md:grid-cols-3">
        <div>
          <h3 className="font-bold mb-3 text-base sm:text-lg">Navegação</h3>

          <ul className="space-y-1 text-sm sm:text-base">
            <li>
              <Link to="/" className="hover:underline">
                Início
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/cities" className="hover:underline">
                Cidades
              </Link>
            </li>
            <li>
              <Link to="/sac" className="hover:underline">
                SAC
              </Link>
            </li>
            <li>
              <Link to="/terms-of-use" className="hover:underline">
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:underline">
                FAQ - Perguntas Frequentes
              </Link>
            </li>
            <li>
              <Link to="/policy-and-privacy" className="hover:underline">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-base sm:text-lg">Contato</h3>

          <p className="text-sm sm:text-base flex items-center gap-2">
            <FaWhatsapp className="text-green-600 w-5 h-5" />

            <Link
              to="https://wa.me/5581991002040?text=Olá%2C%20vim%20do%20Feiras%20de%20Pernambuco%2C%20gostaria%20de%20mais%20informações."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              (81) 99100-2040
            </Link>
          </p>

          <p className="text-sm sm:text-base flex items-center gap-2 wrap-break-word whitespace-normal mt-2">
            <MailIcon className="text-white w-5 h-5" />

            <Link
              to="mailto:contatofeirasdepernambuco@gmail.com"
              className="hover:underline"
            >
              contatofeirasdepernambuco@gmail.com
            </Link>
          </p>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-base sm:text-lg">Baixe o App</h3>

          <p className="mb-4 text-sm sm:text-base">
            Baixe o aplicativo e tenha
            <br />
            acesso aos maiores fabricantes
            <br />
            de Pernambuco na palma da sua mão!
          </p>

          <div className="flex flex-wrap gap-2 justify-start items-center">
            <Link
              to="https://play.google.com/store/apps/details?id=com.feirasdepernambuco&pcampaignid=web_share"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Disponível no Google Play"
                className="w-[130px] h-10 object-contain"
              />
            </Link>

            <Link
              to="https://apps.apple.com/br/app/feiras-de-pernambuco/id6748486143"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                alt="Disponível na App Store"
                className="w-[130px] h-10 object-contain"
              />
            </Link>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Voltar ao topo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-6 h-6 animate-bounce" />
        </button>
      </div>

      <div className="text-center text-sm mt-6 border-t border-white/30 pt-4">
        <p className="flex items-center justify-center gap-1 flex-wrap">
          <Copyright className="w-4 h-4" />
          2025 Feiras de Pernambuco | Todos os direitos reservados
        </p>

        <p>Desenvolvido por Soluction Tree</p>
      </div>
    </footer>
  );
}
