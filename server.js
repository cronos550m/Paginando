const express = require('express');
const app = express()

//importar conexion MongoDB
const archivoDB = require('./conexion')

//Importacion del archivo de rutas y modelo usuario
const rutausuario = require('./routes/usuario')

app.use('/api/usuario', rutausuario)

app.get('/', (req,res) => {
    res.end('Bienvenidos al servidor backend Node corriendo..')
})


//configurar server basico
app.listen(5000, function(){
    console.log('El servidor esta corriendo correctamente')
})
