import React from "react";

const DownloadButton = () => {
  const handleDownload = () => {
    window.location.href = "http://localhost:3000/download";
  };

  return <button onClick={handleDownload}>Baixar Arquivo</button>;
};

export default DownloadButton;

// import React from "react";

// const DownloadButton = () => {
//   const handleDownload = () => {
//     window.location.href = "http://localhost:3000/download";
//   };

//   return <button onClick={handleDownload}>Baixar Arquivo</button>;
// };

// export default DownloadButton;
