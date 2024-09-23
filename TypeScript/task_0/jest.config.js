module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // pour le DOM
  transform: {
    '^.+\\.ts$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'js'],
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],
};
