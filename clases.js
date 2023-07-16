/* function hello() {
    const hi = true;
    if (hi === false) {
        console.log("Hola Mundo");
    } else {
        console.log("Hola");
    }
}

console.log(hello());

 */

//
/* function mostrarLista(lista){
    if(lista.length>0){
        lista.forEach(e=>{
            console.log(e)
        })
    }else{
        console.log("noo")
    }
}

let datos=[1,2,2,5]
mostrarLista(datos) */

/* function multi(numero){
    return function(segundo_numero){
        return numero*segundo_numero
    }
}

let triplicar= multi(3)
let duplicar=multi(2)

console.log(duplicar(4)) */

/* function multipli(numero){
    return function(segundo_numero){
        return numero*segundo_numero
    }
}

let triplicar=multipli(3)
let cuadriplicar=multipli(4)

console.log(cuadriplicar(890)) */

/* function mostrar(lista){
    if(lista.length>0){
        lista.forEach(e=>{
            console.log(e)

        })
    }else{
        console.log("Hola")
    }
}

let data=[1,2,3,4,5]
mostrar(data) */
/* function nuevaPro() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const exito = true;
            if (exito) {
                resolve("Exito");
            } else {
                reject("error");
            }
        }, 2000);
    });
}

nuevaPro()
    .then((resuelto) => {
        console.log(resuelto);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("finalizamos");
    });


    const valoresProd = objetos.reduce((valorProd, objeto) => {
        const valores = Object.values(objeto);
        const suma = valores.reduce((a, b) => a + b, 0);
    
        return valorProd + suma;
    }, 0); */

    




    class ProductManager{
        constructor(){
            this.products=[]
            this.nextId=1
        }
        //añadir un metodo que tenga como parametro un prodto que se añadira al array inicial
        //crear un if que use el metodo de es valido tomando el parametro producto que determine si es correcto el productp
        addProduct(product){

            if(!this.isProductValid(product)){
                console.log("Error:No se puede añadir el producto, es invalido, revisar que tenga todos los campos")
                return
            }
     //crear un metodo codeDuplicate que determine si el product.code está repetido
        if (this.codeDuplicate(product.code)){
            console.log("El código está duplicado")
            return
        }
    //asignarle un valor al product id que sería el igual al this.nextId autoincrementado con ++
    product.id=this.nextId++
    //añadir al array product el producto validado
    this.products.push(product)
    }

    //crear el metodo get product que añada los productos que han sido creados al momento
    getProducts(){
        return this.products
    }
    //crear un metodo que los añada según el Id que tome como parametro el id

    getProductsById(id){
        const product=this.products.find((product)=>product.id===id)
        //crear un condicional si existe el product lo retorne ya que es truey sino un else que diga que el producto no fue encontrado
        if(product){
            return product
        }else{
            console.log("El producto no fue encontrado")

        }
        //Crera el metodo isProductValid que determine si el prodto es valido o noo que tenga como parametro el product  
    
    }
    isProductValid(product) {
        return (
           product.title &&
			product.description &&
			product.price &&
			product.thumbnail &&
			product.code &&
			product.stock !== undefined
        )
    }
    codeDuplicate(code){
        return this.products.some((product)=>product.code===code)
    }
}
    
    //instaciar kla clase

    const productManager= new ProductManager()

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
    
    
    
    //Obtener productos

/*     const product_list= productManager.getProducts()
 */   /*  console.log(product_list) */

   //obtener producto por id

  /*  const produc_Id=productManager.getProductsById(2)
   console.log(produc_Id) */

   //obtener product inexistente

   const noProduct=productManager.getProductsById(10)
   console.log(noProduct)








