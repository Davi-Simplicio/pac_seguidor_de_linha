/* eslint-disable @next/next/no-img-element */
import React from "react";

export const subjects: Subject[] = [
  {
    slug: "fundamentos",
    id: 1,
    title: "Fundamentos",
    image: (
      <img
        className="h-64 sm:w-80 w-full"
        src="images/arduino.webp"
        alt="arduino"
      />
    ),
    content: [
      {
        id: "1",
        title: "Introdução",
        content: (
          <div className="space-y-2">
            <p>
              Fundamentos de Eletrônica, Arduino e Primeira Programação: vindo à
              primeira aula do nosso minicurso sobre{" "}
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
    slug: "robo-seguidor-introducao-e-componentes",
    id: 2,
    title: "Componentes",
    image: (
      <img
        className="h-64 sm:w-80 w-full"
        src="images/seguidor_de_linha.webp"
        alt="Componentes de um Robô Seguidor de Linha"
      />
    ),
    content: [
      {
        id: "1",
        title: "O que é um Robô Seguidor de Linha?",
        content: (
          <div className="space-y-3">
            <p>
              Um robô seguidor de linha é um{" "}
              <strong>sistema mecatrônico e autônomo</strong> projetado para
              detectar e seguir uma linha traçada no chão, geralmente preta
              sobre um fundo branco. Ele é amplamente utilizado em projetos
              educacionais, competições de robótica, e possui aplicações
              práticas em logística de armazéns e automação industrial.
            </p>
            <p>
              Esses projetos são comuns em cursos de robótica, engenharia e
              ensino técnico por estimularem a aplicação prática de conceitos de
              programação, eletrônica e lógica computacional.
            </p>
          </div>
        ),
      },
      {
        id: "2",
        title: "Dica para a Aula",
        content: (
          <blockquote className="p-4 my-4 border-l-4 border-fontTextLightMode bg-foregroundLightMode dark:border-gray-500 dark:bg-foregroundDarkMode">
            <p className="text-xl italic font-medium leading-relaxed text-gray-900 dark:text-white">
              &quot;É como se os sensores fossem os <strong>olhos</strong> do
              robô, o microcontrolador fosse o <strong>cérebro</strong> e os
              motores fossem as <strong>pernas</strong>.&quot;
            </p>
          </blockquote>
        ),
      },
    ],
    subtitles: [
      {
        slug: "componentes-essenciais",
        id: 21,
        title: "Componentes Essenciais do Robô",
        image: <></>,
        content: [
          {
            id: "c0",
            title: "A Harmonia dos Componentes",
            content: (
              <p>
                Um robô seguidor de linha só funciona bem quando todos os
                componentes estão conectados corretamente, calibrados e em
                equilíbrio. Um erro em qualquer parte (sensor, código, motor ou
                alimentação) afeta o sistema inteiro. A seguir, detalhamos os
                principais componentes.
              </p>
            ),
          },
          {
            id: "c1",
            title: "Estrutura Mecânica (Chassi)",
            content: (
              <div className="space-y-1">
                <p>
                  <strong>Função:</strong> Suporte físico para todos os outros
                  componentes. É fundamental para garantir estabilidade,
                  organização e funcionamento adequado.
                </p>
                <p>
                  <strong>Materiais comuns:</strong> Acrílico, plástico,
                  alumínio ou MDF.
                </p>
                <p>
                  <strong>Design:</strong> Geralmente compacto e leve para
                  otimizar o movimento.
                </p>
              </div>
            ),
          },
          {
            id: "I1",
            title: "Imagem do Chassi",
            content: (
              <div className="space-y-1">
                <img
                  className="h-64 sm:w-80 w-full"
                  src="images/chassi.jpg"
                  alt="Image Arduino"
                />
              </div>
            ),
          },
          {
            id: "c2",
            title: "Sensores de Linha (Infravermelho - IR)",
            content: (
              <div className="space-y-2">
                <p>
                  <strong>Função:</strong> São os &quot;olhos&quot; do robô,
                  responsáveis por detectar a linha no chão comparando a
                  intensidade da luz infravermelha refletida.
                </p>
                <div>
                  <strong>Como funciona:</strong>
                  <ul className="list-disc ml-6">
                    <li>Superfícies claras refletem mais luz IR.</li>
                    <li>Superfícies escuras (linha preta) refletem menos.</li>
                  </ul>
                </div>
              </div>
            ),
          },
          {
            id: "I2",
            title: "Imagem do Sensor",
            content: (
              <div className="space-y-1">
                <img
                  className="h-64 sm:w-80 w-full"
                  src="images/sensor.jpg"
                  alt="Image Arduino"
                />
              </div>
            ),
          },
          {
            id: "c3",
            title: "Placa Controladora (Microcontrolador)",
            content: (
              <p>
                <strong>Função:</strong> O &quot;cérebro&quot; do robô. Processa
                os sinais dos sensores, toma decisões de movimento (virar,
                seguir em frente, parar) e controla os motores.
                <br />
                <strong>Exemplos:</strong> Arduino Uno, ESP32, PIC.
              </p>
            ),
          },
          {
            id: "I3",
            title: "Imagem do Arduino",
            content: (
              <div className="space-y-1">
                <img
                  className="h-64 sm:w-80 w-full"
                  src="images/arduino.webp"
                  alt="Image Arduino"
                />
              </div>
            ),
          },
          {
            id: "c4",
            title: "Motores (Geralmente Motores DC)",
            content: (
              <p>
                <strong>Função:</strong> Fornecem movimento às rodas. A
                velocidade é controlada via sinal PWM (modulação por largura de
                pulso) gerado pela controladora.
              </p>
            ),
          },
          {
            id: "I4",
            title: "Imagem do Motor",
            content: (
              <div className="space-y-1">
                <img
                  className="h-64 sm:w-80 w-full"
                  src="images/motor.png"
                  alt="Image Arduino"
                />
              </div>
            ),
          },
          {
            id: "c5",
            title: "Rodas e Sistema de Tração",
            content: (
              <p>
                <strong>Função:</strong> Permitem a movimentação do robô. Uma
                configuração comum é de duas rodas motrizes e uma roda livre
                (rodízio) para apoio e estabilidade.
              </p>
            ),
          },
          {
            id: "I5",
            title: "Imagem das Rodas",
            content: (
              <div className="space-y-1">
                <img
                  className="h-64 sm:w-80 w-full"
                  src="images/rodas.webp"
                  alt="Image Arduino"
                />
              </div>
            ),
          },
          {
            id: "c6",
            title: "Fonte de Alimentação (Bateria)",
            content: (
              <p>
                <strong>Função:</strong> Fornecer energia elétrica ao sistema. A
                escolha da bateria (tipo, tensão, capacidade) é crucial e afeta
                diretamente o desempenho geral.
              </p>
            ),
          },
          {
            id: "I6",
            title: "Imagem da Bateria",
            content: (
              <div className="space-y-1">
                <img
                  className="h-64 sm:w-80 w-full"
                  src="images/bateria.png"
                  alt="Image Arduino"
                />
              </div>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "logica-e-programacao",
        id: 31,
        title: "Lógica e Programação do Robô",
        image: <></>,
        content: [
          {
            id: "lp1",
            title: "O Código como Cérebro Operacional",
            content: (
              <p>
                O código é o <strong>cérebro operacional</strong> que transforma
                os componentes eletrônicos em um sistema funcional e autônomo.
                Ele dita como o robô &quot;percebe&quot; o ambiente (através dos
                sensores) e como &quot;reage&quot; (através dos motores) para
                cumprir sua tarefa.
              </p>
            ),
          },
          {
            id: "lp2",
            title: "Estrutura do Programa (Arduino)",
            content: (
              <div className="space-y-2">
                <p>
                  A estrutura de um código para seguidor de linha geralmente
                  inclui:
                </p>
                <ul className="list-disc ml-6 space-y-2">
                  <li>
                    <code>#define</code>: Define constantes para pinos e valores
                    de referência (limiares, velocidades), facilitando a
                    manutenção.
                  </li>
                  <li>
                    <code>void setup()</code>: Função executada uma única vez no
                    início para configurar pinos e inicializar a comunicação
                    serial.
                  </li>
                  <li>
                    <code>void loop()</code>: A &quot;alma&quot; do programa. É
                    executada repetidamente e contém a lógica principal de ler,
                    decidir e agir.
                  </li>
                </ul>
              </div>
            ),
          },
          {
            id: "lp3",
            title: "Lógica de Seguir a Linha",
            content: (
              <div className="space-y-2">
                <p>
                  A lógica mais comum é baseada em uma série de condições (
                  <code>if/else</code>). O processo é o seguinte:
                </p>
                <ol className="list-decimal ml-6 space-y-1">
                  <li>
                    <strong>Ler os Sensores:</strong> O robô lê constantemente
                    os valores dos sensores com <code>analogRead()</code>.
                  </li>
                  <li>
                    <strong>Tomar uma Decisão:</strong> Os valores são
                    comparados a um limiar (<code>TRESHOLD</code>) para
                    identificar a posição da linha.
                  </li>
                  <li>
                    <strong>Acionar os Motores:</strong> Com base na decisão, o
                    código chama funções específicas (<code>frente()</code>,{" "}
                    <code>virarEsquerda()</code>, etc.) para controlar as rodas.
                  </li>
                </ol>
              </div>
            ),
          },
          {
            id: "lp4",
            title: "Código de Exemplo Simplificado",
            content: (
              <div className="mockup-code text-left text-sm">
                <pre>
                  <code>{"// Definição dos pinos"}</code>
                </pre>
                <pre>
                  <code>{"#define sensorEsquerdo A0"}</code>
                </pre>
                <pre>
                  <code>{"#define sensorDireito  A1"}</code>
                </pre>
                <pre>
                  <code>{"#define motorEsquerdo1 3"}</code>
                </pre>
                <pre>
                  <code>{"// ... mais definições"}</code>
                </pre>
                <pre>
                  <code>{""}</code>
                </pre>
                <pre data-prefix="$">
                  <code>{"void setup() {"}</code>
                </pre>
                <pre>
                  <code>{"  pinMode(sensorEsquerdo, INPUT);"}</code>
                </pre>
                <pre>
                  <code>{"  pinMode(motorEsquerdo1, OUTPUT);"}</code>
                </pre>
                <pre>
                  <code>{"  // ... outras configurações"}</code>
                </pre>
                <pre>
                  <code>{"}"}</code>
                </pre>
                <pre>
                  <code>{""}</code>
                </pre>
                <pre data-prefix="$">
                  <code>{"void loop() {"}</code>
                </pre>
                <pre>
                  <code>
                    {"  int leituraEsq = analogRead(sensorEsquerdo);"}
                  </code>
                </pre>
                <pre>
                  <code>{"  int leituraDir = analogRead(sensorDireito);"}</code>
                </pre>
                <pre>
                  <code>{"  int limiar = 500; // Valor de exemplo"}</code>
                </pre>
                <pre>
                  <code>{""}</code>
                </pre>
                <pre>
                  <code className="text-success">
                    {"  if (leituraEsq < limiar && leituraDir < limiar) {"}
                  </code>
                </pre>
                <pre>
                  <code>{"    frente();"}</code>
                </pre>
                <pre>
                  <code className="text-warning">
                    {"  } else if (leituraEsq < limiar) {"}
                  </code>
                </pre>
                <pre>
                  <code>{"    virarEsquerda();"}</code>
                </pre>
                <pre>
                  <code className="text-warning">
                    {"  } else if (leituraDir < limiar) {"}
                  </code>
                </pre>
                <pre>
                  <code>{"    virarDireita();"}</code>
                </pre>
                <pre>
                  <code className="text-error">{"  } else {"}</code>
                </pre>
                <pre>
                  <code>{"    parar();"}</code>
                </pre>
                <pre>
                  <code>{"  }"}</code>
                </pre>
                <pre>
                  <code>{"}"}</code>
                </pre>
                <pre>
                  <code>{""}</code>
                </pre>
                <pre data-prefix=">">
                  <code>
                    {"// Funções de movimento (frente, virarEsquerda, etc.)"}
                  </code>
                </pre>
              </div>
            ),
          },
          {
            id: "lp5",
            title: "Observação Importante",
            content: (
              <p>
                A <strong>calibração</strong> do <code>TRESHOLD</code> (limiar)
                e das velocidades dos motores é chave para o bom desempenho. Um
                código bem ajustado permite que o robô siga a linha de forma
                suave e rápida.
              </p>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "pensamento-computacional",
        id: 32,
        title: "Pensamento Computacional no Projeto",
        image: <></>,
        content: [
          {
            id: "pc1",
            title: "O que é?",
            content: (
              <p>
                O pensamento computacional é a habilidade de resolver problemas
                de forma lógica e estruturada. O projeto do seguidor de linha é
                um excelente exercício para desenvolver seus quatro pilares:
              </p>
            ),
          },
          {
            id: "pc2",
            title: "Decomposição",
            content: (
              <div>
                <p>
                  <strong>O que é?</strong> Dividir um problema grande em partes
                  menores e mais fáceis de resolver.
                </p>
                <p>
                  <strong>Aplicação:</strong> Dividir o projeto em tarefas como
                  montar o chassi, conectar sensores, programar motores e
                  desenvolver a lógica de decisão.
                </p>
              </div>
            ),
          },
          {
            id: "pc3",
            title: "Reconhecimento de Padrões",
            content: (
              <div>
                <p>
                  <strong>O que é?</strong> Identificar semelhanças e repetições
                  que ajudam a prever comportamentos.
                </p>
                <p>
                  <strong>Aplicação:</strong> Perceber que certas leituras dos
                  sensores sempre correspondem às mesmas ações (ex: sensor
                  direito fora da linha → virar à direita).
                </p>
              </div>
            ),
          },
          {
            id: "pc4",
            title: "Abstração",
            content: (
              <div>
                <p>
                  <strong>O que é?</strong> Filtrar os detalhes irrelevantes e
                  focar no essencial.
                </p>
                <p>
                  <strong>Aplicação:</strong> Usar um valor numérico simples (
                  <code>leitura {"<"} 500</code>) para representar &quot;ver a
                  linha&quot;, sem precisar entender toda a física da reflexão
                  da luz.
                </p>
              </div>
            ),
          },
          {
            id: "pc5",
            title: "Design de Algoritmos",
            content: (
              <div>
                <p>
                  <strong>O que é?</strong> Criar um passo a passo (uma receita)
                  para resolver cada subproblema.
                </p>
                <p>
                  <strong>Aplicação:</strong> A função <code>loop()</code> é o
                  algoritmo principal que define a sequência de ações: ler,
                  comparar e executar.
                </p>
              </div>
            ),
          },
        ],
        subtitles: [],
      },
      {
        slug: "exercicios-interativos",
        id: 33,
        title: "Exercícios",
        image: <></>,
        content: [
          {
            id: "quiz",
            title: "Teste seu conhecimento",
            content: (() => {
              // --- React Component for the Interactive Quiz ---
              const { useState } = React;

              const InteractiveQuiz = () => {
                // --- State Management ---
                const [answers, setAnswers] = useState({
                  q1: { f1: "", f2: "", f3: "", f4: "" },
                  q2: "",
                  q3: { b1: "", b2: "", b3: "" },
                  q4: "",
                });

                const [feedback, setFeedback] = useState({
                  q1: null,
                  q2: null,
                  q3: null,
                  q4: null,
                });

                // --- Correct Answers ---
                const correctAnswers = {
                  q1: { f1: "A", f2: "C", f3: "B", f4: "D" },
                  q2: "b",
                  q3: {
                    b1: "microcontrolador",
                    b2: "driver de motor",
                    b3: "motores DC",
                  },
                  q4: "b",
                };

                // --- Answer Checking Logic ---
                interface CheckAnswer {
                  (question: keyof Answers, currentAnswers: Answers): void;
                }

                const checkAnswer: CheckAnswer = (question, currentAnswers) => {
                  let isCorrect = false;
                  let isComplete = false;

                  if (question === "q1" || question === "q3") {
                    isCorrect =
                      JSON.stringify(currentAnswers[question]) ===
                      JSON.stringify(correctAnswers[question]);
                    isComplete = Object.values(currentAnswers[question]).every(
                      (val) => val !== ""
                    );
                  } else {
                    isCorrect =
                      currentAnswers[question] === correctAnswers[question];
                    isComplete = currentAnswers[question] !== "";
                  }

                  if (isComplete) {
                    setFeedback((prev) => ({
                      ...prev,
                      [question]: isCorrect ? "correct" : "incorrect",
                    }));
                  } else {
                    setFeedback((prev) => ({ ...prev, [question]: null }));
                  }
                };

                // --- Event Handlers ---
                interface Q1Answers {
                  f1: string;
                  f2: string;
                  f3: string;
                  f4: string;
                }

                interface Q3Answers {
                  b1: string;
                  b2: string;
                  b3: string;
                }

                interface Answers {
                  q1: Q1Answers;
                  q2: string;
                  q3: Q3Answers;
                  q4: string;
                }

                const handleQ1Change = (
                  field: keyof Q1Answers,
                  value: string
                ) => {
                  const newQ1Answers: Q1Answers = {
                    ...answers.q1,
                    [field]: value,
                  };
                  const newAnswers: Answers = { ...answers, q1: newQ1Answers };
                  setAnswers(newAnswers);
                  checkAnswer("q1", newAnswers);
                };

                interface HandleSelectChange {
                  (question: keyof Answers, value: string): void;
                }

                const handleSelectChange: HandleSelectChange = (
                  question,
                  value
                ) => {
                  const newAnswers: Answers = { ...answers, [question]: value };
                  setAnswers(newAnswers);
                  checkAnswer(question, newAnswers);
                };

                interface Q3Blank {
                  b1: string;
                  b2: string;
                  b3: string;
                }
                type Q3BlankKey = keyof Q3Blank;

                const handleQ3Change = (
                  blank: Q3BlankKey,
                  value: string
                ): void => {
                  const newQ3Answers: Q3Blank = {
                    ...answers.q3,
                    [blank]: value,
                  };
                  const newAnswers: Answers = { ...answers, q3: newQ3Answers };
                  setAnswers(newAnswers);
                  checkAnswer("q3", newAnswers);
                };

                // --- Helper for Styling ---
                interface FeedbackStatusMap {
                  q1: "correct" | "incorrect" | null;
                  q2: "correct" | "incorrect" | null;
                  q3: "correct" | "incorrect" | null;
                  q4: "correct" | "incorrect" | null;
                }

                type FeedbackStatus =
                  FeedbackStatusMap[keyof FeedbackStatusMap];

                const getFeedbackClasses = (status: FeedbackStatus): string => {
                  if (status === "correct") return "border-green-500 ";
                  if (status === "incorrect") return "border-red-500 ";
                  return "border-gray-200";
                };

                const getOptionClasses = (
                  question: keyof typeof answers,
                  option: string
                ): string => {
                  const baseClasses =
                    "p-3 border-2 rounded-lg cursor-pointer transition-all hover:bg-foregroundLightMode dark:hover:bg-foregroundDarkMode";
                  const isSelected = answers[question] === option;
                  if (!isSelected) return baseClasses;

                  const status = feedback[question];
                  if (status === "correct")
                    return `${baseClasses} border-green-500`;
                  if (status === "incorrect")
                    return `${baseClasses} border-red-500`;
                  return `${baseClasses} border-blue-500`;
                };

                // --- JSX ---
                return (
                  <div className="space-y-8">
                    {/* --- Question 1 --- */}
                    <div
                      className={`p-4 border-2 rounded-lg ${getFeedbackClasses(
                        feedback.q1
                      )}`}
                    >
                      <h4 className="font-semibold mb-3">
                        1) Associe os componentes às suas funções:
                      </h4>
                      <div className="space-y-3">
                        {[
                          { func: "Detecta a linha no chão", key: "f1" },
                          { func: "Fornece energia ao robô", key: "f2" },
                          {
                            func: "Controla a velocidade e sentido dos motores",
                            key: "f3",
                          },
                          {
                            func: "Processa os dados e toma decisões",
                            key: "f4",
                          },
                        ].map((item) => (
                          <div
                            key={item.key}
                            className="flex items-center justify-between"
                          >
                            <span>{item.func}</span>
                            <select
                              onChange={(e) =>
                                handleQ1Change(
                                  item.key as keyof Q1Answers,
                                  e.target.value
                                )
                              }
                              value={answers.q1[item.key as keyof Q1Answers]}
                              className="p-2 border rounded-md bg-backgroundLightMode dark:bg-backgroundDarkMode"
                            >
                              <option value="">Selecione</option>
                              <option value="A">(A) Sensor IR</option>
                              <option value="B">(B) Driver de Motor</option>
                              <option value="C">(C) Bateria</option>
                              <option value="D">(D) Microcontrolador</option>
                            </select>
                          </div>
                        ))}
                      </div>
                      {feedback.q1 === "correct" && (
                        <p className="text-green-600 mt-2">
                          Correto! A sequência é A, C, B, D.
                        </p>
                      )}
                      {feedback.q1 === "incorrect" && (
                        <p className="text-red-600 mt-2">
                          Incorreto. Tente novamente.
                        </p>
                      )}
                    </div>

                    {/* --- Question 2 --- */}
                    <div
                      className={`p-4 border-2 rounded-lg ${getFeedbackClasses(
                        feedback.q2
                      )}`}
                    >
                      <h4 className="font-semibold mb-3">
                        2) Sobre os sensores IR, marque a alternativa correta:
                      </h4>
                      <div className="space-y-2">
                        <div
                          onClick={() => handleSelectChange("q2", "a")}
                          className={getOptionClasses("q2", "a")}
                        >
                          {" "}
                          (a) Detectam obstáculos no caminho do robô.
                        </div>
                        <div
                          onClick={() => handleSelectChange("q2", "b")}
                          className={getOptionClasses("q2", "b")}
                        >
                          {" "}
                          (b) Detectam diferenças na reflexão da luz entre
                          superfícies claras e escuras.
                        </div>
                        <div
                          onClick={() => handleSelectChange("q2", "c")}
                          className={getOptionClasses("q2", "c")}
                        >
                          {" "}
                          (c) São usados para controlar a velocidade dos
                          motores.
                        </div>
                        <div
                          onClick={() => handleSelectChange("q2", "d")}
                          className={getOptionClasses("q2", "d")}
                        >
                          {" "}
                          (d) Servem para alimentar o robô com energia.
                        </div>
                      </div>
                      {feedback.q2 === "correct" && (
                        <p className="text-green-600 mt-2">
                          Correto! Os sensores IR funcionam pela reflexão da
                          luz.
                        </p>
                      )}
                      {feedback.q2 === "incorrect" && (
                        <p className="text-red-600 mt-2">
                          Incorreto. Pense na função principal dos
                          &quot;olhos&quot; do robô.
                        </p>
                      )}
                    </div>

                    {/* --- Question 3 --- */}
                    <div
                      className={`p-4 border-2 rounded-lg ${getFeedbackClasses(
                        feedback.q3
                      )}`}
                    >
                      <h4 className="font-semibold mb-3">
                        3) Complete as lacunas:
                      </h4>
                      <p className="text-lg leading-relaxed">
                        O{" "}
                        <select
                          onChange={(e) => handleQ3Change("b1", e.target.value)}
                          value={answers.q3.b1}
                          className="p-1 border rounded-md bg-backgroundLightMode dark:bg-backgroundDarkMode"
                        >
                          <option value="">_________</option>
                          <option value="motor">motor</option>
                          <option value="sensor">sensor</option>
                          <option value="microcontrolador">
                            microcontrolador
                          </option>
                          <option value="bateria">bateria</option>
                        </select>{" "}
                        interpreta os sinais dos sensores e envia comandos para
                        o{" "}
                        <select
                          onChange={(e) => handleQ3Change("b2", e.target.value)}
                          value={answers.q3.b2}
                          className="p-1 border rounded-md bg-backgroundLightMode dark:bg-backgroundDarkMode"
                        >
                          <option value="">_________</option>
                          <option value="bateria">bateria</option>
                          <option value="motor">motor</option>
                          <option value="driver de motor">
                            driver de motor
                          </option>
                          <option value="sensor">sensor</option>
                        </select>
                        , que controla a alimentação dos{" "}
                        <select
                          onChange={(e) => handleQ3Change("b3", e.target.value)}
                          value={answers.q3.b3}
                          className="p-1 border rounded-md bg-backgroundLightMode dark:bg-backgroundDarkMode"
                        >
                          <option value="">_________</option>
                          <option value="microcontroladores">
                            microcontroladores
                          </option>
                          <option value="driver">driver</option>
                          <option value="motores DC">motores DC</option>
                          <option value="chassi">chassi</option>
                        </select>
                        .
                      </p>
                      {feedback.q3 === "correct" && (
                        <p className="text-green-600 mt-2">
                          Perfeito! A sequência está correta.
                        </p>
                      )}
                      {feedback.q3 === "incorrect" && (
                        <p className="text-red-600 mt-2">
                          Incorreto. Reveja o fluxo de comando: Cérebro →
                          Interface → Músculos.
                        </p>
                      )}
                    </div>

                    {/* --- Question 4 --- */}
                    <div
                      className={`p-4 border-2 rounded-lg ${getFeedbackClasses(
                        feedback.q4
                      )}`}
                    >
                      <h4 className="font-semibold mb-3">
                        4) Quais componentes ficam na base (inferior) do robô
                        para detectar a linha?
                      </h4>
                      <div className="space-y-2">
                        <div
                          onClick={() => handleSelectChange("q4", "a")}
                          className={getOptionClasses("q4", "a")}
                        >
                          {" "}
                          (a) Motores DC
                        </div>
                        <div
                          onClick={() => handleSelectChange("q4", "b")}
                          className={getOptionClasses("q4", "b")}
                        >
                          {" "}
                          (b) Sensores infravermelhos (IR)
                        </div>
                        <div
                          onClick={() => handleSelectChange("q4", "c")}
                          className={getOptionClasses("q4", "c")}
                        >
                          {" "}
                          (c) Driver de motor
                        </div>
                        <div
                          onClick={() => handleSelectChange("q4", "d")}
                          className={getOptionClasses("q4", "d")}
                        >
                          {" "}
                          (d) Bateria
                        </div>
                      </div>
                      {feedback.q4 === "correct" && (
                        <p className="text-green-600 mt-2">
                          Exato! Os sensores precisam estar apontados para o
                          chão.
                        </p>
                      )}
                      {feedback.q4 === "incorrect" && (
                        <p className="text-red-600 mt-2">
                          Incorreto. Qual componente precisa &quot;ver&quot; a
                          linha?
                        </p>
                      )}
                    </div>
                  </div>
                );
              };

              return <InteractiveQuiz />;
            })(),
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
    image: (
      <img
        className="h-64 sm:w-80 w-full"
        src="/arduino_code.jpg"
        alt="arduino"
      />
    ),
    content: [
      {
        id: "1",
        title: "Objetivo da Aula",
        content: (
          <p>
            Entendendo o Código e Testando os Robôs: Compreender os principais
            blocos do código do robô seguidor de linha e aplicar esse
            entendimento em testes práticos na pista, analisando o comportamento
            real do robô em função das leituras dos sensores.
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
                <li>
                  Mapeamento de pinos com <code>#define</code> e{" "}
                  <code>const int</code>
                </li>
                <li>Relação entre código e hardware</li>
              </ul>
            ),
          },
          {
            id: "2",
            title: "Funções Principais",
            content: (
              <ul className="list-disc ml-6">
                <li>
                  <code>setup()</code>: inicialização
                </li>
                <li>
                  <code>loop()</code>: execução contínua
                </li>
                <li>
                  <code>readSensors()</code>: captação da linha
                </li>
                <li>
                  <code>followLineMEF()</code>: decisão de movimento
                </li>
                <li>
                  <code>motorOption()</code> / <code>motorControl()</code>:
                  controle dos motores
                </li>
                <li>
                  <code>motorStop()</code>: limite de funcionamento
                </li>
                <li>
                  <code>ledControl()</code> / <code>rgbControl()</code>: estados
                  visuais
                </li>
              </ul>
            ),
          },
          {
            id: "3",
            title: "Casos Comuns",
            content: (
              <p>
                Exemplo: quando sensores leem <code>001100</code> ou{" "}
                <code>000110</code>, mostrar no quadro o que isso significa e
                como o robô se comporta com base nisso.
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
              <p>
                Relacionar o comportamento observado na pista com o que foi
                discutido no código.
              </p>
            ),
          },
          {
            id: "5",
            title: "Atividades Práticas",
            content: (
              <ul className="list-disc ml-6">
                <li>Ligar e testar robôs individualmente</li>
                <li>Verificar sensores e motores</li>
                <li>
                  Colocar o robô na pista: segue linha? responde a curvas? perde
                  o trajeto?
                </li>
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
                <li>
                  Ideias para melhorar o código (ex: cruzamentos, semáforos)
                </li>
                <li>
                  Preparação para a competição: o que observar na próxima aula?
                </li>
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
    image: (
      <img className="h-64 sm:w-80 w-full" src="/track.jpeg" alt="arduino" />
    ),
    content: [
      {
        id: "1",
        title: "Objetivo da Aula",
        content: (
          <p>
            Colocar os robôs em prova numa pista desafiadora. Promover o
            trabalho em equipe, solução de problemas e espírito colaborativo por
            meio de uma competição.
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
                <li>
                  Formação das equipes (se ainda não tiverem sido formadas)
                </li>
                <li>Explicação das regras da competição</li>
                <li>Apresentação dos robôs e estratégias</li>
                <li>Corridas eliminatórias ou por pontos</li>
                <li>Premiação simbólica ou reconhecimento das equipes</li>
                <li>
                  Roda final de conversa: aprendizados, dificuldades, sugestões
                </li>
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
                <li>
                  Prêmios simbólicos (medalhas, certificados, doces, etc.)
                </li>
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
