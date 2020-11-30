// window.onload = function() {
//   alert("Tela carregada com sucesso.");
// }

window.addEventListener("load", function () {
  //alert("Tela carregada com sucesso.");
});

// let lista = document.querySelector("#lista-principal");
// let link = document.querySelector("#link-home");
// let corpo = document.querySelector("#corpo");
// let hora = document.querySelector("#hora");
// let comida = document.querySelector("#exampleInputEmail1");
// let formulario = document.querySelector("#form-principal");
// let password = document.querySelector("#exampleInputPassword1");

// formulario.addEventListener("submit", function (event) {
//   if (password.value.length < 8) {
//     alert("senha não atende os requisitos")
//     event.preventDefault();
//   } else {
//     alert("formulario preenchido")
//   }
// })


// function internalHandler(e) {

//   e.preventDefault(); // required in some browsers
//   e.returnValue = ""; // required in some browsers
//   return "Custom message to show to the user"; // only works in old browsers
// }

// if (window.addEventListener) {

//   window.addEventListener('beforeunload', internalHandler, true);
// } else if (window.attachEvent) {
//   window.attachEvent('onbeforeunload', internalHandler);
// }

// comida.addEventListener("focus", function () {
//   console.log("entrou em foco nesse input")
//   //alert("Nesse campo, vc não deve digitar os pontos e o traço")
// });

// comida.addEventListener("blur", function () {
//   //alert("CPF Inválido")
// });

// comida.addEventListener("input", function () {
//   console.log("Input alterado");
// })

// lista.addEventListener("mouseover", function () {
//   console.log("Passou por cima de mim");
// });

// lista.addEventListener("mouseout", function () {
//   console.log("saiu de cima de mim");
// });

// link.addEventListener("click", function (event) {
//   event.preventDefault();
// });

// let meuIntervalo = setInterval(function () {
//   alert("Terminado com sucesso")
//   console.log("Executado")
// }, 3000);

// setTimeout(() => {
//   clearInterval(meuIntervalo);
//   console.log("Intervalo zero")
// }, 1000);

// const cores = [
//   "purple",
//   "black",
//   "orange",
//   "green",
//   "blue",
//   "crimson",
//   "red"
// ];

// setInterval(() => {
//   const posicao = Math.floor(Math.random() * 7);
//   corpo.style.backgroundColor = cores[posicao]
// }, 100);

// setInterval(function () {
//   hora.innerText = new Date();
// }, 500)

let cep = document.querySelector('#CEP');

cep.addEventListener("change", function(){
  let rua = document.querySelector("#rua")
  let bairro = document.querySelector("#bairro")
  let cidade = document.querySelector("#cidade")
  let estado = document.querySelector("#estado")
  let cepAtual = cep.value;

  fetch(`https://viacep.com.br/ws/${cepAtual}/json/`)
    .then(response => response.json())
    .then(response => {
      rua.value = response.logradouro;
      bairro.value = response.bairro;
      cidade.value = response.localidade;
      estado.value = response.uf;
    })
    .catch(error => {
      rua.value = "CEP inválido"
      bairro.value = '';
      cidade.value = '';
      estado.value = '';
      alert(error)
    })
})