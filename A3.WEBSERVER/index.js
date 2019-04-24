const express = require("express");
const path = require("path");
const cotacao = require("./cotacao");
const hbs = require("hbs")

const publicAssets = path.join(__dirname, "/public");
const viewsPath = path.join(__dirname, '/templates/views')

const app = express();

hbs.registerPartials(path.join(__dirname, './templates/partials'))

app.set("view engine", "hbs");
app.set("views", viewsPath);
app.use(express.static(publicAssets));

app.listen(8080, () => {
  console.log("Servidor no ar");
});

app.get("/", (req, res) => {
  res.render("index", {
      "title": "Home"
  });
});

app.get("/sobre", (req, res) => {
  res.render("sobre", {
      "title": "Sobre"
  });
});

app.get("/help", (req, res) => {
  res.render("help", {
      "title": "Help"
  });
});

app.get("/cotacao", (req, res) => {
  console.log("Pesquisando " + req.query.ativo);

  cotacao.cotacaoPromise(req.query.ativo).then(
    data => {
      res.json(data);
    },
    err => {
      res.status(500).send("erro ao consultar: " + err);
    }
  );
});
