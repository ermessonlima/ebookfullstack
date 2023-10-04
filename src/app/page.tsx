import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div
        style={{
          display: "flex",
          width: "100%",
          top: "0",
          left: "0",
          position: "absolute",
          bottom: "0",
          alignItems: "center",
        }}
      >
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >

          <span
            style={{
              fontSize: "2rem",
              marginBottom: "1rem",
            }}
          >
            Descubra o <strong>Caminho</strong>
            <br /> para se transformar no <strong>Dev Fullstack</strong>
            <br />
            que <strong>Todas as Empresas Desejam Contratar!</strong>
          </span>
          <a
            style={{
              backgroundColor: "#7FB902",
              minWidth: "30%",
              borderRadius: "10px",
              marginTop: "2rem",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "bold",
              padding: "1rem",
              textAlign: "center",
              justifyItems: "center",
              alignItems: "center",
            }}
            href="https://pay.kirvano.com/6e351937-c8a0-429b-972f-586c0b0e9e13"
            target="_blank"
          >
            Adquira seu guia para o Sucesso!
          </a>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "1rem",

            }}
          >
            <Image
              src="/capa.jpeg"
              width={300}
              height={500}
              alt="Picture of the author"
              style={{
                borderRadius: "5px",
                border: "1px solid #333333",
                boxShadow: "1px 1px 1px #999",

              }}
            />

          </div>
          <span
            style={{
              fontSize: "1rem",
              marginBottom: "1rem",
            }}
          >
            <p><strong style={{
              fontSize: "1.5rem",
              marginBottom: "1rem",
            }}>Quer se destacar no mundo da programação e não sabe por onde começar? Nosso e-book é a solução definitiva!</strong></p>

            <ul>
              <li>Comece entendendo se <strong>você realmente sabe estudar</strong> e descubra métodos que irão potencializar sua capacidade de aprendizado.</li>
              <li><strong>Concentração e Foco</strong> não são apenas palavras-chave; são os pilares do sucesso e da produtividade. Veja como desenvolvê-los.</li>
              <li>Entenda a importância do <strong>desenvolvimento de hábitos saudáveis</strong> para sua carreira  e saiba onde encontrar os melhores materiais para aprimorar suas habilidades.</li>
              <li>Mergulhe na <strong>Lógica de Programação</strong>, um capítulo dedicado a desvendar os principais conceitos, sugerir os melhores cursos e apresentar plataformas gratuitas para prática.</li>
              <li>Se atualize sobre as <strong>áreas de tecnologia em ascensão</strong> e prepare-se para embarcar na jornada para se tornar um desenvolvedor FullStack.</li>
            </ul>


          </span>
          <p><em>Este e-book não é apenas um guia, é um investimento para seu futuro profissional. Siga o caminho para o sucesso!</em></p>

        </div>


      </div>

    </main>
  );
}
