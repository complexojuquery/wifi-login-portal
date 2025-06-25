function handleCredentialResponse(response) {
  const idToken = response.credential;
  const mac = localStorage.getItem('mac');

  if (!mac) {
    alert("❌ MAC não encontrado.");
    return;
  }

  fetch("http://192.168.5.4/wifi-oauth/liberar.php", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ idToken, mac })
  })
  .then(res => res.json())
  .then(data => {
    if (data.sucesso) {
      alert("✅ Acesso liberado! Redirecionando...");
      window.location.href = "https://www.google.com"; // ou outro site liberado
    } else {
      alert("❌ Erro: " + data.erro);
    }
  })
  .catch(err => {
    console.error(err);
    alert("❌ Erro ao comunicar com o servidor.");
  });
}
