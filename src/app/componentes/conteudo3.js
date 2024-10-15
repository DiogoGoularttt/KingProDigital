export default function Conteudo3() {
  return (
    <div className="bg-primary text-white p-6 md:p-32 flex flex-col">
      <h1 className="text-center mb-12">Vantagens e Desvantagens</h1>

      <div className="flex flex-col md:flex-row justify-between space-y-6 md:space-y-0">
        <div className="bg-green-500 p-6 rounded-lg shadow-lg flex-1 mx-2">
          <h2 className="text-xl font-semibold mb-4">Vantagens</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Maior Visibilidade: Aumente sua presença online.</li>
            <li>
              Flexibilidade de Patrocínio: Patrocina publicações existentes e
              dark posts.
            </li>
            <li>
              Público-Alvo Específico: Direcione anúncios para quem realmente
              importa.
            </li>
            <li>
              Oportunidade de Remarketing: Possibilidade de fazer remarketing.
            </li>
            <li>
              Assistência Profissional: Equipe dedicada para otimizar suas
              campanhas.
            </li>
          </ul>
        </div>

        <div className="bg-red-500 p-6 rounded-lg shadow-lg flex-1 mx-2">
          <h2 className="text-xl font-semibold mb-4">Desvantagens</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Menor Visibilidade: Direciona somente ao público frio.</li>
            <li>Mudanças de Plataforma: Resultados podem ser imprevisíveis.</li>
            <li>
              Limitação de Patrocínio: Só pode patrocinar posts publicados.
            </li>
            <li>Limitação de Remarketing: Impossível fazer remarketing.</li>
            <li>Foco Limitado: Não busca pessoas que compram online.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
