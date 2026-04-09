import { InfoIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-12 py-12 text-gray-800">
      <div className="flex flex-col items-center gap-2 sm:gap-3 mb-4 text-center">
        <InfoIcon className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
          Sobre nós
        </h1>
      </div>

      <div className="space-y-8 leading-loose sm:leading-relaxed text-base sm:text-xl md:text-2xl text-left sm:text-justify">
        <p>
          A Feiras de Pernambuco é uma startup que centraliza as principais
          feiras têxteis do estado em um só aplicativo. Em vez de perder tempo
          procurando feira por feira, aqui você encontra tudo em um só lugar —
          produtos, contatos e oportunidades.
        </p>

        <p>
          Conectamos compradores e vendedores de forma simples, rápida e
          eficiente. Unimos tradição com tecnologia pra movimentar o polo têxtil
          de Pernambuco como nunca antes.
        </p>

        <p className="text-center text-blue-700 font-semibold">
          Feiras de Pernambuco: todas as feiras do estado, num só App.
        </p>
      </div>
    </div>
  );
}
