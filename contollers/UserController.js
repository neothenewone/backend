import UserModel from "../models/UserModel.js"

//**Metodos para el crud **/

// Mostrar todos los registros
export const getAllUser=async(req,res)=>{
try {
    const inscriptos= await UserModel.findAll()
    res.json(inscriptos);
} catch (error) {
    res.json({message:error.message})
    }
}

//Mostrar solo un registro
export const getUser=async(req,res)=>{
    try {
        const blog= await UserModel.findAll({
            where:{dni:req.params.dni}
        })
        res.json(blog[0]);
    } catch (error) {
        res.json({message:error.message})
        }
    }

//Crear un registro
export const createUser=async(req,res)=>{
    try {
       await UserModel.create(req.body)
        res.json({
            "message":"Registro creado correctamente!!"
        });
    } catch (error) {
        res.json({message:error.message})
        }
    }

    //Actualizar un registro
    export const updateUser=async(req,res)=>{
    try {
        await UserModel.update(req.body,{
        where: {id:req.params.id}
        })
        res.json({
        "message":"Registro actualizado correctamente!!"
        })    
        } catch (error) {
        res.json({message:error.message})
            }
        }

            //Actualizar un registro
    export const deleteUser=async(req,res)=>{
        try {
            await UserModel.destroy({
            where: {id:req.params.id}
            })
            res.json({
            "message":`Registro borrado correctamente!!${req.params.id}`
            })    
            } catch (error) {
            res.json({message:error.message})
                }
            }