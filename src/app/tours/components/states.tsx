"use client";

type Props = {
  onSelect: (uf: string) => void;
};

export function States({ onSelect }: Props) {
  const states = [
    { name: "Acre", uf: "AC" },
    { name: "Alagoas", uf: "AL" },
    { name: "Amapá", uf: "AP" },
    { name: "Amazonas", uf: "AM" },
    { name: "Bahia", uf: "BA" },
    { name: "Ceará", uf: "CE" },
    { name: "Distrito Federal", uf: "DF" },
    { name: "Espírito Santo", uf: "ES" },
    { name: "Goiás", uf: "GO" },
    { name: "Maranhão", uf: "MA" },
    { name: "Mato Grosso", uf: "MT" },
    { name: "Mato Grosso do Sul", uf: "MS" },
    { name: "Minas Gerais", uf: "MG" },
    { name: "Pará", uf: "PA" },
    { name: "Paraíba", uf: "PB" },
    { name: "Paraná", uf: "PR" },
    { name: "Pernambuco", uf: "PE" },
    { name: "Piauí", uf: "PI" },
    { name: "Rio de Janeiro", uf: "RJ" },
    { name: "Rio Grande do Norte", uf: "RN" },
    { name: "Rio Grande do Sul", uf: "RS" },
    { name: "Rondônia", uf: "RO" },
    { name: "Roraima", uf: "RR" },
    { name: "Santa Catarina", uf: "SC" },
    { name: "São Paulo", uf: "SP" },
    { name: "Sergipe", uf: "SE" },
    { name: "Tocantins", uf: "TO" },
  ];

  return (
    <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 max-w-4xl mx-auto my-8 px-4">
      {states.map(({ name, uf }) => (
        <div
          key={uf}
          onClick={() => onSelect(uf)}
          className="bg-blue-900 text-white rounded-lg shadow text-center flex items-center justify-center p-2 cursor-pointer hover:brightness-110"
          style={{ height: "100px", width: "100%" }}
        >
          <span className="text-sm font-medium">{name}</span>
        </div>
      ))}
    </div>
  );
}
