const form = document.getElementById("contact-form");
    const status = document.getElementById("mensagem-status");

    form.addEventListener("submit", function (e) {
      e.preventDefault();

      const nome = document.getElementById("nome").value.trim();
      const email = document.getElementById("email").value.trim();
      const mensagem = document.getElementById("mensagem").value.trim();

      if (!nome || !email || !mensagem) {
        status.textContent = "Por favor, preencha todos os campos.";
        status.style.color = "red";
        return;
      }

      if (!email.includes("@")) {
        status.textContent = "Inclua um @ no endereço de email.";
        status.style.color = "red";
        return;
      }

      // Tudo certo
      status.textContent = "Mensagem enviada com sucesso!";
      status.style.color = "green";
      form.reset();
    });