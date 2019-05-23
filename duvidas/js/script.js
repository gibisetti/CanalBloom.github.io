let mostrar = document.getElementById('show');
let esconder = document.getElementById('hide');
let pergunta = document.getElementById('pergunta');
let resposta = document.getElementById('resposta');
let botoes = document.querySelector('.btnShow');


// mostrar/esconder p clicando na pergunta
pergunta.addEventListener('click', function () {
    if (resposta.style.display == "none") {
        resposta.style.display = "block";
        mostrar.classList.remove('active');
        esconder.classList.add('active');
    } else {
        resposta.style.display = "none";
        mostrar.classList.add('active');
        esconder.classList.remove('active');
    }
});


// mostrar/esconder p clicando nos botões
mostrar.addEventListener('click', function () {
    resposta.style.display = "block";
    mostrar.classList.remove('active');
    esconder.classList.add('active');
});

esconder.addEventListener('click', function () {
    resposta.style.display = "none";
    mostrar.classList.add('active');
    esconder.classList.remove('active');
});



// // mostrar/esconder p botoes com 1 função
// botoes.addEventListener('click' , function() {
//     if (resposta.style.display == "none") {
//         resposta.style.display = "block";
//         mostrar.classList.remove('active');
//         esconder.classList.add('active');
//     } else {
//         resposta.style.display = "none";
//         mostrar.classList.add('active');
//         esconder.classList.remove('active');
//     }
// });


// // mostrar/esconder p clicando na pergunta com on click
// function hideAndShow() {

//     if (resposta.style.display == "none") {
//         resposta.style.display = "block";
//         mostrar.classList.remove('active');
//         esconder.classList.add('active');
//     } else {
//         resposta.style.display = "none";
//         mostrar.classList.add('active');
//         esconder.classList.remove('active');
//     }
// }