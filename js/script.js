function sendAI() {
  const text = document.getElementById("userInput").value;
  const encoded = encodeURIComponent(text);

  fetch(`https://cristopher-subcordiform-lacey.ngrok-free.dev/api/ai?text=hello`)
    .then(response => response.json())
    .then(data => {
      document.getElementById("output").innerText = data.reply;
    })
    .catch(error => {
      console.error(error);
      document.getElementById("output").innerText = "AI error";
    });
}
