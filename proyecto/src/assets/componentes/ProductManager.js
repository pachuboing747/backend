class ProductManager {
    constructor() {
      this.products = [];
      this.nextProductId = 1;
    }
  
    addProduct(title, description, price, thumbnail, code, stock) {
      if (!title || !description || !price || !thumbnail || !code || !stock) {
        console.log("Todos los campos son obligatorios");
        return;
      }
  
      const buscandoProducto = this.products.find(product => product.code === code);
      if (buscandoProducto ) {
        console.log(`Ya existe un producto con el código ${code}`);
        return;
      }
  
      const newProduct = {
        id: this.nextProductId ++,
        title,
        description,
        price,
        thumbnail,
        code,
        stock
      };
  
      this.products.push(newProduct);
      console.log(`${title} agregado correctamente`);
    }
  
    getProducts() {
      return this.products;
    }
  
    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (product) {
          return product;
        } else {
          console.log("Producto no encontrado");
          return null;
        }
    }
}
  
const productManager = new ProductManager();
  
productManager.addProduct("Botines de futbol COPA 20.3", "Cálzate la adidas Copa 20.3 y deslumbra sobre terrenos de césped natural seco.", 1500, "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/3df66ac4860b4c36892cab3000fc2cb5_9366/Botines_de_futbol_Copa_20.3_cesped_natural_seco_Blanco_EF1913_01_standard.jpg", "C001", 10);
  
productManager.addProduct("Nike Zoom Mercurial Superfly 9 Academy MG", "Cuenta con una unidad Zoom Air y con una NikeSkin flexible en la parte superior para brindar un toque excepcional, de modo que puedas dominar en los últimos y más importantes minutos de un partido.", 49900, "https://nikearprod.vtexassets.com/arquivos/ids/452821/DJ5625_001_A_PREM.jpg?v=638149287879500000", "GW1022", 15);


//como testing, falta stok.
productManager.addProduct("Botines predator EDGE.1 ", "Precisión. Control. Poder. adidas Predator lo tiene todo cubierto. Salí a la cancha y encontrá tu límite con estos botines.", 69000, "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/20fb4c05c9b44a0a99e5afb6017541b2_9366/Botines_Predator_Edge.1_Low_Terreno_Blando_Blanco_GW1014_01_standard.jpg", "DJ5625-001");

//como testing, producto repetido.
productManager.addProduct("Nike Zoom Mercurial Superfly 9 Academy MG", "Cuenta con una unidad Zoom Air y con una NikeSkin flexible en la parte superior para brindar un toque excepcional, de modo que puedas dominar en los últimos y más importantes minutos de un partido.", 49900, "https://nikearprod.vtexassets.com/arquivos/ids/452821/DJ5625_001_A_PREM.jpg?v=638149287879500000", "GW1022", 15);


const product = productManager.getProductById(1);
if (product) {
  console.log(product);
} else {
  console.log("producto no encontrado");
}

const nonExistentProduct = productManager.getProductById(10);
if (nonExistentProduct) {
  console.log(nonExistentProduct);
} else {
  console.log("producto no encontrado");
}


  
const products = productManager.getProducts();
console.log(products);
  