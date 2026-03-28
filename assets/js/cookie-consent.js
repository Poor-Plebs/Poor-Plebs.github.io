CookieConsent.run({
  guiOptions: {
    consentModal: {
      position: 'bottom right',
    },
  },

  categories: {
    necessary: {
      enabled: true,
      readOnly: true,
    },
    analytics: {},
  },

  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'We use cookies',
          description:
            'We use analytics cookies to understand how visitors interact with our website. You can accept or reject these cookies.',
          acceptAllBtn: 'Accept',
          acceptNecessaryBtn: 'Reject',
          showPreferencesBtn: 'Manage preferences',
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept all',
          acceptNecessaryBtn: 'Reject all',
          savePreferencesBtn: 'Save preferences',
          sections: [
            {
              title: 'Necessary cookies',
              description:
                'These cookies are essential for the website to function properly.',
              linkedCategory: 'necessary',
            },
            {
              title: 'Analytics cookies',
              description:
                'These cookies help us understand how visitors interact with our website by collecting anonymous usage data.',
              linkedCategory: 'analytics',
            },
          ],
        },
      },
    },
  },

  onConsent: function () {
    if (CookieConsent.acceptedCategory('analytics')) {
      gtag('consent', 'update', { analytics_storage: 'granted' });
    }
  },

  onChange: function () {
    if (CookieConsent.acceptedCategory('analytics')) {
      gtag('consent', 'update', { analytics_storage: 'granted' });
    } else {
      gtag('consent', 'update', { analytics_storage: 'denied' });
    }
  },
});
