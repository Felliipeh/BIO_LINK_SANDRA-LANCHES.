async function copyLink() {
  const url = window.location.href;
  const mensagem = `Confira todos os links oficiais do Sandra Lanches em um só lugar: ${url}`;

  try {
    // Tenta usar a API de compartilhamento do celular (se disponível)
    if (navigator.share) {
      await navigator.share({
        title: "Sandra Lanches | Links Oficiais",
        text: mensagem,
        url: url
      });
    } else {
      // Caso contrário, copia para a área de transferência
      await navigator.clipboard.writeText(mensagem);
      alert("Link copiado com sucesso!");
    }
  } catch (err) {
    console.error("Erro ao compartilhar:", err);
  }
}