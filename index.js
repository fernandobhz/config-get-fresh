const path = require('path');

exports.get = (...args) => {
  delete require.cache[path.join(process.cwd(), `node_modules`, `config`, `lib`, `config.js`)];
  const config = require("config");
  return config.get(...args);
}
