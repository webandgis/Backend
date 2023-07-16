/* const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
] */

/* const tipoProductos=objetos.reduce((lista,objeto)=>{
    Object.keys(objeto).forEach(producto=>{
        if(!lista.includes(producto)){
            lista.push(producto)
        }
    })
    return lista
},[])
 */

/* const productosVendidos=objetos.reduce((total,objeto)=>{
    const cantidades=Object.values(objeto)
    const suma=cantidades.reduce((a,b)=>a+b,0)
    return total+suma
},0)
console.log("vendidos",productosVendidos)



const objetosNew= Object.keys(objetos);

const objectPrice= Object.values(objetos)

const newList=  objetosNew.includes(objetos) ?? objetos.values !=objetosNew */


class ProductManager {
	constructor() {
		this.products = []
		this.nextId = 1
	}

	addProduct(product) {
		if (!this.isProductValid(product)) {
			console.log("Error: No se puede añadir el producto, es inválido. Revisar que tenga todos los campos.");
			return;
		}

		if (this.codeDuplicate(product.code)) {
			console.log("El código está duplicado.");
			return;
		}

		product.id = this.nextId++;
		this.products.push(product);
	}

	getProducts() {
		return this.products;
	}

	getProductsById(id) {
		const product = this.products.find((product) => product.id === id);

		if (product) {
			return product;
		} else {
			console.log("El producto no fue encontrado.");
		}
	}

	isProductValid(product) {
		return (
			product.title &&
			product.description &&
			product.price &&
			product.thumbnail &&
			product.code &&
			product.stock !== undefined
		);
	}

	codeDuplicate(code) {
		return this.products.some((product) => product.code === code);
	}
}

const productManager = new ProductManager();

productManager.addProduct({
	title: "Arroyaditos de primavera",
	description: "Vegetales: repollo, zanahoria y cebolla",
	price: 200,
	thumbnail: "/imgArroyadito.jpg",
	code: "P001",
	stock: 10
  });
  
  productManager.addProduct({
	title: "Falafel",
	description: "Garbanzos y especias",
	price: 400,
	thumbnail: "/imgFalafel.jpg",
	code: "P002",
	stock: 5
  });

/* const product_list = productManager.getProducts();
console.log(product_list); */
const produc_Id=productManager.getProductsById(2)
   console.log(produc_Id)

  