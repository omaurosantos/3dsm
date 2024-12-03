import express from 'express';
import cors from 'cors';
import connectDB from './database';
import petRoutes from './routes/petRoutes';

const app = express();
connectDB();

app.use(cors());
app.use(express.json());

app.use('/api', petRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
