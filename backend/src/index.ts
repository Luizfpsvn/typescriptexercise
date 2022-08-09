import express from 'express';

const app = express();

app.get('/', (req, res) => res.send('Hello world of Typescript'));
app.listen(3333);
