import Link from "next/link";

export default function Home() {
  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>🔥 VYBZ Social App</h1>

      <p>Bienvenue sur ton application sociale !</p>

      <Link href="/login">
        <button style={{ marginTop: "20px", padding: "10px 20px" }}>
          Se connecter
        </button>
      </Link>
    </main>
  );
}
