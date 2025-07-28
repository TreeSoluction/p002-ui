"use client";
import { ArrowUp, Copyright, MailIcon } from "lucide-react";
import Image from "next/image";
import LinkNext from "next/link";
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
              <Link href="/" className="hover:underline">
                Início
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/cities" className="hover:underline">
                Cidades
              </Link>
            </li>
            <li>
              <Link href="/sac" className="hover:underline">
                SAC
              </Link>
            </li>
            <li>
              <Link href="/terms-of-use" className="hover:underline">
                Termos de Uso
              </Link>
            </li>
            <li>
              <Link href="/faq" className="hover:underline">
                FAQ - Perguntas Frequentes
              </Link>
            </li>
            <li>
              <Link href="/policy-and-privacy" className="hover:underline">
                Política de Privacidade
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold mb-3 text-base sm:text-lg">Contato</h3>
          <p className="text-sm sm:text-base flex items-center gap-2">
            <FaWhatsapp className="text-green-600 w-5 h-5" />
            <a
              href="https://wa.me/5581991002040"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              (81) 99100-2040
            </a>
          </p>
          <p className="text-sm sm:text-base flex items-center gap-2 break-words whitespace-normal mt-2">
            <MailIcon className="text-white w-5 h-5" />
            <a
              href="mailto:contatofeirasdepernambuco@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              contatofeirasdepernambuco@gmail.com
            </a>
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
            <LinkNext
              href="https://play.google.com/store/apps/details?id=com.feirasdepernambuco&pcampaignid=web_share"
              className="shrink-0"
              target="_blank"
            >
              <div className="relative w-[130px] h-10">
                <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                  alt="Disponível no Google Play"
                  fill
                  className="object-contain"
                />
              </div>
            </LinkNext>
            <LinkNext
              href="https://play.google.com/store/apps/details?id=com.feirasdepernambuco&pcampaignid=web_share"
              className="shrink-0"
              target="_blank"
            >
              <div className="relative w-[130px] h-10">
                <Image
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Disponível na App Store"
                  fill
                  className="object-contain"
                />
              </div>
            </LinkNext>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <a
          className="text-white hover:text-gray-300 transition-colors"
          aria-label="Voltar ao topo"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ArrowUp className="w-6 h-6 animate-bounce" />
        </a>
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
