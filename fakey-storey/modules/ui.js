// For creating and manipulating DOM elements

const productSection = document.getElementById('products');

export function displayProducts(products) {
  products.forEach((product) => {
    const productCard = document.createElement('div');
    productCard.textContent = product.title;
    productCard.classList.add('m-2');
    productSection.appendChild(productCard);
  });
}
