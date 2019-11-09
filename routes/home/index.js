const router = require('express').Router();

router.all('/*', (req, res, next) => {
    req.app.locals.layout = 'main';
    next();
});

router.get('/', (req, res) => {
    res.render('home/index', { title: 'Welcome to Huggabull Dog' });
});

router.get('/about', (req, res) => {
    res.render('home/about', { title: 'About Huggabull Dog' });
});


router.get('/adopt', (req, res) => {
    res.render('home/adopt', { title: 'Adopt to Huggabull Dog' });
});


router.get('/gallery', (req, res) => {
    res.render('home/gallery', { title: 'Gallery of Huggabull Dog' });
});


router.get('/contact', (req, res) => {
    res.render('home/contact', { title: 'Contact Huggabull Dog' });
});




module.exports = router;