// import functions
import { fetchProducts, CreateProductCard } from './modules/index.js';
// import { addToLocalStorage } from './modules/index.js';

addEventListener('DOMContentLoaded', async () => {
  const productContainer = document.getElementById('product-container');
  try {
    const products = await fetchProducts();

    products.forEach((product) => {
      // create a card
      const card = CreateProductCard(product); // declare variable for card!!
      // append card to container
      productContainer.appendChild(card);
    });
  } catch (error) {
    console.error(error);
  }
});
