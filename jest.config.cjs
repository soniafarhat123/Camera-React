

// 'use strict';
// module.exports = {
//   // Autres configurations
//   testEnvironment: 'jsdom',
//   transform: {
//     '^.+\\.(ts|tsx)$': 'esbuild-jest', //babel-jest
//   },
//   transformIgnorePatterns: ['/node_modules/(?!@my-module)/'],
//   // ...
// };


module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest'
  },
  transformIgnorePatterns: [
    'node_modules/(?!(@ionic/react|@capacitor|@ionic/pwa-elements)/)',
  ],
};
