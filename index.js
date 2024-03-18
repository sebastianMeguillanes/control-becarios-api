const app = require('./src/app');
const sequelize = require('./src/config/db');

const PORT = process.env.PORT || 3000;


sequelize.sync({ force: false }) 
    .then(() => {
        console.log('Conexión a la base de datos exitosa');
        app.listen(PORT, () => {
            console.log(`Servidor corriendo en el puerto ${PORT}`);
        });
    })
    .catch((error) => {
        console.error('Error al conectar a la base de datos:', error);
    });
