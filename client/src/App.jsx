import React, { useState } from "react";
import axios from "axios";
import DownloadButton from "./components/DownloadButton";

const getClientContract = (clientName) => {
  switch (clientName) {
    case "clientA":
      return {
        visa: ["555", "888", "999"],
        master: ["222", "333", "444"],
      };
    case "clientB":
      return {
        visa: [],
        master: ["555", "666", "987", "152"],
      };
    case "clientC":
      return {
        visa: ["777"],
        master: [],
      };
    default:
      return {
        visa: [],
        master: [],
      };
  }
};

const App = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [period, setPeriod] = useState({ from: "", to: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      brand: brand,
      type: type,
      period: period,
    };
    console.log("Form data:", formData);

    axios
      .post("http://localhost:5174/register", formData)
      .then((response) => {
        console.log("response: " + response);
      })
      .catch((error) => {
        console.error("erro: " + error);
      });
  };
  const clientContract = getClientContract(name);

  // if (!Array.isArray(clientContract.visa)) {
  //   console.error("clientContract.visa is not an array");
  //   return;
  // }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <h3>Nome do Cliente:</h3>
          <label htmlFor="name-select"></label>
          <select
            id="name-select"
            value={name}
            onChange={(e) => setName(e.target.value)}
          >
            <option value="clientA">Cliente A</option>
            <option value="clientB">Cliente B</option>
            <option value="clientC">Cliente C</option>
          </select>
        </div>

        <h3>Contrato:</h3>

        <div>
          <label htmlFor="visa-select">Visa: </label>
          <select id="visa-select" disabled={clientContract.visa.length === 0}>
            <option value="">Selecione</option>

            {clientContract.visa.map((visa, index) => (
              <option key={index} value={visa}>
                {visa}
              </option>
            ))}
          </select>
        </div>

        <h3></h3>

        <div>
          <label htmlFor="master-select">Master: </label>
          <select
            id="master-select"
            disabled={clientContract.master.length === 0}
          >
            <option value="">Selecione</option>
            {clientContract.master.map((master, index) => (
              <option key={index} value={master}>
                {master}
              </option>
            ))}
          </select>
        </div>

        <div>
          {/* 
          <label htmlFor="celular-select">Celular: </label>
          <select
            id="celular-select"
            disabled={clientPhones.celular.length === 0}
          >
            <option value="">Selecione</option>
            {clientPhones.celular.map((celular, index) => (
              <option key={index} value={celular}>
                {celular}
              </option>
            ))}
          </select>
          */}
        </div>

        <h3>Bandeira: </h3>
        <div>
          <label htmlFor="brand-report">
            <input
              type="radio"
              id="visa"
              name="brand"
              value="visa"
              checked={brand === "visa"}
              onChange={(e) => setBrand(e.target.value)}
            />{" "}
            Visa
          </label>
          <label htmlFor="brand-report">
            <input
              type="radio"
              id="master"
              name="brand"
              value="master"
              checked={brand === "master"}
              onChange={(e) => setBrand(e.target.value)}
            />{" "}
            Master
          </label>
        </div>
        <h3>Tipo de Relatório:</h3>
        <div>
          <label htmlFor="type-report">
            <input
              type="radio"
              id="detailed-report"
              value="detailed"
              checked={type === "detailed"}
              onChange={(e) => setType(e.target.value)}
            />{" "}
            Relatório Detalhado
          </label>
          <label htmlFor="type-report">
            <input
              type="radio"
              id="usage-report"
              value="usage"
              checked={type === "usage"}
              onChange={(e) => setType(e.target.value)}
            />{" "}
            Relatório de Uso
          </label>
        </div>
        <div>
          <h3>Período:</h3>
          <label htmlFor="period-input">De: </label>
          <input
            id="period-input"
            type="date"
            value={period.from}
            onChange={(e) => setPeriod({ ...period, from: e.target.value })}
          />
          <label htmlFor="period-input">Até: </label>
          <input
            id="period-input"
            type="date"
            value={period.to}
            onChange={(e) => setPeriod({ ...period, to: e.target.value })}
          />
        </div>
        <div className="App">
          <h3>Download do Arquivo</h3>
          <button type="submit">Enviar</button>
        </div>
      </form>
      <DownloadButton />
    </>
  );
};

export default App;
