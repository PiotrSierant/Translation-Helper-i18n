import express from 'express';
import { router } from './routes/server.js'
const app = express();
const port = 3000;

app.use('/', router);
app.listen(port, () => console.log('Server is listening on port 3000'));