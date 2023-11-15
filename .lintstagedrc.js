const path = require('node:path');

const buildEslintCommand = (filenames) => `eslint ${filenames.map((f) => path.relative(process.cwd(), f)).join(' ')}`;

module.exports = {
  '*.{ts,json,html,css}': [buildEslintCommand],
};
