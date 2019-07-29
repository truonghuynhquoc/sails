var bcrypt = require("bcryptjs");
module.exports = {
    attributes: {
        fullName: {
            type: 'string',
            required: true,
            unique: true,
        },
        passWord: {
            type: 'string',
            required: true,
          },
        email: {
            type: 'string',
            required: true,
        },
        //attributes methods
    },
      
}
