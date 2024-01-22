// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextJest = require('next/jest.js');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const config = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  preset: 'ts-jest',
};

module.exports = createJestConfig(config);
