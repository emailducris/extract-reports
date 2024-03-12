const express = require("express");
const app = express();
const path = require("path"); // Módulo para lidar com caminhos de arquivos
const mysql = require("mysql2");
const cors = require("cors");

// const db = mysql.createPool({
//   host: "localhost",
//   user: "root",
//   password: "123456",
//   database: "crudgames",
// });

const db = mysql.createPool({
  host: "localhost",
  user: "cristhiano.enchaki",
  password: "654321",
  database: "ReportDB",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { brand } = req.body;
  const { type } = req.body;
  const { date_of } = req.body;
  const { date_until } = req.body;

  let SQL =
    "INSERT INTO client ( name, brand, type, date_of, date_until ) VALUES (?,?,?,?,?)";

  db.query(SQL, [name, brand, type, date_of, date_until], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

// a rota para download
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "texto.txt"); // Caminho completo para o arquivo texto.txt
  res.download(filePath, "texto.txt"); // Envia o arquivo como um anexo com o nome "texto.txt"
});

// Inicie o servidor na porta 3000 - TEM QUE SER NA 3000
app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});
