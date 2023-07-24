const fs=require('fs')

class Contenedor{
    constructor(file){
        this.file=file
    }

    async save(obj){
        try{
            const objects= await this.getAllObjects()
            const lastId=objects.length>0?objects[objects.length-1].id:0
            const newId=lastId+1 
            const newObj={id:newId,...obj}
            objects.push(newObj)
            await this.saveObjects(objects)
            return newId

        }

        catch (error) {
        throw new Error("Error al guardar el objeto")

        }
    }

    async getById(id){
        try{
        const objects= await this.getAllObjects()
        const findId= objects.find((obeject)=>obeject.id===id)
        return findId || null


        }

        catch (error) {

            throw new Error("El Id no fue encontrado, verifique")

        }
    }

    async getAll(){

        try{
        
            const objects=await this.getAllObjects()
            return  objects

        }
        catch (error){
            throw new Error("No se pudieron obtener los objetos")
        }

    }

    async deleteById(id){

        try{

            let objects=await this.getAllObjects()
            const objectsById=objects.filter((obj)=> obj.id!==id)
            await this.saveObjects(objectsById)

        }

        catch (error) {
            throw new Error("No se pudieron eliminar los id seleccionados")


        }
    
    
    }

    async deleteAll(){
        try{
            await this.saveObjects([])

        }
        catch (error) {
            throw new Error("No se pudieron eliminar los productos")

        }
    }

    async getAllObjects(){

        try{
            const data= await fs.promises.readFile(this.file,'utf-8')
            return data?JSON.parse(data):[]

        }

        catch (error) {

            return []

        }
    }

    async saveObjects(objects){

        try{
            await fs.promises.writeFile(this.file, JSON.stringify (objects,null,2))

        }
        catch (error){
            throw new Error ("No se pudieron guardar los objetos")

        }
    }
}

const main = async () =>{
    const productos= new Contenedor("products.txt")

const id= await productos.save(
        /* {title:'Arroyaditos de primavera', price:250}, */
        /* {title:'Hamburguesas Veganas', price:300}, */
        {title:'Falafel', price:170}
    )
    console.log("Objeto guardado con el id:",id)  

    //Obtener todos los objetos
/*  const allObjects= await productos.getAll()
    console.log("Estos son los objetos guardados:", allObjects)  */

    //Eliminar objeto
/* 
   await productos.deleteById(2)
    console.log("El objeto eliminado es:", id)  */

    //Obtener objetos por id
/* 
    const objetcs= await productos.getById(2)
    console.log("El producto con el id seleccionado es:",objetcs) */

    //Eliminar todos

   /*  const obejectDelete= await productos.deleteAll()
    console.log("Se eliminaron todos los objetos",obejectDelete) */
}


main().catch((error)=>console.error(error))