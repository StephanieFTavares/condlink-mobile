import { useState } from "react";
import "../styles/cadastro.css";

function Cadastro() {

  const [formData, setFormData] = useState({});

  const handleChange = (e) => {

    const { name, value, files } = e.target;

    setFormData({
      ...formData,
      [name]: files ? files[0] : value
    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log(formData);

    // TODO conectar backend

  };

  return (

    <div className="cadastro-page">

      {/* HEADER */}

      <header className="header">

        <div className="logo">

          <img src="/logo.png" alt="CondLink Logo" />

          <h2>CondLink</h2>

        </div>

      </header>


      {/* FORMULÁRIO */}

      <div className="form-container">

        <form className="cadastro-form" onSubmit={handleSubmit}>

          <h1>Cadastro de Morador</h1>


          {/* NOME */}

          <div className="section">

            <h3>Informações Básicas</h3>

            <input
              type="text"
              name="nome"
              placeholder="Nome completo"
              onChange={handleChange}
              required
            />

          </div>


          {/* DOCUMENTOS */}

          <div className="section">

            <h3>Dados Pessoais</h3>

            <div className="grid">

              <input
                type="text"
                name="cpf"
                placeholder="CPF"
                onChange={handleChange}
              />

              <input
                type="text"
                name="rg"
                placeholder="RG"
                onChange={handleChange}
              />

              <input
                type="tel"
                name="telefone"
                placeholder="Telefone"
                onChange={handleChange}
              />

              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChange}
              />

            </div>

          </div>


          {/* CONDOMINIO */}

          <div className="section">

            <h3>Dados do Condomínio</h3>

            <div className="grid">

              <input
                type="text"
                name="condominio"
                placeholder="Nome do Condomínio"
                onChange={handleChange}
              />

              <input
                type="text"
                name="torre"
                placeholder="Torre"
                onChange={handleChange}
              />

              <input
                type="text"
                name="apartamento"
                placeholder="Apartamento"
                onChange={handleChange}
              />

            </div>

          </div>


          {/* FOTO */}

          <div className="section">

            <h3>Foto do Morador</h3>

            <input
              type="file"
              name="foto"
              accept="image/*"
              onChange={handleChange}
            />

          </div>


          <button type="submit">Cadastrar</button>

        </form>

      </div>


      {/* FOOTER */}

      <footer className="footer">

        <p>© 2026 CondLink</p>

        <div className="social">

          <span>Instagram</span>
          <span>Facebook</span>
          <span>LinkedIn</span>

        </div>

        <p>contato@condlink.com</p>

      </footer>

    </div>

  );

}

export default Cadastro;