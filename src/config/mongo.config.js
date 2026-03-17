import mongoose from 'mongoose';

const MONGO_URI = 'mongodb+srv://camilion:bonita2077780@cluster0.ebzuws4.mongodb.net/db-shop';

const dbconeccion = async () => {

try{
await mongoose.connect(MONGO_URI,{});
      console.log('Base de datos conectada exitosamente')
}
catch (error){
    console.error(error);
    console.error('Error al iniciar la base de datos :C')
};
}

export default dbconeccion;