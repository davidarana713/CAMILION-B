import express from "express";
import cors from 'cors';

import dbconection from "./config/mongo.config.js";
import productoRoute from "./routes/producto.route.js";
import categoriaRoute from "./routes/categoria.route.js";
import registroRoute from "./routes/registro.route.js";
import carritoRoute from "./routes/carrito.route.js";

// invoca la conexion de la base de datos
dbconection();

const app = express();
const PORT = 3000;


// habilita el uso de json en las peticiones(que la app entienda json)
app.use(express.json());
app.use(cors());

app.use('/api/v1/producto', productoRoute);
app.use('/api/v1/categoria', categoriaRoute);
app.use('/api/v1/registro', registroRoute);
app.use('/api/v1/carrito', carritoRoute);

// servidor escuchando en el puerto 3000
app.listen(PORT, () => {
  console.log(`serve runnig on http://localhost:${PORT}`);
});