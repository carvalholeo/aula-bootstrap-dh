fetch("https://fakestoreapi.com/products")
  .then(response => response.json())
  .then(response => console.log(response))