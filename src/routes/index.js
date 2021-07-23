// Setup
const express = require('express');
const router = express.Router();

// Routes
router.get('/', (req, res) => {
    res.render('index.html', { title: 'Curriculum'});
});

router.get('/contact', (req, res) => {
    res.render('contact.html', { title: 'Contacto'});
});

router.get('/about', (req, res) => {
    res.render('about.html', { title: 'Acerca de mi'});
});

module.exports = router;