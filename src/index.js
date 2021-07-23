// Setup
const express = require('express');
const server = express();
const path = require('path');

// Settings
server.set('port', 8080);
server.set('views', path.join(__dirname, 'views'));
server.engine('html', require('ejs').renderFile); // Porcesar archivos HTML como EJS
server.set('view engine', 'ejs');

// Middlewares

// Routes
server.use(require('./routes/'));

// Static files
server.use(express.static(path.join(__dirname, '/public')));
server.use('LS.svg', express.static('img/LS.svg')); // Establecer la ruta para el icono de la página

// Listening server
server.listen(server.get('port'), () => {
    console.log('Server runing on port', server.get('port'))
})