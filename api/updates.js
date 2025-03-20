import fetch from 'node-fetch';

export default async function handler(req, res) {
  try {
    // Remplace cette URL par celle de la page des mises à jour de FragPunk
    const response = await fetch('https://www.fragpunk.com/news/');
    
    if (!response.ok) {
      return res.status(500).json({ error: 'Erreur lors de la récupération des mises à jour.' });
    }

    const data = await response.text(); // Récupérer le texte de la page
    
    // Envoie le contenu HTML ou les données spécifiques que tu veux afficher
    res.status(200).json({ message: 'Mises à jour récupérées', content: data });

  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des mises à jour.' });
  }
}
