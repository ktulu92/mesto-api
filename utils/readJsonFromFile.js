const fs = require('fs').promises;

const errorMessagePath = [{ message: 'Проверьте имя и путь файла!' }];
const errorMessageJson = [{ message: 'Битый JSON!' }];
const readJson = (path) => fs.readFile(path)
  .catch(() => {
    throw errorMessagePath;
  })
  .then((text) => {
    try {
      return JSON.parse(text);
    } catch (_) {
      throw errorMessageJson;
    }
  });
module.exports = readJson;
