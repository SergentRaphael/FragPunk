const express = require('express');
const path = require('path');
const fetch = require('node-fetch'); // Ajout de node-fetch

const app = express();

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes pour servir les fichiers HTML
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));
app.get('/leaderboard', (req, res) => res.sendFile(path.join(__dirname, 'leaderboard.html')));
app.get('/search', (req, res) => res.sendFile(path.join(__dirname, 'search.html')));

// Route pour récupérer les mises à jour depuis le site officiel
app.get('/updates', async (req, res) => {
    try {
        const response = await fetch("https://www.fragpunk.com/news/index.html");
        if (!response.ok) {
            throw new Error("Impossible de récupérer les mises à jour.");
        }

        const text = await response.text();
        res.send(text); // Renvoie le contenu brut
    } catch (error) {
        res.status(500).json({ error: "Erreur lors de la récupération des mises à jour." });
    }
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
