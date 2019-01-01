var express = require('express');
var router = express.Router();
var biblio = require('../models/biblioteca');

router.get('/showcolumns', function(req, res) {
    biblio.showcols(function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
});

router.get('/libro/:n', function(req, res) {
    biblio.getLibro(req.params.n, function(error, results, fields) {
        if (error) throw error;
        return res.send({error:false, data: results[0], message: 'Libro retrieved OK'});
    });
});

router.get('/search/:keyword', function(req, res) {
    biblio.cerca(req.params.keyword, function(error, results, fields) {
        if (error) throw error;
        return res.send(results);
    });
});

router.put('/insert', function(req, res) {
    biblio.inserisci(req.body, function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Everything OK'});
    });
});

router.put('/edit/:n', function(req, res){
    biblio.edit(req.body, req.params.n, function(error, results, fields) {
        if (error) throw error;
        return res.send({error: false, data: results, message: 'Libro editato!'})
    });
});

router.delete('/libro/:n', function(req, res) {
    biblio.cancella(req.params.n, function(error, results, fields) {
        if (error) throw error;
        return res.send({ error: false, data: results, message: 'Libro cancellato!'})
    });
});

module.exports = router;
