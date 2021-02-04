const express = require('express');
const router = require('./routers');

const app = express();
const PORT = 3100;

app.use('/', express.static('public'));
app.use('/', router);

app.listen(PORT, () => {

});
