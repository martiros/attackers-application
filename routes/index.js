var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

/* CSRF Attack Page. */
router.get('/interesting-page', function(req, res, next) {
	res.render('interesting-page', { title: 'Express' });
});
/* CSRF Attack Page. */
router.get('/csrf', function(req, res, next) {
	res.render('csrf', { title: 'Express' });
});

module.exports = router;
