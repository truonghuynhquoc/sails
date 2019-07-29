module.exports = {
    attributes: {
        id : {
            type: 'string',
            required: true,
            unique: true,
        },
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
    },
      
}
