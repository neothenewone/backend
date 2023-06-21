import express from "express";
import cors from 'cors';

import db from "./database/db.js"
import userRoutes from './routes/route.js'
const app= express()
const port=5000


app.use(cors())

app.use(express.json())
app.use('/inscriptos',userRoutes)


try {
    await db.authenticate()
    console.log('Coneccion exitosa a la DB')
} catch (error) {
    console.log(`No se conecto!${error}`)
}
app.get('/',(req,res)=>{
    res.sendStatus(200)
})

app.listen(port,()=>{
    console.log(`escuchando en el puerto ${port}`)
})