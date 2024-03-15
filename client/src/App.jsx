import React, { useState, useEffect } from "react";
import axios from "axios";
import ClientSelector from "./components/ClientSelector";
// import VisaSelector from "./components/VisaSelector";
import DownloadButton from "./components/DownloadButton";

const App = () => {
  const [name, setName] = useState(""); //Armazena o nome do cliente selecionado
  const [brand, setBrand] = useState("");
  const [type, setType] = useState("");
  const [period, setPeriod] = useState({ from: "", to: "" });
  const [clientContracts, setClientContracts] = useState([]); //Armazena array de contratos

  //selectedClient armazena o retorno no metodo find que é o nome do cliente
  //Quando é selecionado um cliente, o metodo find procura ele na resposta que vem da API
  const selectedClient = clientContracts.find((client) => client.name === name);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:5184/merchant");
        console.log(response);
        console.log(response.data);
        setClientContracts(response.data); //Salva os dados recebidos da API
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Dados enviados com sucesso!");
    window.location.reload();

    const formData = {
      name: name,
      brand: brand,
      type: type,
      period: period,
    };
    console.log("Form data:", formData);

    axios
      .post("http://localhost:5184/register", formData)
      .then((response) => {
        console.log("response: " + response);
      })
      .catch((error) => {
        console.error("erro: " + error);
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          {/* <ClientSelector clientContracts={clientContracts} /> */}

          <div>
            <h3>Nome do Cliente:</h3>
            <label htmlFor="name-select">Nome cliente: </label>

            <select
              id="name-select"
              value={name}
              onChange={(e) => setName(e.target.value)}
            >
              <option>Selecione um cliente...</option>{" "}
              {clientContracts.map((client) => (
                <option key={client.id} value={client.name}>
                  {client.name}
                </option>
              ))}
            </select>
          </div>
          {/* --------------------- Contrato Visa ---------------------- */}
          <div>
            <h3>Contrato:</h3>
            <label htmlFor="visa-select">Visa: </label>
            <select
              id="visa-select"
              disabled={!name || selectedClient.visa === null}
              onChange={(e) => setBrand(e.target.value)}
              //fica desabilitado se nenhum nome de cliente for selecionado
              //ou se o cliente selecionado não tiver um contrato Visa.
            >
              <option>Selecione</option>
              {/* verifica se name é verdadeiro (ou seja, não é nulo ou vazio) */}
              {name &&
                clientContracts // Filtra dados que vem da API, e add em 'client' o nome.
                  .filter((client) => client.name === name)
                  //Retorna um [] c/ todos name da API q são iguais a selecionado na tela
                  .map((client) => (
                    // Cada iteração do .map() cria um novo elemento <option> (lista Visa).
                    <option key={client.id} value={client.visa}>
                      {client.visa}
                    </option>
                  ))}
            </select>
          </div>
          {/* --------------------- Contrato Master --------------------- */}
          <div>
            <label htmlFor="master-select">Master: </label>
            <select
              id="master-select"
              disabled={!name || selectedClient.master === null}
              onChange={(e) => setBrand(e.target.value)}
            >
              <option value="">Selecione</option>
              {name &&
                clientContracts
                  .filter((client) => client.name === name)
                  .map((client) => (
                    <option key={client.id} value={client.master}>
                      {client.master}
                    </option>
                  ))}
            </select>
          </div>
        </div>

        {/* <div>
          <h3>Bandeira: </h3>
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
        </div> */}
        <div>
          <div>
            <h3>Tipo de Relatório:</h3>
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
            <button type="submit" title="Clique aqui para enviar">
              Enviar
            </button>
          </div>
        </div>
      </form>
      <DownloadButton />
    </>
  );
};

export default App;
