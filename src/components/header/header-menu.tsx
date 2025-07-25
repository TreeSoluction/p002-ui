"use client";

import Link from "@/components/link";
import { MenuIcon, X } from "lucide-react";

import { useState } from "react";

export default function HeaderMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      <MenuIcon
        onClick={toggleMenu}
        className="h-8 w-8 cursor-pointer text-white"
      />

      <div
        className={`fixed inset-0 z-40 bg-black/30 transition-opacity ${
          isOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        onClick={toggleMenu}
      />

      <nav
        className={`fixed top-0 left-0 z-50 h-full w-72 transform rounded-r-lg bg-white p-6 text-black shadow-lg transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="mb-4 flex items-center justify-between">
          <span className="text-lg font-semibold">Menu</span>
          <X onClick={toggleMenu} className="cursor-pointer" />
        </div>

        <ul className="space-y-4 text-lg">
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/about">Sobre nós</Link>
          </li>
          <li>
            <Link href="/contact">Contato</Link>
          </li>
          <li>
            <Link href="/cities">Cidades</Link>
          </li>
          <li>
            <Link href="/sac">SAC</Link>
          </li>
          <li>
            <Link href="/faq"> FAQ - Perguntas Frequentes</Link>
          </li>
          <li>
            <Link href="/terms-of-use">Termos de Uso</Link>
          </li>
          <li>
            <Link href="/policy-and-privacy">Política de Privacidade</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
