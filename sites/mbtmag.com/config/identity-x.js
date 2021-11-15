const configureIdentityX = require('@industrial-media/package-shared/config/identity-x');

module.exports = ({ omedaBrandKey }) => configureIdentityX({
  appId: '5e28a3dd58e67b229e55ae43',
  comments: { enabled: false },
  appContextId: '5e8366b1da9f22f7ee6852b4',
  omedaBrandKey,
});
