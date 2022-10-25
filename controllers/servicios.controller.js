const Servicio = require("../models/servicios.model");
let response ={
    msg: "",
    exito: false
}

exports.create = function(req,res){
    let servicio = new Servicio({
        servicio_id: req.body.servicio_id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio_x_hora: req.body.precio_x_hora,
        experiencia: req.body.experiencia,
        calificacion: req.body.calificacion
    })

    servicio.save(function(err){
        if(err){
            console.error(err), 
            response.exito = false,
            response.msg = "Error al guardar el servicio"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El servicio se guardó correctamente"
        res.json(response)
    })
}
exports.find = function(req,res){
    Servicio.find(function(err, servicios){
        res.json(servicios)
    })
}

exports.findOne = function(req,res){
    Servicio.findOne({_id: req.params.id}, function(err, servicio){
        res.json(servicio)
    })
}

exports.update = function(req,res){
    let servicio = {
        servicio_id: req.body.servicio_id,
        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio_x_hora: req.body.precio_x_hora,
        experiencia: req.body.experiencia,
        calificacion: req.body.calificacion
    }
    Servicio.findByIdAndUpdate(req.params.id, {$set: servicio},function(err){
        if(err){
            consolre.error(err),
            respode.exito = false,
            response.msg = "Error al modificar el servicio"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El servicio modifico correctamente"
        res.json(response)
    })
}

exports.remove = function(req,res){
    Servicio.findByIdAndRemove({_id: req.params.id},function(err){
        if(err){
            consolre.error(err),
            respode.exito = false,
            response.msg = "Error al eliminar el servicio"
            res.json(response)
            return;
        }

        response.exito = true,
        response.msg = "El servicio eliminado correctamente"
        res.json(response)
    })
}
