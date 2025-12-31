function sendAI() {
  const text = document.getElementById("userInput").value;

  fetch("https://NEW-NGROK-URL.ngrok-free.dev/api/ai", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text })
  })
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText = data.reply;
    })
    .catch(err => {
      console.error(err);
      document.getElementById("output").innerText = "AI error";
    });
}
