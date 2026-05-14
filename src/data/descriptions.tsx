export const descriptions = [
  {
    id: 1,
    description: (
      <>
        Ajuda o gato a chegar ao peixe usando a porta identidade{" "}
        <code>
          qc.id('cat');
        </code>
        , que apesar de, na física quântica não fazer nada, aqui faz o gato avançar 1 casa no mapa.
      </>
    ),
  },
  {
    id: 2,
    description: (
      <>
        Usa {" "}
        <code className="px-1 py-0.5 rounded text-sm font-mono">
          qc.x(0)
        </code>
        {" "} para mudar o gato de linha.
        O operador X é como um interruptor que inverte o estado do gato: se ele estiver na linha de cima, ele vai para a linha de baixo, e vice-versa. Use isso para ajudar o gato a chegar ao peixe!
      </>
    ),
  },
];
