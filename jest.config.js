// module.exports = {
//   transform: {
//     '^.+\\.ts?$': 'ts-jest'
//   },
//   testEnvironment: 'node',
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   "roots": [
//     "<rootDir>/src",
//   ]
// };

// // Sync object
// /** @type {import('@jest/types').Config.InitialOptions} */
// const config = {
//   verbose: true,
//   collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
//   moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
//   moduleDirectories: ['node_modules', '<rootDir>'],
//   roots : ["<rootDir>"],
//   transform: {
//     "node_modules/variables/.+\\.(j|t)sx?$": "ts-jest"
//   },
//   transformIgnorePatterns: [
//     "node_modules/(?!variables/.*)"
//   ],
// };

// module.exports = config;


module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  transform: {
    '^.+\\.ts?$': 'ts-jest',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
};



// module.exports = {
//   moduleDirectories: ['node_modules', '<rootDir>'],
//   collectCoverageFrom: ['**/*.{js,jsx,ts,tsx}', '!**/*.d.ts', '!**/node_modules/**'],
//   moduleNameMapper: {
//       // Handle CSS imports (with CSS modules)
//       // https://jestjs.io/docs/webpack#mocking-css-modules
//       '^.+\\.module\\.(css|sass|scss)$': 'identity-obj-proxy',

//       // Handle CSS imports (without CSS modules)
//       '^.+\\.(css|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',

//       // Handle image imports
//       // https://jestjs.io/docs/webpack#handling-static-assets
//       '^.+\\.(jpg|jpeg|png|gif|webp|svg)$': `<rootDir>/__mocks__/fileMock.js`,

//       // Handle module aliases
//       '^@/utilities/(.*)$': '<rootDir>/shared/utilities/$1',
//       '^@/constants/(.*)$': '<rootDir>/shared/constants/$1',
//       '^@/styles/(.*)$': '<rootDir>/shared/styles/$1',
//       '^@/UI/(.*)$': '<rootDir>/components/UI/$1',
//       '^@/widgets/(.*)$': '<rootDir>/components/widgets/$1',
//       '^@/features/(.*)$': '<rootDir>/features/$1',
//       '^@/hooks/(.*)$': '<rootDir>/shared/hooks/$1'
//   },
//   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
//   testPathIgnorePatterns: ['<rootDir>/node_modules/', '<rootDir>/.next/'],
//   transform: {
//       // Use babel-jest to transpile tests with the next/babel preset
//       // https://jestjs.io/docs/configuration#transform-objectstring-pathtotransformer--pathtotransformer-object
//       '^.+\\.(js|jsx|ts|tsx)$': ['babel-jest', { presets: ['next/babel'] }]
//   },
//   transformIgnorePatterns: ['/node_modules/', '^.+\\.module\\.(css|sass|scss)$'],
//   reporters: ['default', 'jest-junit']
// };
