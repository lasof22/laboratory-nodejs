//creacion de una tabla - para crear otra se debe crear un archivo nombre.model.js dentro de models
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ServiciosSchema = new Schema({
    servicio_id:{type: String, required: true, max:60},
    nombre:{type: String, required: true, max:60},
    descripcion:{type: String, required: true, max:300},
    precio_x_hora:{type: Number, required: true, max:500000},
    experiencia:{type: Number, required: true, max:50},
    calificacion:{type: Number, required: true, max:500000}
});

module.exports = mongoose.model("servicios", ServiciosSchema); 