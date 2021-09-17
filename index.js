exports.get = (...args) => {
  delete require.cache[join(__dirname, `node_modules`, `config`, `lib`, `config.js`)];
  const config = require("config");
  return config.get(...args);
}
