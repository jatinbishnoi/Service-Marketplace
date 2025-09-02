import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import authRoutes from './routes/auth.js';

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb+srv://jatinkumar160902_db_user:MF3tVm1Q3VUYooyf@cluster0.omhr9qw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api/auth', authRoutes);

app.listen(5000, () => console.log('Server running on port 5000'));