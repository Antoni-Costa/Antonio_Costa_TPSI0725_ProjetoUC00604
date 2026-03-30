document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const apto = document.getElementById('apto').value;
    const mensagem = document.getElementById('message').value;

    if (nome.length < 3) {
        alert("Por favor, insira o seu nome completo.");
        return;
    }

    if (!email.includes("@")) {
        alert("Por favor, insira um e-mail válido.");
        return;
    }

    alert("Sucesso! A sua mensagem para o Condomínio " + apto + " foi enviada.");
    this.reset(); 
});

const botoes = document.querySelectorAll('.btn-reserva');
botoes.forEach(botao => {
    botao.addEventListener('mouseover', () => {
        botao.style.transform = "scale(1.1)";
    });
    botao.addEventListener('mouseout', () => {
        botao.style.transform = "scale(1.0)";
    });
});