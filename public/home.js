async function fetchUpdates() {
    const updatesDiv = document.getElementById("updates");

    try {
        const response = await fetch("https://www.fragpunk.com/index.html#/news", {
            mode: "no-cors"
        });

        if (!response.ok) {
            throw new Error("Impossible de récupérer les mises à jour.");
        }

        const text = await response.text();
        updatesDiv.innerHTML = `<p>Dernières nouvelles récupérées. Vérifiez la console.</p>`;
        console.log(text); // Vérifie dans la console ce qui est récupéré

    } catch (error) {
        updatesDiv.innerHTML = "Erreur lors de la récupération des mises à jour.";
        console.error(error);
    }
}

// Charger les mises à jour au démarrage
window.onload = fetchUpdates;
