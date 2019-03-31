const jwt = require('jsonwebtoken');
const config = require('../config/secret');
const verify = (req, res, next) =>{
    //console.log(req.headers);
    const token = req.headers['x-access-token'];
    if(token){
        jwt.verify(token, config.secret, (err, decoded) => {
        if(err){
            res.json({message: 'authentication failed'});
        }else{

            console.log(decoded);
            next();
        }
        });
    }else{
        res.json({message: 'authentication required'});
    }
}

module.exports = {
    verify: verify
}