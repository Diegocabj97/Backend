/* import http from "http";



const server = http.createServer((req, res) => {
  res.end("Hola buenos días");
});

//iniciar servidor

server.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
}); */
import express from "express";
import { ProductManager } from "./ProductManager.js";

const PORT = 4000;
const app = express();
const PM = new ProductManager();
const prods = await PM.getProducts();

app.get("/", (req, res) => {
  res.send("Hola buenos días");
});

app.get("/productos/:id", async (req, res) => {
  const prodId = parseInt(req.params.id);
  if (prodId) {
    const prod = await PM.getProductById(prodId);
    res.send(prod);
  } else {
    res.send("Producto no existente");
  }
});
app.get("/productos", async (req, res) => {
  const { limit, categoria } = req.query;

  let filteredProds = prods;

  if (categoria) {
    filteredProds = filteredProds.filter(
      (prod) => prod.categoria === categoria
    );
  }

  if (limit) {
    const parsedLimit = parseInt(limit);
    filteredProds = filteredProds.slice(0, parsedLimit);
  }

  res.send(filteredProds);
});

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
