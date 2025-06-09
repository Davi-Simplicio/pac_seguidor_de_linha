export const subjects: Subject[] = [
  {
    slug: "fundamentos",
    id: 1,
    title: "Fundamentos",
    image: <div className="h-64 sm:w-80 w-full bg-blue-500" />,
    content: [
      {
        id: "1",
        title: "Introdução",
        content: (
          <div className="space-y-2">
            <p>
              <strong>Fundamentos de Eletrônica, Arduino e Primeira Programação:</strong> Seja bem-vindo à primeira aula do nosso minicurso sobre <em>Robôs Seguidores de Linha com Arduino</em>!
            </p>
            <p>
              Neste encontro, daremos os primeiros passos no mundo da eletrônica e da programação, utilizando uma das plataformas mais acessíveis e didáticas: o <code>Arduino</code>.
            </p>
          </div>
        ),
      },
      {
        id: "2",
        title: "Objetivo da Aula",
        content: (
          <ul className="list-disc ml-6 space-y-1">
            <li>Mostrar que aprender tecnologia pode ser simples, prático e divertido.</li>
            <li>Explicar os conceitos básicos de eletrônica: protoboard, resistores e LEDs.</li>
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
                O <strong>Arduino</strong> é uma plataforma criada para facilitar o aprendizado de <em>eletrônica</em> e <em>programação</em>, funcionando como um mini computador que pode controlar diversos dispositivos.
              </p>
            ),
          },
          {
            id: "2",
            title: "Vantagens",
            content: (
              <p>
                Barato, fácil de usar e com código aberto, permite modificações e compartilhamento de projetos, tornando-o acessível a todos.
              </p>
            ),
          },
          {
            id: "3",
            title: "Popularidade",
            content: (
              <p>
                Possui uma enorme comunidade global com muitos recursos didáticos, sendo amplamente usado em escolas, universidades e oficinas.
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
            id: "1",
            title: "Funcionamento",
            content: (
              <p>
                Utiliza sensores para detectar uma linha no chão e ajustar o movimento com base nessas leituras, com controle feito por um <code>Arduino</code>.
              </p>
            ),
          },
          {
            id: "2",
            title: "Aplicações",
            content: (
              <p>
                Excelente projeto para iniciantes em robótica, com aplicação em feiras de ciências e competições educacionais.
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
            id: "1",
            title: "Definição",
            content: (
              <p>
                Placa usada para montar circuitos sem necessidade de solda. Ideal para prototipagem rápida.
              </p>
            ),
          },
          {
            id: "2",
            title: "Funcionamento",
            content: (
              <ul className="list-disc ml-6">
                <li>Furos interligados por trilhas internas.</li>
                <li>Áreas centrais para componentes e laterais para alimentação.</li>
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
            id: "1",
            title: "Resistores",
            content: (
              <p>
                Componentes que <strong>limitam a corrente elétrica</strong> para proteger dispositivos. Possuem faixas coloridas que indicam seu valor em <em>Ohms (Ω)</em>.
              </p>
            ),
          },
          {
            id: "2",
            title: "LEDs",
            content: (
              <div className="space-y-1">
                <p><strong>LED</strong> = Diodo Emissor de Luz. Tem polaridade definida:</p>
                <ul className="list-disc ml-6">
                  <li><strong>Perna maior:</strong> positivo (ânodo)</li>
                  <li><strong>Perna menor:</strong> negativo (cátodo)</li>
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
            id: "1",
            title: "Funções Principais",
            content: (
              <div className="mockup-code">
                <pre data-prefix="$"><code>void setup() &#123;</code></pre>
                <pre data-prefix="~"><code>  // Configuração inicial</code></pre>
                <pre data-prefix="$"><code>&#125;</code></pre>
                <pre data-prefix="$"><code>void loop() &#123;</code></pre>
                <pre data-prefix="~"><code>  // Executado continuamente</code></pre>
                <pre data-prefix="$"><code>&#125;</code></pre>
              </div>
            ),
          },
          {
            id: "2",
            title: "Entradas e Saídas",
            content: (
              <ul className="list-disc ml-6">
                <li><code>pinMode()</code>: define o modo de um pino</li>
                <li><code>digitalRead()</code>: lê o valor de entrada</li>
                <li><code>digitalWrite()</code>: escreve valor de saída</li>
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
