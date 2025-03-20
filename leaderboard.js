window.onload = function() {
    const leaderboard = document.getElementById("leaderboard");
    const players = ["Player1", "Player2", "Player3", "Player4", "Player5"];

    players.forEach(player => {
        const li = document.createElement("li");
        li.textContent = `${player} - Score: ${Math.floor(Math.random() * 5000)}`;
        leaderboard.appendChild(li);
    });
};
