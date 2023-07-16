class ProductManager{
    constructor(){
        this.products=[]
        this.theId=1
    }
 addProduct(product){
    if(!this.validProduct(product)){
        console.log("El Producto no es valido, verifique que haya añadido todos los campos requeridos")
        return
    }
    if(this.codeDuplicate(product.code)){
        console.log("El código del producto es duplicado")
        return
    }
    product.id=this.theId++
    this.products.push(product)
    

 }   

 getProducts(){
    return this.products
 }

 getProductByID(id){
    const product_id=this.products.find((product)=>product.id==id)
  if(product_id){
    return product_id
  }else{
    console.log("NOT FOUND")
  }
  
}
validProduct(product){
    return (
        product.title&&
        product.description&&
        product.price&&
        product.thumbnail&&
        product.code&&
        product.stock!==undefined
    )
}


codeDuplicate(code){
    return this.products.some((product)=>product.code===code)
}


}

//instanciar la clase

const productManager= new ProductManager()
productManager.addProduct({
title: "Arroyaditos de primavera",
description: "Vegetales: repollo, zanahoria y cebolla",
price: 200,
thumbnail: "/imgArroyadito.jpg",
code: "P001",
stock: 10

})

productManager.addProduct({
title: "Falafel",
description: "Garbanzos y especias",
price: 400,
thumbnail: "/imgFalafel.jpg",
code: "P002",
stock: 5
});


//obtener productos

const product_added=productManager.getProducts()
console.log(product_added)

//obtener por id

const productById=productManager.getProductByID(5)
console.log(productById)