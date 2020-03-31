const navigation = require('./navigation');

module.exports = {
  navigation,
  company: 'Industrial Media, LLC',
  logos: {
    navbar: {
      src: 'https://base.imgix.net/files/base/indm/all/fm_logo.png?h=40',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/fm_logo.png?h=80 2x',
      ],
    },
    footer: {
      src: 'https://base.imgix.net/files/base/indm/all/fm_logo.png?h=60',
      srcset: [
        'https://base.imgix.net/files/base/indm/all/fm_logo.png?h=120 2x',
      ],
    },
  },
  socialMediaLinks: [
  ],
  identityX: {
    appId: '5e28a3dd58e67b229e55ae43',
    enabled: true,
    comments: { enabled: true },
    options: {
      appContextId: '5e82041275a0950125baf2b6',
    },
  },
  gtm: {
    containerId: 'GTM-T6RB25V',
  },
  wufoo: {
    userName: 'ien',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    to: 'david@ien.com',
    branding: {
      logo: 'https://base.imgix.net/files/base/indm/all/fm_logo.png?h=60',
    },
    support: {
      email: 'reply@ien.com',
    },
  },
};
