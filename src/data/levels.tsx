export const levels = [
  {
    title: "A identidade do gato",
    catPositions: [[[0, 0], 0]],
    boxPositions: [[2, 0]],
    cols: 3,
    description: (
      <>
        <p>
          Todos os gates que podes usar são aplicados ao qubit 0, que representa a posição do gato 0. 
          Além disso, todos os gates movem o gato para a direita, ou seja, eles avançam o gato uma coluna no mapa.
        </p>
        <p>
          O objetivo é usar os gates para levar o gato até a caixa, que está na última coluna do mapa. 
        </p>
        <p>
          O comando {" "}
          <code className="px-1 py-0.5 rounded text-sm font-mono">
            qc.id(0)
          </code>
          {" "} é um gate de identidade, ou seja, ele não altera o estado do qubit. No entanto, ele ainda move o gato para a direita! Use isso para ajudar o gato a entrar na caixa!
        </p>
      </>
    ),
  },
  {
    title: "O gato troca de caminhos",
    catPositions: [[[0, 0], 0]],
    boxPositions: [[2, 1]],
    cols: 3,
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
    title: "O gato tem fome!",
    catPositions: [[[0, 0], 0]],
    boxPositions: [[4, 0]],
    fishPositions: [[2, 1]],
    cols: 5,
    description: (
      <>
        <p>
          Neste nível, o gato tem fome! Para ganhar, além de levar o gato para a caixa, também precisas garantir que ele coma o peixe no caminho.
        </p>
        <p>
          Usa os gates de identidade para avançar o gato, e os gates X para mudar a linha do gato quando necessário.
        </p>
      </>
    ),
  },
  {
    title: "1 gato, 2 caixas",
    catPositions: [[[0, 0], 0]],
    boxPositions: [[2, 0], [2, 1]],
    cols: 3,
    description: (
      <>
        <p> Neste nível, o objetivo é levar o gato para as duas caixas. Para isso, vais precisar usar os gates de forma estratégica para garantir que o gato entre em ambas as caixas. </p>
        <p> O comando {" "}
          <code className="px-1 py-0.5 rounded text-sm font-mono">
            qc.h(0)
          </code>
          {" "} é um gate de Hadamard, que coloca o qubit em superposição. No nosso jogo, isso significa que ele cria uma cópia do gato na linha oposta. 
          Assim, se o gato está na linha de cima, ele cria um novo gato na linha de baixo, e vice-versa.
        </p>
      </>
    )
  },
  {
    title: "O gato está cheio de fome!",
    catPositions: [[[0, 0], 0]],
    boxPositions: [[4, 0]],
    fishPositions: [[2, 0], [2, 1]],
    cols: 5,
    description: (
      <>
        <p>
          O gato está cheio de fome! Agora, para ganhar, precisas garantir que ele coma os dois peixes no caminho antes de entrar na caixa.
        </p>
        <p>
          Estando o gato na superposição, ele pode comer ambos os peixes ao mesmo tempo!
        </p>
        <p>
          Ao estar na superposição, se usarmos o gate de Hadamard de novo, o gato retorna ao estado que estava antes, desaparecendo o gato criado.
        </p>
      </>
    )
  },
  {
    title: "Uma estranha interferência",
    catPositions: [[[0, 0], 0]],
    boxPositions: [[4, 0]],
    wavePositions: [[[2, 0], 270], [[2, 1], 0]],
    cols: 5,
    description: (
      <>
        <p>
          O gato está a sofrer uma estranha interferência!
        </p>
        <p>
          Existem ondas de interferência no caminho do gato. Cada onda tem uma fase, que é representada pela cor da onda: ondas laranja têm fase 0, e ondas rosa têm fase 270.
        </p>
        <p>
          Assim, o gato não pode passar por ondas de fases diferentes da sua, isto é, o gato laranja só pode passar por ondas laranja, e o gato rosa só pode passar por ondas rosa.
        </p>
      </>
    )
  }
];
