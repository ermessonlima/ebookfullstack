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
            href="https://pay.kirvano.com/d18f0a8e-52a1-41c4-8c4c-b0a2be6d9ea8"
            target="_blank"
          >
            Adquira seu guia para o Sucesso!
          </a>





          <p style={{
            marginTop: "2rem",
          }}><em>Este e-book não é apenas um guia, é um investimento para seu futuro profissional. Siga o caminho para o sucesso!</em></p>

        </div>
        <div style={{
          width: "50%",
        }}>

        </div>


      </div>

    </main>
  );
}
