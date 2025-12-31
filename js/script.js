function sendAI() {
  const text = document.getElementById("userInput").value;
  const encodedText = encodeURIComponent(text);

  fetch(`https://cristopher-subcordiform-lacey.ngrok-free.dev/api/ai?text=${encodedText}`)
    .then(res => res.json())
    .then(data => {
      document.getElementById("output").innerText = data.reply;
    })
    .catch(err => {
      console.error(err);
      document.getElementById("output").innerText = "AI error";
    });
}
 
