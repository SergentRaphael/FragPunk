const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const cheerio = require('cheerio'); // Ajout pour extraire les données

const app = express();

// Servir les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes pour servir les fichiers HTML
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));
app.get('/contact', (req, res) => res.sendFile(path.join(__dirname, 'contact.html')));
app.get('/leaderboard', (req, res) => res.sendFile(path.join(__dirname, 'leaderboard.html')));
app.get('/search', (req, res) => res.sendFile(path.join(__dirname, 'search.html')));

// Route pour récupérer les mises à jour
app.get('/updates', async (req, res) => {
    try {
        const response = await fetch("https://www.fragpunk.com/news/", {
            headers: {
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/110.0.0.0 Safari/537.36"
            }
        });

        if (!response.ok) {
            throw new Error("Impossible de récupérer les mises à jour.");
        }

        const html = await response.text();
        const $ = cheerio.load(html);

        // Extraction des titres de news (AJUSTE SELON LE SITE)
        let news = [];
        $(".news-item").each((i, el) => { // Vérifie si `.news-item` est correct !
            let title = $(el).find(".news-title").text().trim();
            let link = $(el).find("a").attr("href");
            news.push({ title, link });
        });

        res.json(news.length ? news : { message: "Aucune news trouvée." });

    } catch (error) {
        console.error("Erreur lors de la récupération des mises à jour:", error);
        res.status(500).json({ error: "Impossible de récupérer les mises à jour." });
    }
});

// Démarrer le serveur
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur démarré sur le port ${port}`);
});
