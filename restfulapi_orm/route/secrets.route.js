module.exports = function(app) {
    const secrets = require('../controller/secrets.controller.js');
    app.post('/biblioteca/validate', secrets.validate);
}
