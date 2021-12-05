const path = require('path');

function resolve(pathResolve) {
  const basePath = path.resolve(__dirname, '..', '..');
  return path.resolve(basePath, pathResolve);
}

module.exports = { resolve };
