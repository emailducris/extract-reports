const express = require("express");
const app = express();
const path = require("path"); // Módulo para lidar com caminhos de arquivos
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "cristhiano.enchaki",
  password: "654321",
  database: "ReportDB",
});

app.use(cors());
app.use(express.json());

app.post("/register", (req, res) => {
  const { name, brand, type, period } = req.body;
  const { from, to } = period;

  let SQL =
    "INSERT INTO client ( name, brand, type, date_of, date_until ) VALUES (?,?,?,?,?)";

  db.query(SQL, [name, brand, type, from, to], (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

// Rota para download
app.get("/download", (req, res) => {
  const filePath = path.join(__dirname, "texto.txt"); // Caminho completo para o arquivo texto.txt
  res.download(filePath, "texto.txt"); // Envia o arquivo como um anexo com o nome "texto.txt"
});

app.get("/merchant", (req, res) => {
  let SQL = "SELECT * FROM merchant2";

  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else return res.send(result);
    // console.log(result);
  });
  // console.log(result);
});

// Inicie o servidor na porta 5184
app.listen(5184, () => {
  console.log("Servidor rodando: http://localhost:5184");
});
