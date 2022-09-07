const express = require('express');
const app = require('../app');

const router = express.Router();

const contatos = [
    {
        id: 1,
        nome: 'Jose',
        fone: '4002-8922'
    },
    {
        id: 2,
        nome: 'Maria',
        fone:'99999999'
    }
];

router.get('/',function(req,res,next){
    res.json(contatos)
});

router.get('/:id', function (req,res,next){
    const contato = contatos.find(item => item.id ===   Number(req.params.id));
    res.json(contato);
})


module.exports = router;