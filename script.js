class ProductManager {
  constructor() {
    this.products = [];
    this.currentProductId = 1;
  }

  addProduct(title, description, price, thumbnail, stock, categoria) {
    if (
      !title ||
      !description ||
      !price ||
      !thumbnail ||
      !stock ||
      !categoria
    ) {
      console.log("Todos los campos son obligatorios");
      return;
    }

    const existingProduct = this.products.find(
      (product) => product.title === title
    );
    if (existingProduct) {
      console.log("El producto ya existe");
      return;
    }

    const product = new Product(
      this.currentProductId,
      title,
      price,
      thumbnail,
      stock,
      categoria,
      description
    );

    this.products.push(product);
    this.currentProductId++;
  }

  getProducts() {
    return this.products;
  }

  getProductById(id) {
    const product = this.products.find((product) => product.code === id);
    if (!product) {
      console.log("Producto no encontrado");
      return null;
    }
    return product;
  }
}

class Product {
  constructor(code, title, price, thumbnail, stock, categoria, description) {
    this.code = code;
    this.title = title;
    this.price = price;
    this.thumbnail = thumbnail;
    this.stock = stock;
    this.categoria = categoria;
    this.description = description;
  }
}

// Ejemplo de uso:
const productManager = new ProductManager();

productManager.addProduct(
  "CPU AMD",
  "El mejor del mercado",
  25000,
  "src",
  24,
  "Procesadores"
);
productManager.addProduct(
  "GPU Nvidia",
  "Potencia gráfica increíble",
  40000,
  "src",
  10,
  "Tarjetas gráficas"
);
productManager.addProduct(
  "SSD Samsung",
  "Almacenamiento rápido y confiable",
  15000,
  "src",
  50,
  "Almacenamiento"
);

productManager.addProduct(
  "Fuente de Poder EVGA 850W",
  "La mejor Fuente del mercado",
  17000,
  "src",
  20,
  "Fuentes de Poder"
);

const allProducts = productManager.getProducts();
console.log(allProducts);

const productIdToFind = 4;
const productById = productManager.getProductById(productIdToFind);
console.log(productById);
