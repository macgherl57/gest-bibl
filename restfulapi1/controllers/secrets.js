var express = require('express');
var router = express.Router();
var secrets = require('../models/secrets');
router.post('/validate', function(req,res) {
    secrets.validate(req.body.username, req.body.password, function(error, result, fields) {
        if (error) throw error;
        if (result.length == 0) {
            result = {studente_id: 0}
        }
        return res.send({ error: false, data: result, message: 'Everything OK'});
    });
});

module.exports = router;
