import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    window.location.href = "http://localhost:5184/download";
    alert("Download realizado com sucesso!");
    window.location.reload();
  };

  return (
    <div>
      <h3>Download do Arquivo</h3>
      <button onClick={handleDownload} title="Clique aqui para enviar">
        Baixar Arquivo
      </button>
    </div>
  );
};

export default DownloadButton;
