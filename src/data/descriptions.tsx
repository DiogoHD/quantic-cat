export const descriptions = [
  {
    level: 1,
    description: (
      <>
        <p>
          Todos os gates que você pode usar são aplicados ao qubit 0, que representa a posição do gato 0. 
          Além disso, todos os gates movem o gato para a direita, ou seja, eles avançam o gato uma coluna no mapa.
        </p>
        <p>
          O objetivo é usar os gates para levar o gato até o peixe, que está na última coluna do mapa. 
          Mas cuidado: o gato só pode estar em uma das duas linhas do mapa, e alguns gates podem mudar a linha do gato!
        </p>
        <p>
          O comando {" "}
          <code className="px-1 py-0.5 rounded text-sm font-mono">
            qc.id(0)
          </code>
          {" "} é um gate de identidade, ou seja, ele não altera o estado do qubit. No entanto, ele ainda move o gato para a direita! Use isso para ajudar o gato a chegar ao peixe!
        </p>
      </>
    ),
  },
  {
    level: 2,
    description: (
      <>
        <p>
          Agora que você já conhece o gate de identidade, vamos apresentar outro gate muito importante: o gate X.
        </p>
        <p>
          O comando {" "}
          <code className="px-1 py-0.5 rounded text-sm font-mono">
            qc.x(0)
          </code>
          {" "} é um gate de Pauli-X, que inverte o estado do qubit. 
          No nosso jogo, isso significa que ele muda a linha do gato: se o gato está na linha de cima, ele vai para a linha de baixo, e vice-versa.
        </p>
        <p>
          Atenção: o gate X também move o gato para a direita, assim como o gate de identidade!
        </p>
      </>
    ),
  },
  {
    level: 3,
    description: (
      <>
        <p>
          Agora vamos aplicar os dois gates que você já conhece para resolver o nível.
        </p>
        <p>
          Usa os gates de identidade para avançar o gato, e os gates X para mudar a linha do gato quando necessário.
        </p>
      </>
    ),
  }
];
