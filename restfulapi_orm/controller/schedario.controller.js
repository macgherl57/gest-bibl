const db = require('../config/db.config.js');
const Schedario = db.schedario;
const Sequelize = db.Sequelize;
const op = Sequelize.Op;
const Prestito = db.prestito;
const AllAna = db.all_ana_studs;
const AnaProf = db.ana_profs;
const Classi = db.classi;
exports.findByN = (req, res) => {
    Schedario.findByPk(req.params.n).then(libro => {
        res.send(libro);
    })
};
exports.cerca = (req, res) => {
    Schedario.findAll({
        where: {
            [op.or]: [
                {autore: {[op.regexp]: '[[:<:]]' + req.params.keyword + '[[:>:]]'}},
                {titolo: {[op.regexp]: '[[:<:]]' + req.params.keyword + '[[:>:]]'}},
                {collocazione: req.params.keyword}
            ]
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
exports.insprest = (req, res) => {
    let body = req.body;
    Prestito.create(body) .then(result => {
        res.send({ error: false, data: result, message: 'Everything OK' });
    })
};
exports.modifica = (req, res) => {
    let body = req.body;
    let n = req.params.n;
    Schedario.update(body, { where: {N: n} }).then(result => {
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
    let where = {};
    if (req.query.rest == null) {
        where = { data_restituzione: null}
    } else {
        where = { data_restituzione: { [op.not]: null } }
    }
    Prestito.findAll({
        include: [{
            model: AllAna, as: 'Student',
            attributes: ['id', 'cogn_nome','cl','tel']
        },
        {
            model: AnaProf, as: 'Prof',
            attributes: ['id','cogn','nome'],
        },
        {
            model: Schedario, as: 'Schedario',
            attributes: ['N', 'autore', 'titolo', 'collocazione'],
        }],
        attributes: ['id', ['data_prelievo','prelevato'], ['data_restituzione','restituito']],
        where: where,
    }).then(prestiti => {
        res.send(prestiti);
    })
};
exports.prestito = (req, res) => {
    let id = req.params.id;
    Prestito.findByPk(id).then(prestito => {
        prestito.getProf({ attributes: ['id','cogn','nome'] }).then(ana_prof => {
            if (ana_prof != null) {
                res.send({Prof: ana_prof, prestito: prestito})
            }
        });
        prestito.getStudent({ attributes: ['id','cl','cogn_nome']}).then(all_ana_studs => {
            if (all_ana_studs != null) {
                res.send({Studente: all_ana_studs, prestito: prestito});
            }
        });
        return;
    })
};
exports.modprestito = (req, res) => {
    let id = req.params.id;
    let body = req.body;
    Prestito.update(body, { where: {id: id} }).then(result => {
        res.send({ error: false, data: result, message: 'Prestito editato!' });
    })
};
exports.classi = (req, res) => {
    Classi.findAll().then(classi => {
        let classarr = [];
        classi.forEach(element => {
            classarr.push(element['class']);
        });
        res.send(classarr);
    })
};
exports.cognomenome = (req, res) => {
    let cl = req.params.cl;
    if (cl === 'Docente') {
        AnaProf.findAll({
            attributes: ['id','cogn','nome'],
            where: { id: {[op.lt]: 30000} }
        }).then(ana_profs => {
            res.send(ana_profs);
        })
    } else if (cl === 'Personale Ata') {
        AnaProf.findAll({
            attributes: ['id','cogn','nome'],
            where: { id: {[op.gte]: 30000} }
        }).then(ana_profs => {
            res.send(ana_profs);
        })
    } else {
        Classi.findByPk(cl).then(classe =>{
            classe.getStudents({ attributes: ['id','cogn_nome']}).then(all_ana_studs => {
                res.send(all_ana_studs);
            });
        });
    }
};