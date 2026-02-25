"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      alert("Erreur : " + error.message);
    } else {
     window.location.href = "/dashboard";
    }

    setLoading(false);
  }

  async function handleSignUp() {
    setLoading(true);

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      alert("Erreur : " + error.message);
    } else {
      alert("Compte créé !");
    }

    setLoading(false);
  }

  return (
    <main style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Connexion</h1>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ display: "block", margin: "10px auto", padding: "8px" }}
      />

      <button
        onClick={handleLogin}
        disabled={loading}
        style={{ marginTop: "15px", padding: "10px 20px" }}
      >
        {loading ? "Connexion..." : "Se connecter"}
      </button>

      <button
        onClick={handleSignUp}
        disabled={loading}
        style={{ marginTop: "10px", padding: "10px 20px" }}
      >
        Créer un compte
      </button>
    </main>
  );
}
