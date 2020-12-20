import express from 'express';
import cors from 'cors';

const app = express();
const port = 3005;

app.use(cors());

app.get('/', (req, res) => res.send('Hi there!'));

app.listen(port, () => console.log(`Demo server listening on port ${port}!`))