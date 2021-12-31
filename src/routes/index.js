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

router.get('/404notFound', (req, res) => {
    res.render('404notFound.html', { title: 'Page not found'});
});

module.exports = router;