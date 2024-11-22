import express from 'express';
import path from 'path';
import shoppingRoutes from './routes/shoppingRoutes';

const app = express();
const PORT = 3000;

app.use(express.json());

// Serve os arquivos estáticos da pasta 'views'
app.use(express.static(path.join(__dirname, 'src/views')));

// Rota para a API
app.use('/api/items', shoppingRoutes);

// Rota principal para carregar o HTML da interface
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'src/views/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
