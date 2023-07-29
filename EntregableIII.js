const express=require("express")
 const fs=require("fs")

 const app=express()

 const PORT=8060

 

 const server=app.listen(PORT,()=>{
        console.log(`Esto es el puerto ${PORT}`)
 })



 app.get('/',(req,res)=>{
    res.send("Bienvenidos")
 })



 app.get('/productos',(req,res)=>{
    fs.readFile("products.txt","utf-8",(error,datos)=>{
     if(error){
        console.error("Error al leer el archivo",error)
     }
    try{
        const products=JSON.parse(datos)
        res.json(products)

    }catch(error) {
        throw new Error("error al leer el documento")

    }
    })
 })

 app.get('/productoRandom',(req,res)=>{
    fs.readFile("products.txt","utf-8",(erro,produ)=>{
        if(erro){
            console.error("Error al obtener el producto",erro)
        }

        try{

            let productos=JSON.parse(produ)
            let productKey=Object.keys(productos)
            let randomProduct=Math.floor(Math.random() *productKey.length)
            let productIndex=productKey[randomProduct]
            let productSelected=productos[productIndex]

            res.json(productSelected)

        }catch (error){

            throw new Error ("Error no se pudo seleccionar un producto random")

        }

    })
 })

 app.get('*',(req,res)=>{
    res.send("Sin Contenido")
 })

 server.on("error",error=>console.log(`Error en el servidor ${error}`))