
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
        if (nav && hamburger) {
            nav.classList.remove('active');
            hamburger.classList.remove('active');
        }
    });
});

console.log("JS funcionando");


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


let nome = prompt("Digite seu nome:");
let idade = Number(prompt("Digite sua idade:"));

const mensagem = document.getElementById("mensagem");

if (mensagem && nome) {
    mensagem.innerText = `Bem-vindo a floresta, ${nome}!`;
}


if (idade < 8) {

    document.body.classList.add("site-blur");

    const overlay = document.createElement("div");
    overlay.innerHTML = `
        <div style="background:#222;color:white;padding:30px;border-radius:10px;text-align:center;">
            <h2>Acesso negado</h2>
            <p>Você precisa ter pelo menos 8 anos</p>
        </div>
    `;

    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,0.85)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";

    document.body.appendChild(overlay);

} else {
    console.log("Acesso liberado");
}

const anoAtual = new Date().getFullYear();

if (anoAtual === anolancamento) {
    alert("Grande Lançamento!");
}


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


const btnJogar = document.querySelector(".btn-img");
const game = document.querySelector(".game-frame");

if (btnJogar && game) {
    btnJogar.addEventListener("click", function (e) {
        e.preventDefault();
        game.classList.remove("hidden");
        game.scrollIntoView({ behavior: "smooth" });
    });
}