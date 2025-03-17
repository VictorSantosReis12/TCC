// Abertura
const div_abertura = document.getElementById("div-abertura");

window.addEventListener("load", () => {
    setTimeout(() => {
        div_abertura.style.display = "none";
    }, 2500);
});

// Seções

const secao_cadastrar_email = document.getElementById("secao-botoes-email");
const secao_cadastrar_senha = document.getElementById("secao-botoes-senha");
const secao_entrar = document.getElementById("secao-botoes-entrar");

// Informações

const nome = document.getElementById("nome");
const email = document.getElementById("email");

// Elementos

const campo_computador_email = document.getElementById("campo-computador-email");
const secao_ou = document.getElementById("secao-ou");

// Visualizar Senha

const olho_senha = document.getElementById("olho-senha");
const olho_senha_confirmar = document.getElementById("olho-senha-confirmar");
const olho_senha_entrar = document.getElementById("olho-senha-entrar");
const input_senha = document.getElementById("senha");
const input_senha_confirmar = document.getElementById("senha-confirmar");
const input_senha_entrar = document.getElementById("senha-entrar");

olho_senha.addEventListener("click", () => {
    if (input_senha.type === "password") {
        input_senha.type = "text";
        olho_senha.src = "../assets/olho-fechado.png";
    } else {
        input_senha.type = "password";
        olho_senha.src = "../assets/olho.png";
    };
});

olho_senha_confirmar.addEventListener("click", () => {
    if (input_senha_confirmar.type === "password") {
        input_senha_confirmar.type = "text";
        olho_senha_confirmar.src = "../assets/olho-fechado.png";
    } else {
        input_senha_confirmar.type = "password";
        olho_senha_confirmar.src = "../assets/olho.png";
    };
});

olho_senha_entrar.addEventListener("click", () => {
    if (input_senha_entrar.type === "password") {
        input_senha_entrar.type = "text";
        olho_senha_entrar.src = "../assets/olho-fechado.png";
    } else {
        input_senha_entrar.type = "password";
        olho_senha_entrar.src = "../assets/olho.png";
    };
});

// Botões

const botao_cadastrar = document.getElementById("botao-cadastrar");
const botao_proximo = document.getElementById("botao-proximo");
const botao_entrar = document.getElementById("botao-entrar");

botao_proximo.addEventListener("click", () => {
    if (nome.value && email.value) {
        secao_cadastrar_email.style.display = "none";
        secao_cadastrar_senha.style.display = "flex";
    } else {
        alert("É preciso preencher o nome e email!");
    };
});

botao_cadastrar.addEventListener("click", () => {
    botao_entrar.style.display = "none";
    botao_cadastrar.style.display = "none";
    secao_ou.style.display = "none";
    campo_computador_email.style.display = "flex";
    secao_cadastrar_email.style.height = "46.4vh";
});

botao_entrar.addEventListener("click", () => {
    secao_cadastrar_email.style.display = "none";
    secao_entrar.style.display = "flex";
});

// Setas

const seta_volta_senha = document.getElementById("seta-volta-senha");
const seta_volta_entrar = document.getElementById("seta-volta-entrar");
const seta_volta_celular_email = document.getElementById("seta-volta-celular-email");
const seta_volta_celular_senha = document.getElementById("seta-volta-celular-senha");
const seta_volta_celular_entrar = document.getElementById("seta-volta-celular-entrar");

seta_volta_senha.addEventListener("click", () => {
    secao_cadastrar_email.style.display = "flex";
    secao_cadastrar_senha.style.display = "none";
});

seta_volta_entrar.addEventListener("click", () => {
    secao_cadastrar_email.style.display = "flex";
    secao_entrar.style.display = "none";
});

seta_volta_celular_email.addEventListener("click", () => {
    botao_entrar.style.display = "flex";
    botao_cadastrar.style.display = "flex";
    secao_ou.style.display = "flex";
    campo_computador_email.style.display = "none";
    secao_cadastrar_email.style.height = "25.46vh";
});

seta_volta_celular_senha.addEventListener("click", () => {
    secao_cadastrar_email.style.display = "flex";
    secao_cadastrar_senha.style.display = "none";
});

seta_volta_celular_entrar.addEventListener("click", () => {
    secao_cadastrar_email.style.display = "flex";
    secao_entrar.style.display = "none";
});