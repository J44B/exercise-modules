// For creating and manipulating DOM elements

export function CreateProductCard(data) {
  const card = document.createElement('div');

  card.classList.add(
    'bg-slate-100',
    'h-64',
    'w-52',
    'flex',
    'flex-col',
    'text-sm',
    'rounded'
  );

  const productName = document.createElement('p');
  productName.textContent = data.title;
  productName.classList.add('truncate', 'font-bold', 'p-1', 'mt-2');

  card.appendChild(productName);
  return card;
}
