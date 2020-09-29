import express, { json } from 'express';
import cors from 'cors';
import { initDB } from './db';
import health from './routes/health';
import companies from './routes/companies';
import jobPosts from './routes/jobPosts';

// Constants
const app = express();
const port = 4000;

// Setup
app.use(json());
app.use(cors());
initDB();

// Routes
app.get('/', health);
app.use('/companies', companies);
app.use('/posts', jobPosts);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
