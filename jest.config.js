/** @type {import('ts-jest').JestConfigWithTsJest} **/
module.exports = {
  testEnvironment: "node",
  roots: ['<rootDir>/src'],
  transform: {
    "^.+.tsx?$": ["ts-jest",{}],
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$', // Encuentra archivos de prueba
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node']
};