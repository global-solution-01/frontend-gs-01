document.getElementById("cadastro-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio tradicional do formulário
  
    // Coletando os dados do formulário
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email-cadastro").value;
    const telefone = document.getElementById("telefone").value;
    const senha = document.getElementById("senha-cadastro").value;
  
    // Criando um objeto com os dados do voluntário
    const voluntario = {
      nome: nome,
      email: email,
      telefone: telefone,
      senha: senha,
    };
  
    // Verificando se já existe um voluntário cadastrado com o mesmo email
    let voluntarios = JSON.parse(localStorage.getItem("voluntarios")) || [];
  
    const emailExistente = voluntarios.some(v => v.email === email);
  
    if (emailExistente) {
      alert("Este email já está cadastrado. Tente outro.");
      return;
    }
  
    // Salvando os dados do voluntário no localStorage
    voluntarios.push(voluntario);
    localStorage.setItem("voluntarios", JSON.stringify(voluntarios));
  
    // Exibindo mensagem de sucesso
    document.getElementById("mensagem-sucesso").style.display = "block";
    document.getElementById("cadastro-form").reset();
  });