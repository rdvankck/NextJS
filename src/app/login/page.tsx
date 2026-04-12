"use client";

import { signIn } from "next-auth/react";

export default function LoginPage() {
  return (
    <div style={{ padding: "2rem", maxWidth: "400px", margin: "0 auto" }}>
      <h1>Login</h1>
      <button
        onClick={() => signIn("github")}
        style={{ padding: "0.75rem 1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}
      >
        Sign in with GitHub
      </button>
    </div>
  );
}
