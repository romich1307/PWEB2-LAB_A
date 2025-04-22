function extraerCodigo() {
    const url = document.getElementById("urlInput").value.trim();
    const regex = /meet\.google\.com\/([a-zA-Z0-9\-]+)/;
    const match = url.match(regex);
  
    if (match && match[1]) {
      const codigo = match[1].replace(/-/g, ""); 
      document.getElementById("resultado").textContent = `Código de la sesión: ${codigo}`;
    } else {
      document.getElementById("resultado").textContent = "URL inválida, por favor verifica.";
    }
  }
  