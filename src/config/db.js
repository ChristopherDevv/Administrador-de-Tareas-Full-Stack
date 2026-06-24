const mongoose = require("mongoose");

// CONEXION A MONGODB
const conectarDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/appTareas");
    console.log("Conectado a mongoBD");
  } catch (error) {
    console.log(`Error al conectar a mongoBD: ${error}`);
  }
};

module.exports = conectarDB;
