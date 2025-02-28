const express = require('express' );
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
res.send('Bienvenido a la API');

});

app.get('/saludo/:nombre', (req, res) => {
    res.send(`Hola, ${req.params.nombre}!, como estas hoy?`); //linea modificada por zaid
});

app.post('/mensaje', (req, res) => {
    res.json({ mensaje: `Recibido: ${req.body.mensaje}`});
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});