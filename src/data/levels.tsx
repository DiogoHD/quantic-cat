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
  },
  {
    title: "O gato muda de cor",
    catPositions: [[[0, 0], 0]],
    boxPositions: [[4, 0]],
    wavePositions: [[[2, 0], 180], [[2, 1], 180]],
    cols: 5,
    description: (
      <>
        <p>
          As ondas continuam por perto! Só que, desta vez, não existe nenhuma onda laranja para que o gato possa passar.
        </p>
        <p>
          Vamos agora aprender como mudar a fase do gato usando os gates de fase.
        </p>
        <p>
          O comando {" "}
          <code className="px-1 py-0.5 rounded text-sm font-mono">
            qc.z(0)
          </code>
          {" "} é um gate de Pauli-Z, que inverte a fase do qubit, adicionando 180° à fase atual. No nosso jogo, isso significa que ele muda a cor do gato: se o gato é laranja e passa a ser cinza, e vice-versa.
        </p>
      </>
    )
  },
  {
    title: "Gato Antigo",
    catPositions: [[[0, 0], 135]],
    boxPositions: [[4, 0]],
    wavePositions: [[[2, 0], 225], [[2, 1], 225]],
    cols: 5,
    description: (
      <>
        <p>
          Este gato saltou diretamente dos anos 80 para o nosso jogo, e por isso tem uma fase muito estranha: 135°!
        </p>
        <p>
          Este gato é preto e, para ele passar pelas ondas brancas, que têm fase 225°, precisas de o tornar branco.
        </p>
        <p>
          Para adicionar 90° à fase do gato, usa o comando {" "}
          <code className="px-1 py-0.5 rounded text-sm font-mono">
            qc.s(0)
          </code>
          {" "}, que é um gate de fase S.
        </p>
      </>
    )
  },
  {
    title: "Gato Alienígena",
    catPositions: [[[0, 0], 270]],
    boxPositions: [[4, 0]],
    wavePositions: [[[2, 0], 315], [[2, 1], 315]],
    cols: 5,
    description: (
      <>
        <p>
          Será que este gato é do futuro? Onde já se viu um gato rosa!
        </p>
        <p>
          Este gato tem uma fase de 270°, e para ele passar pelas ondas amarelas, que têm fase 315°. Logo, precisas de mudar a fase do gato para 315°.
        </p>
        <p>
          Para adicionar 45° à fase do gato, usa o comando {" "}
          <code className="px-1 py-0.5 rounded text-sm font-mono">
            qc.t(0)
          </code>
          {" "}, que é um gate de fase T.
        </p>
      </>
    )
  },
  {
    title: "Gato Arco-íris",
    catPositions: [[[0, 0], 45]],
    boxPositions: [[6, 0]],
    wavePositions: [[[1, 0], 90], [[1, 1], 90], [[2, 0], 270], [[2, 1], 270], [[3, 0], 315], [[3, 1], 315], [[4, 0], 45], [[4, 1], 45], [[5, 0], 90], [[5, 1], 90]],
    cols: 7,
    description: (
      <>
        <p>
          Este gato tem um desafio e tanto! Tem de passar por imensas ondas antes de chegar à caixa e, para isso precisa de ter a fase certa para cada onda.
        </p>
        <p>
          Para resolver este nível, usa todos os gates de fase que aprendeste: Z, S e T. Lembra-te que cada gate de fase também move o gato para a direita, então planeia bem os teus movimentos para garantir que o gato esteja na fase certa para cada onda!
        </p>
      </>
    )
  }
];
