const db = require('../config/db.config.js');
const Schedario = db.schedario;
const Sequelize = db.Sequelize;
const op = Sequelize.Op;
const Prestito = db.prestito;
const AllAna = db.all_ana_studs;
const AnaProf = db.ana_profs;

exports.findByN = (req, res) => {
    Schedario.findByPk(req.params.n).then(libro => {
        res.json(libro);
    })
};
exports.cerca = (req, res) => {
    Schedario.findAll({
        where: {
            [op.or]: [{autore: {[op.like]: '%' + req.params.keyword + '%'}}, {titolo: {[op.like]: '%' + req.params.keyword + '%'}}]
        }
    }).then(libri => {
        res.send(libri);
    })
};
exports.colonne = (req, res) => {
    let query = 'SHOW COLUMNS FROM schedario2_copy2';
    db.sequelize1.query(query, { type: db.sequelize.QueryTypes.SELECT}).then(results => {
        res.send(results);
    })
};
exports.inserisci = (req, res) => {
    let body = req.body;
    Schedario.create(body) .then(result => {
        res.send({ error: false, data: result, message: 'Everything OK' });
    })
};
exports.modifica = (req, res) => {
    let body = req.body;
    let n = req.params.n;
    Schedario.update(body, { where: { N: n} }).then(result => {
        res.send({ error: false, data: result, message: 'Libro editato!' });
    })
};
exports.cancella = (req, res) => {
    let n = req.params.n;
    Schedario.destroy({ 
        where: { N: n }
    }).then(result => {
        res.send({ error: false, data: result, message: 'Libro editato!' });
    })
};
exports.prestiti = (req, res) => {
    Prestito.findAll({
        include: [{
            model: AllAna,
            attributes: ['cogn_nome','cl','tel']
        },
        {
            model: AnaProf,
            attributes: ['id','cogn','nome'],
        },
        {
            model: Schedario, as: 'Schedario',
            attributes: ['autore', 'titolo', 'collocazione'],
        }],
        attributes: [['data_prelievo','prelevato']],
        where: {
            data_restituzione: null,
        },
    }).then(prestiti => {
        res.send(prestiti);
    })
};
