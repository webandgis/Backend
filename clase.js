//Primero se declara la función con un parametro en este caso lista
/* 
const { rejects } = require("assert");
const { resolve } = require("path"); */

//Luego se abren llaves y se hace una condición

//Si la longitud del array es mayor a 0 recorrer la lista para eso se busca con forEach

/* function mostrarLista(lista){
    if(lista.length>0){
        lista.forEach(e=>{
            console.log(e)
        })
    }else{
        console.log("Hola")
    }
}

let datos=[1,2,3,4,5]
mostrarLista(datos) */




/* (function mostrarLista(lista){
    if(lista.length>0){
            
        lista.forEach(e=>{
            console.log(e)
        })
    }else{
        console.log("no")
    }
})([1,2,3]) */
/* (function mostrarLista(lista){
    if(lista.length>0){
        lista.forEach(e=>{
            console.log(e)
        })
    }else{
        console.log("Hola")
    }
})([1,2,3,4,4]) */

/* function crearMulti(numero){
   return function(segundo_numero){
    return numero*segundo_numero
   }
}

let triplicar=crearMulti(3)
let duplicar=crearMulti(2)

console.log(duplicar(2))
console.log(triplicar(3)) */


/* const estudiante ={
    nombre:"Juan",
    edad:"30",
    ciudad:"Caracas"
}
const valores=Object.values(estudiante)
console.log(valores)

const keysTr=Object.keys(estudiante)
console.log(keysTr)

function multipli(number){
    return function(second_number){
        return number*second_number
    }
}

let dupli=multipli(2)

console.log(45)*/

/* function ejemPromesa(){
    return new Promise ((resolve,reject)=>{
        setTimeout(()=>{
            const exito=true

            if(exito){
                resolve("exito")
            }else{
                reject("error")
            }

        },5000)
    })
}
ejemPromesa()
.then((resultado)=>{
    console.log(resultado)
})
.catch((error)=>{
    console.log(error)
})
.finally(()=>{
    console.log("Hola")
}) */
/* 
function promesa(){
    new Promise ((resolve,reject)=>{
        setTimeout(() => {
            const exito=true
            if(exito){
                resolve("exito")

            }else{
                reject("error")
            }

            
        },5000);
    })
}

promesa()
    .then((resultado) => {
        console.log(resultado);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log("Hola");
    }); */

 /*    function nuevaPro(){
       return new Promise ((resolve,reject)=>{
            setTimeout(() => {
                const exito=true
                if (exito){
                    resolve("Exito")
                }else{
                    reject("error")
                }
                
            }, 2000);
        })
    }

nuevaPro()
    .then((resuelto)=>{
        console.log(resuelto)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("finalizamos")
    }) */

/*     const objetos =  [
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

  /*   const productos=objetos.reduce((lista,objeto)=>{
        Object.keys(objeto).forEach(prod=>{
            if(!lista.includes(prod)){
                lista.push(prod)
            }
        })
        return lista
    },[])

    console.log("productos totales" + productos.join(",")) */

/*     const productos=objetos.reduce((lista,objeto)=>{
       Object.keys(objeto).forEach(e=>{
        if(!lista.includes(e)){
            lista.push(e)
        }
       })
       return lista
    },[])

    console.log("total prod"+productos.join(",")) */


  /*   const valoresProd=objetos.reduce((valor,objeto)=>{
        const valore=Object.values(objeto)
        const suma= valore.reduce((a,b)=> a+b,0)

        return valor+suma
    },0)

    console.log("total productos"+valoresProd) */

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