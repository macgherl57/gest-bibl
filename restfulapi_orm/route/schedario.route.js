module.exports = function(app) {
    const mw = require('../middleware');
    const schedario = require('../controller/schedario.controller.js');
    app.get('/biblioteca/libro/:n', schedario.findByN);
    app.get('/biblioteca/search/:keyword', schedario.cerca);
    app.get('/biblioteca/showcolumns', schedario.colonne);
    app.post('/biblioteca/insert', mw.verifyJWTToken_MW, schedario.inserisci);
    app.put('/biblioteca/edit/:n', mw.verifyJWTToken_MW, schedario.modifica);
    app.delete('/biblioteca/edit/:n', mw.verifyJWTToken_MW, schedario.cancella);
    app.get('/biblioteca/prestiti', mw.verifyJWTToken_MW, schedario.prestiti);
    app.get('/biblioteca/prestito/:id', mw.verifyJWTToken_MW, schedario.prestito);
    app.put('/biblioteca/prestito/:id', mw.verifyJWTToken_MW, schedario.modprestito);
    app.get('/biblioteca/classi', schedario.classi);
    app.get('/biblioteca/cognomenome/:cl', schedario.cognomenome);
    app.post('/biblioteca/insprest', mw.verifyJWTToken_MW, schedario.insprest);
}
