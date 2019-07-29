module.exports = {
    'new' : function(req,res){
        var oldDateObj = new Date();
        var newDateObj = new Date(oldDateObj.getTime() + 60000);
        req.session.cookie.expires = true;
        console.log(req.session);
        res.view('session/new');
        
    },
    login : function(req, res){
        // var username : req.body.
        User.find()
        .exec(function(err,user){
            if(err)
            {
                return res.serverError(err)
            }
            return 
        })
    }

}