const fs = require('fs').promises;

const readJson = (path) => fs.readFile(path)
  .catch(() => {
    throw [{ message: 'Проверьте имя и путь файла!' }];
  })
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      throw [{ message: 'Битый JSON!' }];
    }
  });
module.exports = readJson;
