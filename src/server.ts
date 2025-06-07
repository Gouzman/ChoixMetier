import express, { Request, Response } from "express";
import { Pool } from "pg";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT ?? 3000;

// Configuration de la connexion PostgreSQL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

// Middleware pour parser le JSON
app.use(express.json());

// Route d'authentification
app.post("/api/auth/login", async (req: Request, res: Response) => {
  const { username, password } = req.body;

  try {
    const result = await pool.query(
      "SELECT id, username, name, email, role, last_login FROM users WHERE username = $1 AND password = $2",
      [username, password]
    );

    if (result.rows.length > 0) {
      const user = result.rows[0];
      // Mettre à jour la date de dernière connexion
      await pool.query("UPDATE users SET last_login = $1 WHERE id = $2", [
        new Date(),
        user.id,
      ]);
      res.json(user);
    } else {
      res.status(401).json({ error: "Identifiants incorrects" });
    }
  } catch (error) {
    console.error("Erreur d'authentification:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Route de test
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World");
});

// Route pour récupérer les utilisateurs
app.get("/users", async (_req: Request, res: Response) => {
  const users = await pool.query("SELECT * FROM users");
  res.json(users.rows);
});

// Route pour ajouter un utilisateur
app.post("/users", async (req: Request, res: Response) => {
  const { username, name, email, role, password } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (username, name, email, role, password, last_login) VALUES ($1, $2, $3, $4, $5, $6) RETURNING id, username, name, email, role, last_login",
      [username, name, email, role, password, null]
    );
    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send("Erreur serveur");
  }
});

// Route pour modifier un utilisateur
app.put("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name, email, password } = req.body;

  try {
    let result;
    if (password) {
      // Si un nouveau mot de passe est fourni, le mettre à jour aussi
      result = await pool.query(
        "UPDATE users SET name = $1, email = $2, password = $3 WHERE id = $4 RETURNING id, username, name, email, role, last_login",
        [name, email, password, id]
      );
    } else {
      // Sinon, mettre à jour uniquement le nom et l'email
      result = await pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING id, username, name, email, role, last_login",
        [name, email, id]
      );
    }
    res.json(result.rows[0]);
  } catch (error) {
    console.error("Erreur de mise à jour:", error);
    res.status(500).json({ error: "Erreur serveur" });
  }
});

// Route pour supprimer un utilisateur
app.delete("/users/:id", async (req: Request, res: Response) => {
  const { id } = req.params;
  await pool.query("DELETE FROM users WHERE id = $1", [id]);
  res.sendStatus(204);
});

// Lancer le serveur
app.listen(port, () => {
  console.log(`Serveur démarré sur http://localhost:${port}`);
});
