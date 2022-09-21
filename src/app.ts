import express from 'express';
import productsRoutes from './routes/productsRoutes';
import usersRoutes from './routes/usersRoutes';

const app = express();

app.use(express.json());
app.use(productsRoutes);
app.use(usersRoutes);

export default app;
