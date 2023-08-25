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
        </div>
        <div
          style={{
            width: "50%",
          }}
        ></div>
      </div>
    </main>
  );
}
