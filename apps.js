const titulo = document.getElementById("titulo-principal");
const paragrafo = document.getElementById("paragrafo-boas-vindas");
const btnAlterar = document.getElementById("btn-alterar-texto");

console.log(titulo.textContent);
console.log(paragrafo.textContent);

btnAlterar.addEventListener("click", function() {

    titulo.textContent = "DOM Manipulado com Sucesso!";

    
    paragrafo.textContent = "Olá! O texto foi alterado dinamicamente com JavaScript usando a propriedade textContent.";

});

const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const botao = document.getElementById("btn-somar");
const resultado = document.getElementById("resultado-soma");

botao.addEventListener("click", function() {

    const numero1 = parseFloat(valor1.value);
    const numero2 = parseFloat(valor2.value);

    const soma = numero1 + numero2;

    resultado.textContent = "Resultado da soma: " + soma;

});

console.log(titulo.textContent);
console.log(paragrafo.textContent);

botao.addEventListener("click", function() {


    titulo.textContent = "DOM Manipulado com Sucesso!";

    paragrafo.textContent = "Olá! Seja bem-vindo! O conteúdo foi alterado com sucesso usando JavaScript.";

});

const btnCriar = document.getElementById("btn-criar-aviso");
const container = document.getElementById("container-avisos");

btnCriar.addEventListener("click", function() {

    const aviso = document.createElement("div");

    aviso.className = "aviso-item";

    const texto = document.createElement("span");
    texto.textContent = "Atenção! Este é um aviso importante.";

    const btnFechar = document.createElement("button");
    btnFechar.textContent = "X";

    btnFechar.addEventListener("click", function() {
        aviso.remove();
    });

    aviso.appendChild(texto);
    aviso.appendChild(btnFechar);

    container.appendChild(aviso);

});


const btnToggleTema = document.getElementById("btn-toggle-tema");
const card = document.getElementById("modulo-4");

botao.addEventListener("click", function() {

    card.classList.toggle("dark-theme");

});

const celulas = document.getElementsByClassName("situacao");

for (const celula of celulas) {

    if (celula.textContent === "Concluído") {

        
        celula.style.color = "#22c55e";

    } else if (celula.textContent === "Pendente") {

        celula.style.color = "#ef4444";

    }

}

const painel = document.getElementById("painel-botoes");
const log = document.getElementById("log-botao");

painel.addEventListener("click", function(e) {

    if (e.target.nodeName === "BUTTON") {

        log.textContent = "Botão clicado: " + e.target.textContent;

    }

});

const caixa = document.getElementById("caixa-destaque");
const btnAlta = document.getElementById("btn-prioridade-alta");
const btnBaixa = document.getElementById("btn-prioridade-baixa");
const btnLimpar = document.getElementById("btn-limpar-atributo");
const info = document.getElementById("info-atributo");

function atualizarInfo() {
    const prioridade = caixa.getAttribute("data-prioridade");

    info.textContent = prioridade || "Nenhum";
}

btnAlta.addEventListener("click", function() {
    caixa.setAttribute("data-prioridade", "alta");
    atualizarInfo();
});

btnBaixa.addEventListener("click", function() {
    caixa.setAttribute("data-prioridade", "baixa");
    atualizarInfo();
});

btnLimpar.addEventListener("click", function() {
    caixa.removeAttribute("data-prioridade");
    atualizarInfo();
});


let tarefas = [];

const lista = document.getElementById("lista-tarefas");
const formulario = document.getElementById("form-tarefa");
const inputTitulo = document.getElementById("input-tarefa-titulo");

function render() {

    lista.innerHTML = "";

    tarefas.forEach(function(tarefa) {

        const item = document.createElement("li");

        item.textContent = tarefa.titulo;

        lista.appendChild(item);

    });
}

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    const titulo = inputTitulo.value;

    tarefas.push({
        titulo: titulo
    });

    render();

    inputTitulo.value = "";

});