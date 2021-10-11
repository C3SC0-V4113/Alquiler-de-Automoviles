const express = require('express');
const sequelize = require('./models/database');
const marca = require('./routes/marcas');
const modelo = require('./routes/modelos');
const usuario = require('./routes/usuarios');
const auto = require('./routes/autos');
const alquiler = require('./routes/alquileres');


const app = express();
app.use(express.urlencoded({ extended: true }));

//Conexion a la DB
sequelize.connection();

//Middlewares
app.use('/api/marcas/', marca);
app.use('/api/modelos/', modelo);
app.use('/api/usuarios/', usuario);
app.use('/api/autos/', auto);
app.use('/api/alquileres', alquiler);

//Puerto que va usar NODE
const port = 3000;
//listen estara escuchando el puerto 3000
app.listen( port, () => {
    console.log('Apicacion ejecutandose...');
})

