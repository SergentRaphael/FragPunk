const express = require('express');
const path = require('path');

const app = express();

// Servir les fichiers statiques (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route principale
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Route pour contact
app.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, 'contact.html'));
});

// Route pour leaderboard
app.get('/leaderboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'leaderboard.html'));
});

// Route pour recherche
app.get('/search', (req, res) => {
  res.sendFile(path.join(__dirname, 'search.html'));
});

// Route pour les mises à jour
app.get('/updates', (req, res) => {
  res.json({ message: "Dernières mises à jour" });
});

// Démarrer le serveur sur un port dynamique fourni par Heroku
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Serveur démarré sur le port ${port}`);
});
