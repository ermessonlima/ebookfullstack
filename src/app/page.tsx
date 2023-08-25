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
            <br />
            <strong>Passo a Passo</strong> para se
            <br />
            Transformar no <strong>Dev Fullstack</strong>
            <br />
            que <strong>Todas as Empresas Desejam Contratar!</strong>
          </span>
          <button
            style={{
              backgroundColor: "#7FB902",
              minWidth: "30%",
              height: "50px",
              borderRadius: "10px",
              marginTop: "2rem",
              color: "#fff",
              fontSize: "1rem",
              fontWeight: "bold",
              padding: "0 1rem",
            }}
          >
            Adquira seu guia para o Sucesso!
          </button>
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
