const express = require('express');
const router = express.Router();
const db = require('./../models/index')
const isWoner = require('./../middlewares/woner');
const upload = require('./../config/multerConfig');

let Game =  db.Game;

const uploadFile = function uploadFile(req, res, game){
    game.gamePhoto = req.file.buffer;
    
    const tempGame = game.dataValues;
    //console.log(dev);
    game.update(tempGame, {
        where: game.id
    }).then(() => {
        res.send({
            message: 'game updated',
            game: req.body
        });
    });
}

router.post('', upload.any(), function (req, res) {
    try {
        //console.log(req.files[1]);
        Game.create({
            name: req.body.name,
            description: req.body.description,
            gameFiles: req.files[0],
            gamePhoto: req.files[1],
            tags: req.body.tags,
            developer: req.body.developer
        });
        return res.send({
            message: 'game is created'
        });
    } catch (err) {
        return res.status(400).send({
            error: 'falha no registro',
            erro: err
        });
    }

});

router.get('/games', function(req, res){
    Game.findAll().then( games =>{
        res.send(games);
    });
});
module.exports = app => app.use('/game', router);