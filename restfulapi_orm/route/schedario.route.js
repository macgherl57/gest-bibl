module.exports = function(app) {
    const schedario = require('../controller/schedario.controller.js');
    app.get('/biblioteca/libro/:n', schedario.findByN);
    app.get('/biblioteca/search/:keyword', schedario.cerca);
    app.get('/biblioteca/showcolumns', schedario.colonne);
    app.post('/biblioteca/insert', schedario.inserisci);
    app.put('/biblioteca/edit/:n', schedario.modifica);
    app.delete('/biblioteca/edit/:n', schedario.cancella);
    app.get('/biblioteca/prestiti', schedario.prestiti);
    app.get('/biblioteca/prestito/:id', schedario.prestito);
    app.put('/biblioteca/prestito/:id', schedario.modprestito);
}
