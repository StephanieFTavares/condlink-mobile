import React from "react";
import "../styles/home.css";

export default function Home() {
  return (
    <div className="home-container">
      
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          {/* TODO: conectar com backend para carregar logo dinâmica */}
          <h2>CONDLINK</h2>
        </div>

        <ul className="nav-links">
          {/* TODO: rotas podem vir de configuração backend */}
          <li>Sobre</li>
          <li>O que fazemos</li>
          <li>Solução</li>
          <li>Planos</li>
        </ul>

        <button className="btn-contato">
          {/* TODO: integrar com página de contato ou API */}
          Contato →
        </button>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">

        <div className="hero-text">
          {/* TODO: conteúdo pode vir de CMS ou API */}
          <h1>
            O melhor <br />
            <span>sistema de gestão</span> <br />
            para o seu Condomínio
          </h1>

          <p>
            Plataforma completa para comunicação, gestão e organização
            do seu condomínio de forma simples e eficiente.
          </p>

          <button className="btn-start">
            {/* TODO: direcionar para tela de login */}
            Começar agora
          </button>
        </div>

        <div className="hero-image">
          {/* TODO: imagem pode vir de CDN ou backend */}
          <img
            src="https://images.unsplash.com/photo-1556155092-490a1ba16284"
            alt="App Condlink"
          />
        </div>

      </section>
    </div>
  );
}