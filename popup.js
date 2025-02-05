document.getElementById("checkGamePass").addEventListener("click", function() {
    let userId = "your-roblox-user-id"; // Replace with the real user ID
    let gamePassId = "your-gamepass-id"; // Replace with the real game pass ID
    
    // Send a request to your server to check the game pass
    fetch(`https://your-server.com/check-gamepass?userId=${userId}&gamePassId=${gamePassId}`)
      .then(response => response.json())
      .then(data => {
        alert("Game Pass Check: " + data.message);
      })
      .catch(error => {
        console.error("Error checking game pass:", error);
      });
  });
  