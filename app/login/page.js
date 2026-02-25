"use client";

import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);

  function handleLogin() {
    setLoading(true);
    setTimeout(() => {
      alert("Connexion simulée !");
      setLoading(false);
    }, 1500);
  }

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Connexion</h1>

      <input
        type="email"
        placeholder="Email"
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{ marginTop: "15px", padding: "10px 20px" }}
      >
        {loading ? "Connexion..." : "Se connecter"}
      </button>
    </main>
  );
}
