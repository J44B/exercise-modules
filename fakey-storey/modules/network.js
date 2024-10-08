// For network purposes like fetching data

// URL for fetching products
const productsUrl = 'https://fakestoreapi.com/products';

// Fetch products
export async function fetchProducts() {
  try {
    const response = await fetch(productsUrl);
    if (!response.ok) throw new Error('Request of products failed');
    const productArray = await response.json();
    displayProducts(productArray);
  } catch (error) {
    console.error(error);
  }
}
