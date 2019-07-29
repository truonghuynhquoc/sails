var jwt = require("jsonwebtoken");
var bcrypt = require("bcryptjs");

module.exports = {
    get: function (req, res) {
        User.find()
            .exec(function (err, users) {
                if (err) {
                    return res.json(err);
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
        // saddd
            bcrypt.hash(req.param('passWord'),10,function (err, hashed) {
                if (err) {
                  console.log("4");
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
        User.find({ id : req.params.id})
        .exec(function(err, user){
            if(user.length == 0)
            {
                return res.send("Khong tim thay User")
            }
            if(err){
                return res.serverError(err);
            }            
            return res.json(user);
        })
    },

//   login: function (req, res) {

//     /**
//      * this is param checking if they are provided
//      */
//     var email = req.body.email
//     var pass = req.body.passWord
//     if (!email || !pass) {
//       return res.serverError("No field should be empty.");
//     }
//     /**
//      * check if the username matches any email or phoneNumber
//      */
//     User.findOne({
//       email: req.body.email
//     }).exec(function callback(err, user) {
        
//       if (err) return res.serverError(err);

//       if (!user) return res.serverError("User not found, please sign up.");

//       //check password
//       bcrypt.compare(req.body.passWord, user.passWord, function (error, matched) {
//         if (error) return res.serverError(error);

//         if (!matched) return res.serverError("Invalid password.");

//         //save the date the token was generated for already ƒinside toJSON()
//         //return the token here
//         res.ok(user);
//       });

//     });
//   },
    login : function(req,res){
        User.findOne({email : req.body.email}).exec(function callback(err,user){
            
                //if user log in success, generate a JWT token for the user with a secret key
                jwt.sign({user}, 'privatekey', { expiresIn: '5s'},(err, token) => {
                    if(err) { console.log(err) }    
                    res.send(token);
                });
            
        })
        

    }
}