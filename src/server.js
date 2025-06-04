import express from 'express';
import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;
// Configuration de la connexion PostgreSQL
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});
// Middleware pour parser le JSON
app.use(express.json());
// Route de test
app.get('/', (_req, res) => {
    res.send('Hello World');
});
// Route pour récupérer les utilisateurs
app.get('/users', async (_req, res) => {
    const users = await pool.query('SELECT * FROM users');
    res.json(users.rows);
});
// Route pour ajouter un utilisateur
app.post('/users', async (req, res) => {
    const { username, name, email, role } = req.body;
    try {
        const result = await pool.query('INSERT INTO users (username, name, email, role, last_login) VALUES ($1, $2, $3, $4, $5) RETURNING *', [username, name, email, role, null]);
        res.status(201).json(result.rows[0]);
    }
    catch (error) {
        console.error(error);
        res.status(500).send('Erreur serveur');
    }
});
// Route pour modifier un utilisateur
app.put('/users/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    const result = await pool.query('UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *', [name, email, id]);
    res.json(result.rows[0]);
});
// Route pour supprimer un utilisateur
app.delete('/users/:id', async (req, res) => {
    const { id } = req.params;
    await pool.query('DELETE FROM users WHERE id = $1', [id]);
    res.sendStatus(204);
});
// Lancer le serveur
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
