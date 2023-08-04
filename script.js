class ProductManager {
  constructor() {
    this.products = [];
  }
  addProduct(product) {
    const prod = this.products.find((prod) => prod.code === product.code);
    if (prod) {
      console.log("El producto ya se encuentra agregado");
    } else {
      this.products.push(product);
    }
  }
  getProducts() {
    console.log(this.products);
  }
  getProductById(id) {
    const prod = this.products.find((product) => product.id === id);
    if (prod) {
      console.log(prod);
    } else {
      console.log("Producto no encontrado");
    }
  }
}
class Product {
  constructor(code, title, price, thumbnail, stock, categoria, description) {
    this.id = Product.incrementarId();
    this.code = code;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
    this.stock = stock;
    this.categoria = categoria;
    this.description = description;
  }
  static incrementarId() {
    if (this.idIncrement) {
      this.idIncrement++;
    } else {
      this.idIncrement = 1;
    }
    return this.idIncrement;
  }
}
const producto1 = new Product(
  "PV001PC",
  "GPU Nvidia",
  40000,
  "src",
  10,
  "Placas de Video",
  "Potencia gráfica increíble",
  []
);
const producto2 = new Product(
  "AL001PC",
  "SSD Samsung",
  15000,
  "src",
  50,
  "Almacenamiento",
  "Almacenamiento rápido y confiable",
  []
);
const producto3 = new Product(
  "FP001PC",
  "Fuente de Poder EVGA 850W",
  17000,
  "src",
  20,
  "Fuentes de Poder",
  "La mejor Fuente del mercado"
);

const productManager = new ProductManager();
productManager.addProduct(producto1);
productManager.addProduct(producto2);
productManager.addProduct(producto3);
productManager.getProducts();
productManager.getProductById(3);
