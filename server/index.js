import express from 'express';
import cors from 'cors';
import routes from './routes.js'

const app = express();

app.use(express.json());
app.use(cors());

app.use('/notes', routes);

app.listen(5000, () => console.log('Server is listening on http://localhost:5000'));
