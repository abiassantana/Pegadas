const jwt = require('jsonwebtoken');
const config = require('../config/secret');
const request = require('request');
const verifyWoner = (req, res, dev, func) =>{
    const token = req.headers['x-access-token'];
    if(token){
        jwt.verify(token, config.secret, (err, decoded) => {
            if(err){
                res.json({message: 'authentication failed'});
            }else{
                //console.log(dev);
                if(dev.dataValues.id != decoded.id){
                    res.json({message:'somente o dono da conta pode fazer esta operacao'});
                }else{
                    func(req, res, dev);
                }
                
            }
            });
        }else{
            res.json({message: 'authentication required'});
    }
}


module.exports = {
    verifyWoner: verifyWoner
}