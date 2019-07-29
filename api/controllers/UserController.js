var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

module.exports = {
    get: function (req, res) {
        User.find()
            .exec(function (err, users) {
                if (err) {
                    return res.serverError(err);
                }
                return res.json(users);
            })
    },
    delete: function (req, res) {
        User.destroy({ id: req.params.id })
            .exec(function (err, user) {
                if (err) {
                    return res.serverError(err)

                }
                return res.ok("Xoa thanh cong !");
            })
    },
    create: function (req, res) {
            bcrypt.hash(req.param('passWord'),10,function (err, hashed) {
                if (err) {
                  
                  return res.serverError({'err': 'hash Error!'});
                } else{
                    User.create({
                        fullName: req.param('fullName'),
                        passWord: hashed,
                        email: req.param('email')
                    })
                        .exec(function (err, user) {
                            if (err) {
                                return res.serverError(err)
                            }
                            return res.ok("Tao User thanh cong !");
                        })
                }
              
                    }
        
            )},

    update: function (req, res) {
            let userUpdate = {};

            if (req.param('fullName')) {
                userUpdate.fullName = req.param('fullName')
            }
            if (req.param('passWord')) {
                userUpdate.passWord = req.param('passWord')
            }
            if (req.param('email')) {
                userUpdate.email = req.param('email')
            }
            User.update({
                id: req.params.id
            },userUpdate)   
                .exec(function (err, user) {
                    if (err) {
                        return res.serverError(err);
                    }
                    return res.ok('Update User thanh cong !')
                })
        }, 
    search : function(req, res){
            User.find({
                fullName : req.param('fullName')
            })
            .exec(function(err, user){
                if(err){
                    return res.serverError(err);
                }
                if(user.length == 0)
                {
                    return res.send("Khong tim thay User")
                }
                else{
                    return res.json(user);
                }       
                
            })      
        },
    login : function(req,res){
        User.findOne({email : req.body.email}).exec(function callback(err,user){
                //if user log in success, generate a JWT token for the user with a secret key
                jwt.sign({user}, 'privatekey', { expiresIn: '1h'},(err, token) => {
                    if(err)
                    { 
                        return res.serverError(err);
                        // console.log(err)
                    }    
                    res.send(token);
                });
            
        })
        
    }
}