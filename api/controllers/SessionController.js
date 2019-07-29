module.exports = {
    'new' : function(req,res){
        var oldDateObj = new Date();
        var newDateObj = new Date(oldDateObj.getTime() + 60000);
        req.session.cookie.expires = true;
        console.log(req.session);
        res.view('session/new');
        
    },
}