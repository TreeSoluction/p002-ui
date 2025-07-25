import Link from "@/components/link";
import { MailIcon } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export default function Page() {
  return (
    <div className="max-w-4xl mx-auto px-6 sm:px-12 py-12 text-gray-800">
      <div className="flex flex-col items-center gap-2 sm:gap-3 mb-10 text-center">
        <h1 className="text-3xl sm:text-5xl font-semibold">
          Política de Privacidade
        </h1>
        <p className="text-sm sm:text-base text-gray-600">
          Última atualização: 25 de julho de 2025
        </p>
      </div>

      <div className="space-y-8 leading-relaxed text-base sm:text-lg md:text-xl text-justify">
        <p>
          A Feiras de Pernambuco respeita sua privacidade e se compromete a
          proteger os dados pessoais dos usuários da nossa plataforma. Esta
          Política de Privacidade descreve como coletamos, usamos, armazenamos e
          protegemos suas informações.
        </p>

        <section>
          <h2 className="font-semibold text-xl mb-2">
            1. Informações que coletamos
          </h2>
          <p>
            Coletamos os seguintes dados, fornecidos diretamente por você ou
            gerados pelo uso do aplicativo:
          </p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Nome completo</li>
            <li>CPF ou CNPJ (em caso de cadastro como fornecedor)</li>
            <li>Endereço de e-mail</li>
            <li>Número de telefone</li>
            <li>Localização aproximada (com permissão)</li>
            <li>Dados de acesso e uso da plataforma</li>
            <li>Preferências de navegação e interações no app</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">
            2. Finalidade do uso dos dados
          </h2>
          <p>Usamos suas informações para:</p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Criar e gerenciar sua conta</li>
            <li>Melhorar a experiência de navegação e usabilidade do app</li>
            <li>
              Conectar feirantes, fornecedores e fabricantes com segurança
            </li>
            <li>
              Enviar comunicações importantes, como notificações de parceiros,
              promoções ou atualizações
            </li>
            <li>Cumprir obrigações legais e regulatórias</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">
            3. Compartilhamento de dados
          </h2>
          <p>Seus dados não serão vendidos. Podemos compartilhá-los com:</p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>
              Parceiros e fornecedores da plataforma, exclusivamente para fins
              operacionais
            </li>
            <li>
              Autoridades públicas, mediante obrigação legal ou ordem judicial
            </li>
            <li>Serviços de hospedagem e segurança de dados (servidores)</li>
          </ul>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">
            4. Armazenamento e segurança
          </h2>
          <p>
            Os dados são armazenados em servidores seguros, com criptografia e
            medidas técnicas para prevenir acessos não autorizados, vazamentos
            ou modificações indevidas.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">5. Direitos do usuário</h2>
          <p>De acordo com a LGPD, você tem o direito de:</p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Acessar seus dados pessoais</li>
            <li>Corrigir informações incorretas</li>
            <li>Solicitar a exclusão dos seus dados</li>
            <li>Revogar consentimentos a qualquer momento</li>
            <li>Saber com quem seus dados foram compartilhados</li>
          </ul>
          <p className="mt-2">
            Você pode exercer esses direitos entrando em contato pelo e-mail:{" "}
            <Link
              href="mailto:privacidade@feirasdepernambuco.com"
              className="text-blue-600 underline hover:text-blue-700"
            >
              privacidade@feirasdepernambuco.com
            </Link>
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">
            6. Cookies e localização
          </h2>
          <p>Utilizamos cookies e tecnologias semelhantes para:</p>
          <ul className="list-disc list-inside ml-5 mt-2 space-y-1">
            <li>Memorizar preferências</li>
            <li>Entender o comportamento do usuário</li>
            <li>Exibir conteúdos e notificações personalizados</li>
          </ul>
          <p className="mt-2">
            A localização é usada apenas com sua permissão, para recomendar
            parceiros próximos.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">
            7. Alterações na Política
          </h2>
          <p>
            Esta Política pode ser atualizada a qualquer momento. Notificaremos
            os usuários por e-mail ou no próprio aplicativo em caso de
            alterações significativas.
          </p>
        </section>

        <section>
          <h2 className="font-semibold text-xl mb-2">8. Contato</h2>
          <p>
            Se você tiver dúvidas sobre esta Política de Privacidade ou sobre o
            tratamento de seus dados, entre em contato conosco:
          </p>
          <ul className="list-none mt-2 space-y-2">
            <li className="flex items-center gap-3 flex-wrap">
              <MailIcon className="text-blue-600 w-5 h-5 sm:w-6 sm:h-6" />
              <Link
                href="mailto:contatofeirasdepernambuco@gmail.com"
                className="text-blue-600 underline hover:text-blue-700"
              >
                contatofeirasdepernambuco@gmail.com
              </Link>
            </li>
            <li className="flex items-center gap-3 flex-wrap">
              <FaWhatsapp className="text-green-600 w-5 h-5 sm:w-6 sm:h-6" />
              <span>Suporte via WhatsApp no app (81) 9 9100-2040</span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
