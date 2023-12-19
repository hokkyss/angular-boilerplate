const buildLintCommand = (filenames) => 'yarn lint';
const buildTestCommand = (filenames) => 'yarn test';
const buildE2ECommand = (filenames) => 'yarn e2e';

module.exports = {
  '*.{ts,js,tsx,jsx,json}': [buildLintCommand],
  '*.{ts,js,html,css}': [buildTestCommand],
};
