module.exports.datastores = {
  default: {
    adapter: require('sails-mysql'),
    url: 'mysql://root:@localhost:3303/sails',
  }
};