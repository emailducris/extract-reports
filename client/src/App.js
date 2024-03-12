import React, { useState } from "react";
import axios from "axios";
import DownloadButton from "./components/DownloadButton";

const App = () => {
  const [name, setName] = useState("");
  const [brand, setBrand] = useState([]);
  const [type, setType] = useState([]);
  const [period, setPeriod] = useState({ from: "", to: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === undefined) {
      console.error("Name variable is undefined");
      return;
    }
    const formData = {
      name: name,
      brand: brand,
      type: type,
      period: period,
    };
    console.log("Form data:", formData);
    axios
      .post("/register", formData)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
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
      <h3>Bandeira: </h3>
      <div>
        <label htmlFor="brand-report">
          <input
            type="checkbox"
            id="detailed-report"
            value="visa"
            onChange={(e) =>
              setBrand(
                e.target.checked
                  ? [...brand, "visa"]
                  : brand.filter((brand) => brand !== "visa")
              )
            }
          />{" "}
          Visa
        </label>
        <label htmlFor="brand-report">
          <input
            type="checkbox"
            id="usage-report"
            value="master"
            onChange={(e) =>
              setBrand(
                e.target.checked
                  ? [...brand, "master"]
                  : brand.filter((brand) => brand !== "master")
              )
            }
          />{" "}
          Master
        </label>
      </div>
      <h3>Tipo de Relatório:</h3>
      <div>
        <label htmlFor="type-report">
          <input
            type="checkbox"
            id="detailed-report"
            value="detailed"
            onChange={(e) =>
              setType(
                e.target.checked
                  ? [...type, "detailed"]
                  : type.filter((type) => type !== "detailed")
              )
            }
          />{" "}
          Relatório Detalhado
        </label>
        <label htmlFor="type-report">
          <input
            type="checkbox"
            id="usage-report"
            value="usage"
            onChange={(e) =>
              setType(
                e.target.checked
                  ? [...type, "usage"]
                  : type.filter((type) => type !== "usage")
              )
            }
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
        <DownloadButton />
      </div>
    </form>
  );
};

export default App;
