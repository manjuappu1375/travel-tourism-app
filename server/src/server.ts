import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { connectMongoDB, connectPostgres } from './config/db';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));

await connectMongoDB();
await connectPostgres();

app.get('/', (req, res) => {
  res.send('🚀 Server is up and running!');
});

app.listen(PORT, () => {
  console.log(`✅ Server is listening on port ${PORT}`);
});
