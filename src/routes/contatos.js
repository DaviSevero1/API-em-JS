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
    const contatoLocalizado = contatos.find(contato =>
        contato.id ===   Number(req.params.id),
    );
    if(!contatoLocalizado){
        return res.status(404).json({msg: "Não achei contato!"})
    }
    res.json(contatoLocalizado);
})

router.post('/', function(req,res,next){
    const novoContato = {
        id: contatos.length + 1,
        nome: req.body.nome,
        fone: req.body.fone
    };
    contatos.push(novoContato);
    res.status(201).json(novoContato);
})


module.exports = router;