const readJson = require("../utils/readJsonFromFile");
const path = require("path");

const getCards = (req, res) => {
  const fileName = path.join(__dirname, "..", "data", "cards.json");
  readJson(fileName)
    .then((cards) => {
      res.send(cards);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
};

module.exports = { getCards };
