// For network purposes like fetching data

// URL for fetching products
const productsUrl = 'https://fakestoreapi.com/products';

// Fetch products
export async function fetchProducts() {
  try {
    const response = await fetch(productsUrl);
    if (!response.ok) throw new Error('Request of products failed');
    const fetchedProducts = await response.json();
    return fetchedProducts;
  } catch (error) {
    console.error(error);
  }
}
