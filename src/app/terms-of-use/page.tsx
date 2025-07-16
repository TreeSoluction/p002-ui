import { BookText } from "lucide-react";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-12 py-12 text-gray-800">
      <div className="flex flex-col items-center gap-2 sm:gap-3 mb-4 text-center">
        <BookText className="w-8 h-8 sm:w-12 sm:h-12 text-blue-600" />
        <h1 className="text-2xl sm:text-4xl md:text-5xl font-semibold">
          Termos de Uso
        </h1>
      </div>

      <div className="space-y-8 leading-loose sm:leading-relaxed text-base sm:text-xl md:text-2xl text-left sm:text-justify">
        <p>
          A <strong>Feiras de Pernambuco</strong> atua unicamente como uma
          plataforma de intermediação digital, conectando clientes a
          fabricantes, fornecedores e vendedores. Esclarecemos que{" "}
          <strong>não somos parte direta</strong> em quaisquer transações
          comerciais realizadas entre compradores e vendedores.
        </p>

        <div>
          <p className="font-semibold text-blue-700">
            ✅ Não nos responsabilizamos por:
          </p>
          <ul className="list-disc list-inside ml-4 mt-2 space-y-2">
            <li>
              Qualquer tipo de prejuízo ou dano decorrente de negociações
              realizadas entre comprador e vendedor;
            </li>
            <li>Atrasos na entrega, não entrega ou extravio de produtos;</li>
            <li>
              Produtos que apresentem defeito, divergência de qualidade ou não
              estejam de acordo com o anunciado.
            </li>
          </ul>
        </div>

        <p>
          ✅ Nossa responsabilidade é limitada exclusivamente ao funcionamento
          da plataforma, oferecendo suporte técnico sobre o uso e acesso ao
          sistema.
        </p>

        <div>
          <p className="font-semibold text-red-600">
            🚫 É terminantemente proibida
          </p>
          <p>
            a comercialização de produtos falsificados ou réplicas através da
            nossa plataforma e redes sociais. A venda ou divulgação de produtos
            que infrinjam direitos autorais, marcas registradas ou qualquer
            outra legislação vigente será removida e poderá ser reportada às
            autoridades competentes.
          </p>
        </div>

        <p className="text-yellow-600">
          ⚠️ Em nossas redes sociais, divulgamos apenas produtos originais, de
          autoria própria ou produtos sem marca (genéricos), respeitando as leis
          brasileiras.
        </p>

        <p className="text-center font-semibold text-blue-700">
          Ao utilizar a Feiras de Pernambuco, o usuário declara estar ciente e
          de acordo com estes termos.
        </p>
      </div>
    </div>
  );
}
