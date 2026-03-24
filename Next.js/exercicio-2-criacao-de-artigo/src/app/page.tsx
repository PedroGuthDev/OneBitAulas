import Image from "next/image";
import styles from "./page.module.css";
import image0 from "../images/images.jpeg";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpg";
import localFont from "next/font/local";

const playfairDisplay = localFont({
  src: "../fonts/PlayfairDisplay-VariableFont_wght.ttf",
  variable: "--font-playfair-display",
  weight: "300 400 500 600 700 800 900",
});

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 className={playfairDisplay.className}>
          O Fascinante Planeta Saturno
        </h1>
        <Image src={image0} alt="Saturno" width={400} height={225} />
        <br />
        <p>
          Saturno é o sexto planeta a partir do Sol e o segundo maior do Sistema
          Solar, famoso por seus impressionantes anéis compostos principalmente
          de gelo e rocha. Com um diâmetro de cerca de 120.536 quilômetros, ele
          é um gigante gasoso dominado por hidrogênio e hélio. Sua atmosfera é
          caracterizada por faixas de nuvens coloridas e ventos que podem
          atingir velocidades supersônicas. Saturno possui um sistema de anéis
          complexo e belíssimo, que se estende por centenas de milhares de
          quilômetros, mas tem apenas alguns metros de espessura. Além dos
          anéis, o planeta tem mais de 80 luas conhecidas, sendo Titã a maior e
          mais intrigante, com sua atmosfera densa e lagos de metano líquido. A
          exploração de Saturno tem sido realizada por missões espaciais como a
          Voyager e a Cassini, que nos forneceram imagens incríveis e dados
          valiosos sobre sua atmosfera, anéis e luas. Saturno continua a ser um
          dos objetos mais fascinantes do nosso sistema solar, inspirando
          cientistas e entusiastas do espaço em todo o mundo.
        </p>
        <h2 className={playfairDisplay.className}>Anéis</h2>
        <p>
          Os anéis de Saturno são uma das características mais distintivas do
          planeta. Eles são compostos principalmente de partículas de gelo e
          rocha, variando em tamanho desde grãos de poeira até grandes
          pedregulhos. Os anéis se estendem por centenas de milhares de
          quilômetros, mas têm apenas alguns metros de espessura. Eles são
          divididos em vários grupos principais, separados por lacunas, sendo a
          mais famosa a Divisão de Cassini. Acredita-se que os anéis tenham se
          formado a partir de luas que se despedaçaram ou de material que não
          conseguiu se aglomerar para formar uma lua. A exploração de Saturno
          tem revelado muitos detalhes sobre a estrutura e composição dos anéis,
          e os cientistas continuam a estudar como eles se formaram e evoluíram
          ao longo do tempo.
        </p>
        <h2 className={playfairDisplay.className}>Luas</h2>
        <p>
          Saturno possui mais de 80 luas conhecidas, sendo Titã a maior e mais
          intrigante. Titã é a única lua do Sistema Solar com uma atmosfera
          densa e lagos de metano líquido em sua superfície. A exploração de
          Saturno tem revelado muitos detalhes sobre a estrutura e composição
          dos anéis, e os cientistas continuam a estudar como eles se formaram e
          evoluíram ao longo do tempo.
        </p>
        <Image src={image1} alt="Saturno" width={400} height={225} />
        <h2 className={playfairDisplay.className}>Luas</h2>
        <p>
          Saturno possui mais de 80 luas conhecidas, sendo Titã a maior e mais
          intrigante. Titã é a única lua do Sistema Solar com uma atmosfera
          densa e lagos de metano líquido em sua superfície. A exploração de
          Saturno tem revelado muitos detalhes sobre a estrutura e composição
          dos anéis, e os cientistas continuam a estudar como eles se formaram e
          evoluíram ao longo do tempo.
        </p>
        <Image src={image2} alt="Saturno" width={400} height={225} />
      </main>
    </div>
  );
}
