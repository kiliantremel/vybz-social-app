export default function Home() {
  return (
    <div style={{
      background: "#0f0f0f",
      color: "white",
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1>🔥 VYBZ Social App</h1>
      <p>Ton réseau social nouvelle génération</p>
    </div>
  );
}
import Link from "next/link";

<Link href="/login">
  <button style={{ marginTop: "20px" }}>
    Se connecter
  </button>
</Link>
