import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    window.location.href = "http://localhost:5174/download";
  };

  return <button onClick={handleDownload}>Baixar Arquivo</button>;
};

export default DownloadButton;
