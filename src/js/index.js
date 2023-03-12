/*
    Objetivo - quando clicarmos no botao temos que mostrar a imagem de fundo correspondente
*/

//    passo 1 - dar um jeito de pegar o elemento HTML dos botoes
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
//    passo 2 - dar um jeito de identificar o clique do usuario no botao
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //    passo 3 - desmarcar o bnotao selecionado anterior
        desmarcaBotaoSelecionado();
        //    passo 4 - marcar o botao clicado como se estivesse selecionado
        botao.classList.add('selecionado');
        //    passo 5 - esconder a imagem ativa de fundo
        esconderImagemAtiva();
        //    passo 6 - fazer aparecer a imagem correspondente ao botao clicado
        imagens[indice].classList.add('ativa');
    })
})


function esconderImagemAtiva() {
    const imgaemAtiva = document.querySelector('.ativa');
    imgaemAtiva.classList.remove('ativa');
}

function desmarcaBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

// setInterval(myFunction, 3000)

// function myFunction() {
//     alert('Hello');
// }

