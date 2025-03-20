function fetchStats() {
    const playerInput = document.getElementById("playerInput").value;
    const statsDiv = document.getElementById("stats");

    if (!playerInput) {
        statsDiv.innerHTML = "Veuillez entrer un pseudo.";
        return;
    }

    statsDiv.innerHTML = "Chargement...";

    setTimeout(() => {
        statsDiv.innerHTML = `
            <div class="card">
                <p><strong>${playerInput}</strong></p>
                <p>Kills: ${Math.floor(Math.random() * 100)}</p>
                <p>Victoires: ${Math.floor(Math.random() * 50)}</p>
            </div>
        `;
    }, 2000);
}
