import {
  ClipboardListIcon,
  ClockIcon,
  MailIcon,
  MegaphoneIcon,
} from "lucide-react";

export default function SacPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 text-gray-800">
      <div className="flex flex-col items-center gap-3 mb-10 text-center">
        <MegaphoneIcon className="w-12 h-12 text-yellow-600" />
        <h1 className="text-4xl sm:text-5xl font-semibold">SAC</h1>
      </div>

      <div className="space-y-8 leading-loose text-xl sm:text-2xl text-justify">
        <p className="text-center font-medium flex justify-center items-center gap-2">
          <MegaphoneIcon className="w-6 h-6 text-yellow-600" />
          SAC – Serviço de Atendimento ao Cliente
        </p>

        <p>
          Aqui é onde você resolve pepinos, reclama de pedidos e recebe todo o
          suporte que precisa:
        </p>

        <ul className="list-none space-y-6">
          <li className="flex items-center gap-3 flex-wrap">
            <MailIcon className="text-blue-600 w-6 h-6" />
            <strong>E-mail SAC:</strong>
            <a
              href="mailto:sac@feirasdepernambuco.com"
              className="text-blue-600 underline hover:text-blue-700"
            >
              sac@feirasdepernambuco.com
            </a>
          </li>

          <li className="flex items-center gap-3">
            <ClockIcon className="text-gray-700 w-6 h-6" />
            <strong>Horário de Atendimento:</strong> Segunda a sexta, das 8h às
            18h
          </li>

          <li className="flex items-center gap-3">
            <ClockIcon className="text-gray-700 w-6 h-6" />
            <strong>Prazo de Resposta:</strong> Até 24 horas úteis
          </li>
        </ul>

        <div className="space-y-4">
          <p className="flex items-center gap-2 font-semibold">
            <ClipboardListIcon className="text-gray-700 w-6 h-6" />
            Como funciona:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Envie sua dúvida, sugestão ou reclamação para o e-mail acima.
            </li>
            <li>Nosso time confirma o recebimento em até 2 horas.</li>
            <li>
              Você recebe solução ou posicionamento completo em até 24 horas
              úteis.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
