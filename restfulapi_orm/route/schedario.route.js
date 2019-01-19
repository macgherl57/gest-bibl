module.exports = function(app) {
    const mw = require('../middleware');
    const schedario = require('../controller/schedario.controller.js');
    app.get('/biblioteca/libro/:n', schedario.findByN);
    app.get('/biblioteca/search/:keyword', schedario.cerca);
    app.get('/biblioteca/showcolumns', schedario.colonne);
    app.post('/biblioteca/insert', mw.verifyJWTToken_MW, schedario.inserisci);
    app.post('/biblioteca/insertriv', mw.verifyJWTToken_MW, schedario.insertriv);
    app.get('/biblioteca/getsameriv/:id', mw.verifyJWTToken_MW, schedario.getsameriv);
    app.put('/biblioteca/edit/:n', mw.verifyJWTToken_MW, schedario.modifica);
    app.delete('/biblioteca/edit/:n', mw.verifyJWTToken_MW, schedario.cancella);
    app.get('/biblioteca/prestiti', mw.verifyJWTToken_MW, schedario.prestiti);
    app.get('/biblioteca/prestito/:id', mw.verifyJWTToken_MW, schedario.prestito);
    app.put('/biblioteca/prestito/:id', mw.verifyJWTToken_MW, schedario.modprestito);
    app.get('/biblioteca/classi', schedario.classi);
    app.get('/biblioteca/cognomenome/:cl', schedario.cognomenome);
    app.post('/biblioteca/insprest', mw.verifyJWTToken_MW, schedario.insprest);
    app.get('/biblioteca/allriviste', mw.verifyJWTToken_MW, schedario.allriviste);
}
