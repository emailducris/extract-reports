import React from "react";

const ClientSelector = ({ clientContracts, name, setName }) => {
  return (
    <div>
      <h3>Nome do Cliente:</h3>
      <label htmlFor="name-select">Nome cliente: </label>

      <select
        id="name-select"
        value={name}
        onChange={(e) => setName(e.target.value)}
      >
        <option>Selecione um cliente...</option>{" "}
        {/* Cada iteração do .map() cria um novo elemento <option>. (Lista nome) */}
        {clientContracts.map((client) => (
          <option key={client.id} value={client.name}>
            {client.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ClientSelector;
