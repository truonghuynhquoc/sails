module.exports = {
    get : function(eq,res){
        if(sails.config.environment === 'production')
        {
            console.log(sails.config.production.API_KEY);
        }
        if(sails.config.environment === 'staging')
        {
            console.log(sails.config.staging.API_KEY);
        }
        if(sails.config.environment === 'sandbox')
        {
            console.log(sails.config.sandbox.API_KEY);
        }
    }
};

