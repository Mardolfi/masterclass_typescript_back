import express from 'express'
import routes from './routes';
import cors from 'cors'

const app = express();
const port = 3333

app.use(cors())
app.use(routes);

app.listen(port, () => console.log(`Listening on ${port}`))