export const subjects: Subject[] = [
  {
    slug: "fundamentos",
    id: 1,
    title: "Fundamentos",
    image: <img className="h-64 sm:w-80 w-full" src="/arduino.webp" alt="arduino"/>,
    content: [
      {
        id: "1",
        title: "Introdução",
        content: (
          <div className="space-y-2">
            <p>
              
              Fundamentos de Eletrônica, Arduino e Primeira Programação:
              vindo à primeira aula do nosso minicurso sobre{" "}
              <em>Robôs Seguidores de Linha com Arduino</em>!
            </p>
            <p>
              Neste encontro, daremos os primeiros passos no mundo da eletrônica
              e da programação, utilizando uma das plataformas mais acessíveis e
              didáticas: o <code>Arduino</code>.
            </p>
          </div>
        ),
      },
      {
        id: "2",
        title: "Objetivo da Aula",
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>
              Mostrar que aprender tecnologia pode ser simples, prático e
              divertido.
            </li>
            <li>
              Explicar os conceitos básicos de eletrônica: protoboard,
              resistores e LEDs.
            </li>
            <li>Realizar o primeiro circuito prático com Arduino.</li>
          </ul>
        ),
      },
    ],
    subtitles: [
      {
        slug: "introducao-ao-arduino-e-ide",
        id: 11,
        title: "Introdução ao Arduino e IDE",
        image: <></>,
        content: [
          {
            id: "1",
            title: "Definição",
            content: (
              <p>
                O <strong>Arduino</strong> é uma plataforma criada para
                facilitar o aprendizado de <em>eletrônica</em> e{" "}
                <em>programação</em>, funcionando como um mini computador que
                pode controlar diversos dispositivos.
              </p>
            ),
          },
          {
            id: "2",
            title: "Vantagens",
            content: (
              <p>
                Barato, fácil de usar e com código aberto, permite modificações
                e compartilhamento de projetos, tornando-o acessível a todos.
              </p>
            ),
          },
          {
            id: "3",
            title: "Popularidade",
            content: (
              <p>
                Possui uma enorme comunidade global com muitos recursos
                didáticos, sendo amplamente usado em escolas, universidades e
                oficinas.
              </p>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "robo-seguidor-de-linha",
        id: 12,
        title: "O que é um robô seguidor de linha?",
        image: <></>,
        content: [
          {
            id: "4",
            title: "Funcionamento",
            content: (
              <p>
                Utiliza sensores para detectar uma linha no chão e ajustar o
                movimento com base nessas leituras, com controle feito por um{" "}
                <code>Arduino</code>.
              </p>
            ),
          },
          {
            id: "5",
            title: "Aplicações",
            content: (
              <p>
                Excelente projeto para iniciantes em robótica, com aplicação em
                feiras de ciências e competições educacionais.
              </p>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "protoboard",
        id: 13,
        title: "Protoboard — O que é e para que serve?",
        image: <></>,
        content: [
          {
            id: "6",
            title: "Definição",
            content: (
              <p>
                Placa usada para montar circuitos sem necessidade de solda.
                Ideal para prototipagem rápida.
              </p>
            ),
          },
          {
            id: "7",
            title: "Funcionamento",
            content: (
              <ul className="list-disc ml-6">
                <li>Furos interligados por trilhas internas.</li>
                <li>
                  Áreas centrais para componentes e laterais para alimentação.
                </li>
              </ul>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "resistores-e-leds",
        id: 14,
        title: "Resistores e LEDs",
        image: <></>,
        content: [
          {
            id: "8",
            title: "Resistores",
            content: (
              <p>
                Componentes que <strong>limitam a corrente elétrica</strong>{" "}
                para proteger dispositivos. Possuem faixas coloridas que indicam
                seu valor em <em>Ohms (Ω)</em>.
              </p>
            ),
          },
          {
            id: "9",
            title: "LEDs",
            content: (
              <div className="space-y-1">
                <p>
                  <strong>LED</strong> = Diodo Emissor de Luz. Tem polaridade
                  definida:
                </p>
                <ul className="list-disc ml-6">
                  <li>
                    <strong>Perna maior:</strong> positivo (ânodo)
                  </li>
                  <li>
                    <strong>Perna menor:</strong> negativo (cátodo)
                  </li>
                </ul>
                <p>Deve sempre estar em série com um resistor.</p>
              </div>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "codigo-arduino",
        id: 15,
        title: "Estrutura de um código em Arduino",
        image: <></>,
        content: [
          {
            id: "10",
            title: "Funções Principais",
            content: (
              <div className="mockup-code">
                <pre data-prefix="$">
                  <code>void setup() &#123;</code>
                </pre>
                <pre data-prefix="~">
                  <code> Configuração inicial</code>
                </pre>
                <pre data-prefix="$">
                  <code>&#125;</code>
                </pre>
                <pre data-prefix="$">
                  <code>void loop() &#123;</code>
                </pre>
                <pre data-prefix="~">
                  <code> Executado continuamente</code>
                </pre>
                <pre data-prefix="$">
                  <code>&#125;</code>
                </pre>
              </div>
            ),
          },
          {
            id: "11",
            title: "Entradas e Saídas",
            content: (
              <ul className="list-disc ml-6">
                <li>
                  <code>pinMode()</code>: define o modo de um pino
                </li>
                <li>
                  <code>digitalRead()</code>: lê o valor de entrada
                </li>
                <li>
                  <code>digitalWrite()</code>: escreve valor de saída
                </li>
              </ul>
            ),
          },
        ],
        subtitles: [],
      },
    ],
  },




  {
    slug: "componentes-e-testes",
    id: 2,
    title: "Exploração",
    image: <img className="h-64 sm:w-80 w-full" src="/line-follower-robotic.webp" alt="arduino"/>,
    content: [
      {
        id: "1",
        title: "Objetivo da Aula",
        content: (
          <p>
            Exploração dos Componentes do Robô e Testes Práticos:
            Compreender o funcionamento dos principais componentes do robô
            seguidor de linha e realizar testes práticos com sensores e motores
            para entender suas funções.
          </p>
        ),
      },
    ],
    subtitles: [
      {
        slug: "estrutura-fisica",
        id: 21,
        title: "Visão Geral da Estrutura Física",
        image: <></>,
        content: [
          {
            id: "1",
            title: "Descrição",
            content: (
              <p>
                O robô possui um chassi leve (acrílico, MDF etc.), motores DC
                com rodas, roda boba, sensores IR na parte inferior e uma placa
                controladora como cérebro. A energia vem de pilhas ou baterias.
                Essa combinação torna o robô ideal para o aprendizado prático de
                robótica.
              </p>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "componentes-funcao",
        id: 22,
        title: "Função de Cada Componente",
        image: <></>,
        content: [
          {
            id: "2",
            title: "Motores DC e Rodas",
            content: (
              <p>
                Motores DC transformam energia elétrica em movimento e permitem
                ao robô se deslocar. As rodas, conectadas aos motores, executam
                a movimentação linear sobre a pista.
              </p>
            ),
          },
          {
            id: "3",
            title: "Ponte H (L298N ou similar)",
            content: (
              <p>
                A Ponte H permite o controle de sentido e velocidade dos
                motores, atuando como interface de potência entre o Arduino e os
                motores.
              </p>
            ),
          },
          {
            id: "4",
            title: "Sensores Infravermelho (IR)",
            content: (
              <p>
                Os sensores IR detectam a linha com base na luz refletida.
                Superfícies claras refletem mais, enquanto a linha preta
                absorve, permitindo identificar a posição do robô.
              </p>
            ),
          },
          {
            id: "5",
            title: "Fonte de Energia e Conexões Elétricas",
            content: (
              <div>
                <p>
                  <strong>Fonte de energia:</strong> Alimenta o robô com pilhas
                  ou baterias, garantindo autonomia.
                </p>
                <p>
                  <strong>Conexões elétricas:</strong> Interligam sensores,
                  placa e ponte H, conduzindo energia e sinais de controle.
                </p>
              </div>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "testes-praticos",
        id: 23,
        title: "Testes Práticos e Comandos",
        image: <></>,
        content: [
          {
            id: "6",
            title: "Leitura dos Sensores",
            content: (
              <p>
                Usar <code>digitalRead()</code> ou <code>analogRead()</code>{" "}
                para monitorar sensores IR e identificar a linha na pista.
              </p>
            ),
          },
          {
            id: "7",
            title: "Controle dos Motores",
            content: (
              <ul className="list-disc ml-6">
                <li>Movimentos: frente, ré, parada, curva</li>
                <li>
                  Comandos: <code>digitalWrite()</code> e{" "}
                  <code>analogWrite()</code> (PWM)
                </li>
              </ul>
            ),
          },
          {
            id: "8",
            title: "Testes Modulares",
            content: (
              <ul className="list-disc ml-6">
                <li>Teste de sensores: verificar detecção da linha</li>
                <li>Teste dos motores: verificar movimentação e controle</li>
                <li>
                  Teste conjunto: sensores influenciando diretamente os motores
                </li>
              </ul>
            ),
          },
          // {
          //   id: "4",
          //   title: "Exemplo de Código",
          //   content: (
          //     <div className="mockup-code text-sm">
          //       <pre data-prefix="1">
          //         <code>Controle básico com dois sensores IR</code>
          //       </pre>
          //       <pre data-prefix="2">
          //         <code>int sensorE = 2, sensorD = 3;</code>
          //       </pre>
          //       <pre data-prefix="3">
          //         <code>int motorE = 5, motorD = 6;</code>
          //       </pre>
          //       <pre data-prefix="4">
          //         <code>void setup() &#123;</code>
          //       </pre>
          //       <pre data-prefix="5">
          //         <code> pinMode(sensorE, INPUT);</code>
          //       </pre>
          //       <pre data-prefix="6">
          //         <code> pinMode(sensorD, INPUT);</code>
          //       </pre>
          //       <pre data-prefix="7">
          //         <code> pinMode(motorE, OUTPUT);</code>
          //       </pre>
          //       <pre data-prefix="8">
          //         <code> pinMode(motorD, OUTPUT);</code>
          //       </pre>
          //       <pre data-prefix="9">
          //         <code> Serial.begin(9600);</code>
          //       </pre>
          //       <pre data-prefix="10">
          //         <code>&#125;</code>
          //       </pre>
          //       <pre data-prefix="11">
          //         <code>void loop() &#123;</code>
          //       </pre>
          //       <pre data-prefix="12">
          //         <code> int e = digitalRead(sensorE);</code>
          //       </pre>
          //       <pre data-prefix="13">
          //         <code> int d = digitalRead(sensorD);</code>
          //       </pre>
          //       <pre data-prefix="14">
          //         <code> if(e == 0 && d == 0) &#123;</code>
          //       </pre>
          //       <pre data-prefix="15">
          //         <code> analogWrite(motorE, 150);</code>
          //       </pre>
          //       <pre data-prefix="16">
          //         <code> analogWrite(motorD, 150);</code>
          //       </pre>
          //       <pre data-prefix="17">
          //         <code> &#125; else if(e == 0) &#123;</code>
          //       </pre>
          //       <pre data-prefix="18">
          //         <code> analogWrite(motorE, 150);</code>
          //       </pre>
          //       <pre data-prefix="19">
          //         <code> analogWrite(motorD, 0);</code>
          //       </pre>
          //       <pre data-prefix="20">
          //         <code> &#125; else if(d == 0) &#123;</code>
          //       </pre>
          //       <pre data-prefix="21">
          //         <code> analogWrite(motorE, 0);</code>
          //       </pre>
          //       <pre data-prefix="22">
          //         <code> analogWrite(motorD, 150);</code>
          //       </pre>
          //       <pre data-prefix="23">
          //         <code> &#125; else &#123;</code>
          //       </pre>
          //       <pre data-prefix="24">
          //         <code> analogWrite(motorE, 0);</code>
          //       </pre>
          //       <pre data-prefix="25">
          //         <code> analogWrite(motorD, 0);</code>
          //       </pre>
          //       <pre data-prefix="26">
          //         <code> &#125;</code>
          //       </pre>
          //       <pre data-prefix="27">
          //         <code> delay(100);</code>
          //       </pre>
          //       <pre data-prefix="28">
          //         <code>&#125;</code>
          //       </pre>
          //     </div>
          //   ),
          // },
        ],
        subtitles: [],
      },
      {
        slug: "materiais-aula-2",
        id: 24,
        title: "Materiais Necessários",
        image: <></>,
        content: [
          {
            id: "9",
            title: "Lista de Materiais",
            content: (
              <ul className="list-disc ml-6">
                <li>Robôs didáticos prontos</li>
                <li>Computadores com IDE Arduino instalada</li>
                <li>Cabos USB para reprogramação</li>
                <li>Fonte de alimentação (pilhas ou bateria)</li>
                <li>Folha de referência dos pinos e funções</li>
                <li>Pistas pequenas e pista grande</li>
                <li>Sala de aula B8</li>
              </ul>
            ),
          },
        ],
        subtitles: [],
      },
    ],
  },
  {
    slug: "entendendo-o-codigo",
    id: 3,
    title: "Código e Teste",
    image: <img className="h-64 sm:w-80 w-full" src="/arduino_code.jpg" alt="arduino"/>,
    content: [
      {
        id: "1",
        title: "Objetivo da Aula",
        content: (
          <p>
            Entendendo o Código e Testando os Robôs:
            Compreender os principais blocos do código do robô seguidor de linha e aplicar esse entendimento em testes práticos na pista, analisando o comportamento real do robô em função das leituras dos sensores.
          </p>
        ),
      },
    ],
    subtitles: [
      {
        slug: "parte1-codigo",
        id: 31,
        title: "Entendendo o Código",
        image: <></>,
        content: [
          {
            id: "1",
            title: "Conceitos Chave",
            content: (
              <ul className="list-disc ml-6">
                <li>Mapeamento de pinos com <code>#define</code> e <code>const int</code></li>
                <li>Relação entre código e hardware</li>
              </ul>
            ),
          },
          {
            id: "2",
            title: "Funções Principais",
            content: (
              <ul className="list-disc ml-6">
                <li><code>setup()</code>: inicialização</li>
                <li><code>loop()</code>: execução contínua</li>
                <li><code>readSensors()</code>: captação da linha</li>
                <li><code>followLineMEF()</code>: decisão de movimento</li>
                <li><code>motorOption()</code> / <code>motorControl()</code>: controle dos motores</li>
                <li><code>motorStop()</code>: limite de funcionamento</li>
                <li><code>ledControl()</code> / <code>rgbControl()</code>: estados visuais</li>
              </ul>
            ),
          },
          {
            id: "3",
            title: "Casos Comuns",
            content: (
              <p>
                Exemplo: quando sensores leem <code>001100</code> ou <code>000110</code>, mostrar no quadro o que isso significa e como o robô se comporta com base nisso.
              </p>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "parte2-testes",
        id: 32,
        title: "Testes Práticos com os Robôs",
        image: <></>,
        content: [
          {
            id: "4",
            title: "Objetivo",
            content: (
              <p>Relacionar o comportamento observado na pista com o que foi discutido no código.</p>
            ),
          },
          {
            id: "5",
            title: "Atividades Práticas",
            content: (
              <ul className="list-disc ml-6">
                <li>Ligar e testar robôs individualmente</li>
                <li>Verificar sensores e motores</li>
                <li>Colocar o robô na pista: segue linha? responde a curvas? perde o trajeto?</li>
                <li>Discutir com alunos o que foi ativado no código</li>
                <li>Pausar, repetir e ajustar quando necessário</li>
              </ul>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "parte3-conclusao",
        id: 33,
        title: "Conclusão e Reflexão",
        image: <></>,
        content: [
          {
            id: "6",
            title: "Reflexões",
            content: (
              <ul className="list-disc ml-6">
                <li>O que funcionou bem? O que pode melhorar?</li>
                <li>Ideias para melhorar o código (ex: cruzamentos, semáforos)</li>
                <li>Preparação para a competição: o que observar na próxima aula?</li>
              </ul>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "materiais-aula-3",
        id: 34,
        title: "Materiais Necessários",
        image: <></>,
        content: [
          {
            id: "7",
            title: "Lista de Materiais",
            content: (
              <ul className="list-disc ml-6">
                <li>Computadores com Arduino IDE</li>
                <li>Robôs com sensores e motores conectados</li>
                <li>Cabos USB</li>
                <li>Pistas impressas ou desenhadas</li>
                <li>Projetor ou quadro para explicação</li>
                <li>Pistas pequenas e pista grande</li>
              </ul>
            ),
          },
        ],
        subtitles: [],
      },
    ],
  },
    {
    slug: "competicao-entre-equipes",
    id: 4,
    title: "Competição",
    image: <img className="h-64 sm:w-80 w-full" src="/track.jpeg" alt="arduino"/>,
    content: [
      {
        id: "1",
        title: "Objetivo da Aula",
        content: (
          <p>
            Colocar os robôs em prova numa pista desafiadora. Promover o trabalho em equipe, solução de problemas e espírito colaborativo por meio de uma competição.
          </p>
        ),
      },
    ],
    subtitles: [
      {
        slug: "atividades",
        id: 41,
        title: "Atividades",
        image: <></>,
        content: [
          {
            id: "1",
            title: "Descrição",
            content: (
              <ul className="list-disc ml-6">
                <li>Formação das equipes (se ainda não tiverem sido formadas)</li>
                <li>Explicação das regras da competição</li>
                <li>Apresentação dos robôs e estratégias</li>
                <li>Corridas eliminatórias ou por pontos</li>
                <li>Premiação simbólica ou reconhecimento das equipes</li>
                <li>Roda final de conversa: aprendizados, dificuldades, sugestões</li>
              </ul>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "materiais-aula-4",
        id: 42,
        title: "Materiais Necessários",
        image: <></>,
        content: [
          {
            id: "2",
            title: "Lista de Materiais",
            content: (
              <ul className="list-disc ml-6">
                <li>Pista completa com curvas, bifurcações e desafios</li>
                <li>Cronômetro ou aplicativo de tempo</li>
                <li>Sistema de pontuação ou eliminação</li>
                <li>Fita preta extra para ajustes</li>
                <li>Prêmios simbólicos (medalhas, certificados, doces, etc.)</li>
                <li>Câmera ou celular para registro (opcional)</li>
                <li>Pistas pequenas</li>
                <li>Pista grande</li>
                <li>Sala de aula B8</li>
              </ul>
            ),
          },
        ],
        subtitles: [],
      },
    ],
  },
];

export interface Subject {
  id: number;
  slug: string;
  title: string;
  image: React.ReactNode;
  content: Content[];
  subtitles?: Subject[];
}

export interface Content {
  id: string;
  title: string;
  content: string | React.ReactNode;
}
