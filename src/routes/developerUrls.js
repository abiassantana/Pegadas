const express = require('express');
const router = express.Router();
const db = require('./../models/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

let developer =  db.Developer;
router.post('', function(req, res){
    try{
        bcrypt.hash(req.body.password, 12).then((result) =>{
            developer.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                userName: req.body.userName,
                email: req.body.email,
                password: result
            });
        });
        return res.send({message: 'developer is created'});
    }catch (err){
        return res.status(400).send({error: 'falha no registro'});
    }
    
});

router.get('/developers', function(req, res){
    developer.findAll().then(developers => {
        res.send(developers);
    });
});
router.get('/:id', function(req, res) {
    developer.findOne({
        where: req.params,
        attributes: {
            exclude: ['password']
          }
    }).then(dev => {
        if (dev) {
            res.send(dev);
        } else {
            res.json({error: 'developer not found'});
        }
    });
});
router.get('/perfil/:id', function(req, res) {
    developer.findOne({
        where: req.params,
        attributes: {
            exclude: ['password']
          }
    }).then(dev => {
        if (dev) {
            res.send(dev);
        } else {
            res.json({error: 'developer not found'});
        }
    });
});

router.put('/', function(req,res){
    try {
        developer.findByPk(req.body.id).then(dev => {
            if (dev) {
                dev.update(req.body, {where: dev.id}).then(() => {
                    res.send({message: 'developer updated', developer: req.body});
                });
            } else {
                res.json({error: 'developer not found'});
            }
        });    
    } catch (error) {
        return res.status(400).send({error: 'falha na atualizacao.'})
    } 
});

router.delete('/', function(req, res){
    developer.findByPk(req.body.id).then(dev => {
        if(dev) {
            developer.destroy({where: req.body}).then(() => {
                res.send({message: 'developer has deleted'});
            });
        } else {
            res.json({error: "developer not found"});
        }
    });
});

module.exports = app => app.use('/developer', router);