require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./middlewares/errorHandler');
const userRoute = require('./routers/userRoute');

const app = express();
app.use(bodyParser.json());

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (request, response) => {
  response.send();
});

app.use('/user', userRoute);

app.get('/healthcheck', (_req, res) => res.send('OK'));

app.use(errorHandler);

app.listen(3000, () => console.log('ouvindo porta 3000!'));
