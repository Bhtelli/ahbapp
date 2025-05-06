async function sendMessage() {
  const input = document.getElementById("user-input");
  const message = input.value.trim();
  if (!message) return;

  addMessage("user", message);
  input.value = "";

  try {
    const response = await fetch("https://localhost:7137/api/chatbot", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: message })
    });

    if (!response.ok) throw new Error("API yanıtı başarısız");

    const data = await response.json();
    addMessage("bot", data.response);
  } catch (error) {
    console.error("Hata:", error);
    addMessage("bot", "Sunucuyla bağlantı kurulamadı.");
  }
}

function addMessage(sender, text) {
  const chatBox = document.getElementById("chat-box");
  const message = document.createElement("p");
  message.className = sender;
  message.textContent = text;
  chatBox.appendChild(message);
  chatBox.scrollTop = chatBox.scrollHeight;
}
