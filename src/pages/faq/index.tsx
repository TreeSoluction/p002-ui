import { FAQItem } from "./components/items";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Como funciona a feira?",
    answer: "A feira conecta produtores locais diretamente com consumidores.",
  },
  {
    question: "Preciso pagar para participar?",
    answer: "Não, a participação é gratuita.",
  },
  {
    question: "Onde acontece a feira?",
    answer: "A feira acontece no centro da cidade.",
  },
];

export default function FAQPage() {
  return (
    <main className="max-w-2xl mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center mb-6">
        Perguntas Frequentes
      </h1>

      {faqs.map((faq, index) => (
        <FAQItem key={index} faq={faq} />
      ))}
    </main>
  );
}
