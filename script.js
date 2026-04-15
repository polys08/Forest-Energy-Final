// =====================
// MENU HAMBURGUER
// =====================
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

if (hamburger && nav) {
    hamburger.addEventListener('click', () => {
        nav.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

const links = document.querySelectorAll('.nav-list a');

links.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

console.log("JS funcionando");

// =====================
// INFO DO JOGO
// =====================
const nomedojogo = "Forest Energy";
const anolancamento = 2026;
const desenvolvedor = "Polyana Lima";
const genero = "Plataforma";
const classificacao = 8;

const info = document.getElementById("infoJogo");

if (info) {
    info.innerText =
        `${nomedojogo} | Ano: ${anolancamento} | Dev: ${desenvolvedor} | Gênero: ${genero} | Classificação: ${classificacao}+`;
}

// =====================
// PROMPT JOGADOR
// =====================
let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));

const mensagem = document.getElementById("mensagem");

if (mensagem) {
    mensagem.innerText = `Bem-vindo a floresta, ${nome}!`;
}

// =====================
// CONTEÚDO SENSÍVEL (BLUR)
// =====================
const imagens = [
    document.getElementById("conteudosensivel"),
    document.getElementById("conteudosensivel2"),
    document.getElementById("conteudosensivel3")
];

if (idade >= 8) {
    alert(`Jogador ${nome}, acesso liberado`);

    imagens.forEach(img => {
        if (img) img.style.filter = "blur(0px)";
    });

} else {
    alert("Acesso negado");

    imagens.forEach(img => {
        if (img) img.style.filter = "blur(10px)";
    });
}

// =====================
// ANO DE LANÇAMENTO
// =====================
const anoAtual = new Date().getFullYear();

if (anoAtual === anolancamento) {
    alert("Grande Lançamento!");
}

// =====================
// TEMA (DARK MODE FUNCIONAL)
// =====================

function trocarTema() {
    document.body.classList.toggle("dark");

    const botao = document.getElementById("botaoTema");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("tema", "dark");
        if (botao) botao.innerText = "☀️";
    } else {
        localStorage.setItem("tema", "light");
        if (botao) botao.innerText = "🌙";
    }
}

// aplicar tema ao carregar página (index OU persona)
window.addEventListener("DOMContentLoaded", () => {
    const temaSalvo = localStorage.getItem("tema");
    const botao = document.getElementById("botaoTema");

    if (temaSalvo === "dark") {
        document.body.classList.add("dark");
        if (botao) botao.innerText = "☀️";
    } else {
        document.body.classList.remove("dark");
        if (botao) botao.innerText = "🌙";
    }

});

btnJogar.addEventListener("click", function (e) {
    e.preventDefault();

    game.classList.remove("hidden");

    game.scrollIntoView({ behavior: "smooth" });
});