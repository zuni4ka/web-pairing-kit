import path from 'path';
import express from 'express';
import cors from 'cors';

const app = express();
const port = 3005;

app.use(cors());

app.get('/activities', (req, res) => {
    return res.sendFile(path.resolve('activities.json'));
});

app.listen(port, () => console.log(`Demo server listening on port ${port}!`))