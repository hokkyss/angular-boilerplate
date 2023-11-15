const alloyPrettier = require('eslint-config-alloy/.prettierrc')

/**
 * @type {import('prettier').Config}
 */
module.exports = {
  ...alloyPrettier,
  "overrides": [
    {
      "files": "*.html",
      "options": {
        "parser": "angular"
      }
    }
  ]
}
