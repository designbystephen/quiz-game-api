const express = require('express');
const cors = require('cors');
const controllers = require('./controllers');
const { NotFound } = require('./modules/errors');

const app = express();

app.use(cors());

controllers(app);

app.use('*', (req, res) => {
    const response = new NotFound({});
    res.status(response.status).json(response.toJson());
});

app.listen(3000, () =>{
    console.log('http://localhost:3000');
});
