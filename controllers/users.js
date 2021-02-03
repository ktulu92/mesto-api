const path = require('path');
const readJson = require('../utils/readJsonFromFile');

const fileName = path.join(__dirname, '..', 'data', 'users.json');
const getUsers = (req, res) => {
  readJson(fileName)
    .then((users) => {
      res.send(users);
    })
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

const getUser = (req, res) => {
  const { id } = req.params;

  readJson(fileName)
    .then((users) => {
      const currentUser = users.find((user) => user._id === id);
      if (!currentUser) {
        return res.status(404).send({ message: 'Нет пользователя с таким id' });
      }

      return res.send(currentUser);
    })
    .catch((err) => {
      res.status(404).send(err);
    });
};

module.exports = { getUsers, getUser };
