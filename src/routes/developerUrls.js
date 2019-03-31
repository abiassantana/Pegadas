const express = require('express');
const router = express.Router();
const db = require('./../models/index')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const auth = require('./../middlewares/auth');
const isWoner = require('./../middlewares/woner');
const secret = require('./../config/secret');
const upload = require('./../config/multerConfig');

let developer =  db.Developer;

router.post('/login', function(req, res) {
    developer.findOne({where: {userName: req.body.userName}}).then((dev) => {
        if (dev) {
            bcrypt.compare(req.body.password, dev.password).then((result) => {
            if (result) { 
                // password is correct
                const token = jwt.sign(dev.get({plain: true}), secret.secret);            
                res.json({message: 'User authenticated', token: token}); 
            } else { 
                // password is wrong
                res.json({message: 'Wrong password'});
            }               
        });         
        } else {            
            res.json({message: 'User not found'});        
        }    
    }); 
});

const uploadFile = function upPhoto(req, res, dev){
    dev.profilePhoto = req.file.buffer;
    developer.update(dev).then(() => {
      res.json({message:'File uploaded successfully! -> filename = ' + req.file.originalname});
    }).catch(err => {
      console.log(err);
      res.json({msg: 'Error', detail: err});
    });
}
router.put('/photo/:id', upload.single('photo'),  function(req, res){
    //console.log(req.params.id);
    developer.findByPk(req.params.id).then(dev => {
        if(dev){
            isWoner.verifyWoner(req, res, dev, uploadFile);
        }else{
            res.json({message: 'desenvolvedor nao encontrado'})
        }
        
    });

});

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

router.get('/developers', auth.verify, function(req, res){
    developer.findAll({attributes: {exclude: ['password']}}).then(developers => {
        res.send(developers);
    });    
});

const profile = function perfil(req, res, dev){
    if (dev) {
        res.send(dev);
    } else {
        res.json({error: 'developer not found'});
    }
}

router.get('/:id', function(req, res) {
    developer.findOne({
        where: req.params,
        attributes: {
            exclude: ['password']
          }
    }).then(dev => {
        isWoner.verifyWoner(req, res, dev, profile);
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

const att = function att(req, res, dev){
    dev.update(req.body, {where: dev.id}).then(() => {
        res.send({message: 'developer updated', developer: req.body});
    });
}

router.put('/', function(req,res){
    try {
        developer.findByPk(req.body.id).then(dev => {
            if (dev) {
                isWoner.verifyWoner(req, res, dev, att);
                
            } else {
                res.json({error: 'developer not found'});
            }
        });    
    } catch (error) {
        return res.status(400).send({error: 'falha na atualizacao.', err: error});
    } 
});

const del = function deletar(req, res, dev){
    developer.destroy({where: req.body}).then(() => {
        res.send({message: 'developer has deleted'});
    });
}

router.delete('/', function(req, res){
    developer.findByPk(req.body.id).then(dev => {
        if(dev) {
            isWoner.verifyWoner(req, res, dev, del);
        } else {
            res.json({error: "developer not found"});
        }
    });
});

module.exports = app => app.use('/developer', router);