let loja = document.getElementById("loja");

fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(produtos => {

    produtos.forEach(produto => {
      loja.innerHTML += `
        <div class="card my-2 mx-2" style="width: 18rem;">
          <img src="${produto.image}" style="max-height: 250px; height: 250px;"class="card-img-top" alt="Imagem de ${produto.title}">
          <div class="card-body">
            <h5 class="card-title">${produto.title}</h5>
            <p class="card-text">${produto.description}</p>
            <form>
              <input type="hidden" value="${produto.id}" />
              <button type="button" class="btn btn-danger" onClick="apagarElemento(this.parentNode)">Apagar</button>
            </form>
          </div>
        </div>
      `
    });
  });


let formulario = document.querySelector("#form-novo-produto");

formulario.addEventListener("submit", event => {
  event.preventDefault();

  let produto = document.querySelector("#nomeProduto").value;
  let preco = Number(document.querySelector("#preco").value);
  let categoria = document.querySelector("#categoria").value;
  let imagem = document.querySelector("#imagem").value;
  let descricao = document.querySelector("#descricao").value;

  fetch("https://fakestoreapi.com/products", {
    method: 'POST',
    body: JSON.stringify({
      title: produto,
      price: preco,
      category: categoria,
      image: imagem,
      description: descricao
    })
  })
  .then(response => response.json())
  .then(novoProduto => {
    loja.innerHTML += `
        <div class="card my-2 mx-2" style="width: 18rem;">
          <img src="${imagem}" style="max-height: 250px; height: 250px;"class="card-img-top" alt="Imagem de ${produto}">
          <div class="card-body">
            <h5 class="card-title">${produto}</h5>
            <p class="card-text">${descricao}</p>
          </div>
        </div>
      `
  })
});

function apagarElemento(elemento) {
  let id = elemento.querySelector("input").value;

  fetch(`https://fakestoreapi.com/products/${id}`, {
    method: 'DELETE'
  })
  .then(response => response.json())
  .then(response => {
    let elementoAlvo = elemento.parentNode.parentNode;
    elementoAlvo.style.display = 'none';
  })
}