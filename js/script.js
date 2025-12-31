function sendText() {
  const text = document.getElementById("userInput").value;

  fetch("https://cristopher-subcordiform-lacey.ngrok-free.dev/api/echo", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: text })
  })
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").innerText = data.reply;
    })
    .catch(error => {
      document.getElementById("output").innerText =
        "Error talking to Python";
      console.error(error);
    });
}
