const express = require('express');
const Usuario = require('../models/usuarios');
const TipoUserModel = require('../models/tipos_usuario');
const ruta = express.Router();

//PETICIONES HTTP
//PETICION GET
ruta.get('/', ( req, res ) => {
    let result = getUsuarios();

    result.then( usuarios => {
        res.json( usuarios );
    })
    .catch( err => {
        res.status(400).json({
            mensaje: 'Ocurrio un problema al obtener los usuarios',
            err
        })
    })
})

//PETICION POST
ruta.post('/', (req, res) => {
    let body = req.body;

    let result = createUsuario( body );
    result.then( usuario => {
        res.json( usuario );
    })
    .catch( err => {
        res.status(400).json({
            mensaje: 'Ocurrio un problema al crear al usuario',
            err
        })
    })
})


//PETICION PUT
ruta.put('/:id', (req, res) => {
    let id = req.params.id;
    let body = req.body;

    let result = updateUsuario( id, body );

    result.then( usuario => {
        res.json( usuario );
    })
    .catch( err => {
        res.status(400).json({
            mensaje: 'Ocurrio un problema al modificar el usuario',
            err
        })
    })
})

//PETICION DELETE
ruta.delete('/:id', (req, res) => {
    let id = req.params.id;

    let result = deleteUsuario( id );
    result.then( usuario => {
        res.json( usuario );
    })
    .catch( err => {
        res.status(400).json({
            mensaje: 'Ocurrio un problema al eliminar al usuario',
            err
        })
    })
})

//FUNCIONES PARA EL CRUD

//FUNCION PARA OBTENER USUARIOS
async function getUsuarios()
{
    return await Usuario.findAll({
        where: {
            estado: 0
        },
        include: {
            model: TipoUserModel,
            as: 'tipo',
            attributes: ['tipo_usuario']
        }
    })
}

//FUNCION PARA CREAR USUARIOS
async function createUsuario( body )
{
    return await Usuario.create({
        id_tipo_usuario_FK: body.id_tipo_usuario,
        nombres: body.nombres,
        apellidos: body.apellidos,
        email: body.email,
        usuario: body.usuario,
        password: body.password,
        fecha_nacimiento: body.fecha_nacimiento,
        direccion: body.direccion,
        telefono: body.telefono
    });
}

//FUNCION PARA MODIFICAR USUARIOS
async function updateUsuario( id, body )
{
    return await Usuario.update({
        id_tipo_usuario_FK: body.id_tipo_usuario,
        nombres: body.nombres,
        apellidos: body.apellidos,
        email: body.email,
        usuario: body.usuario,
        password: body.password,
        fecha_nacimiento: body.fecha_nacimiento,
        direccion: body.direccion,
        telefono: body.telefono
    },{
        where: {
            id_usuario_PK: id
        }
    })
}

//FUNCION PARA ELIMINAR USUARIOS, SOLO CAMBIA EL ESTADO DE ESTE
async function deleteUsuario( id )
{
    return await Usuario.update({ estado: 1}, {
        where: {
            id_usuario_PK: id
        }
    })
}

module.exports = ruta;