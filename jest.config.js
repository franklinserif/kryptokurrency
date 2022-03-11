module.exports = {
  roots: ['.'],
  // The transform config just tells Jest to use ts-jest for ts / tsx files.
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  /** The testRegex tells Jest to look for tests in any __tests__ folder AND also any
   * files anywhere that use the (.test|.spec).(ts|tsx) extension
   * e.g. checkbox.test.tsx etc.
   */
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$',
  /**
   * The moduleFileExtensions tells Jest to recognize our file extensions.
   * This is needed as we add ts/tsx into the defaults (js|jsx|json|node).
   */
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  // ... ... ... TRUNCATED. Other parts as before ... ... ...

  // Setup Enzyme
  snapshotSerializers: ['enzyme-to-json/serializer'],
  setupFilesAfterEnv: ['<rootDir>/setupEnzyme.ts'],
};
