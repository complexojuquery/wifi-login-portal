function handleCredentialResponse(response) {
  // O token JWT está aqui
  const idToken = response.credential;

  // Envie o token ao seu backend (Debian) para validar e liberar o MAC
  fetch("https://SEU_SERVIDOR_DEBIAN/liberar.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ idToken })
  })
  .then(res => res.json())
  .then(data => {
    if (data.sucesso) {
      alert("✅ Acesso liberado! Você já pode usar o Wi-Fi.");
      window.location.href = "https://google.com"; // ou outro site liberado
    } else {
      alert("❌ Erro ao liberar acesso.");
    }
  })
  .catch(err => {
    console.error(err);
    alert("❌ Erro na comunicação com o servidor.");
  });
}

