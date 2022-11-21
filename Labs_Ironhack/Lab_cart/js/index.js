// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  let subtotal = 0;
  const price = product.querySelector('.price span');
  const quantity = product.querySelector('.quantity input');
  const priceValue = parseFloat(price.innerText);
  const quantityValue = quantity.valueAsNumber;
  const subtotalValue = priceValue * quantityValue;
  const subTotal = product.querySelector('.subtotal span');
  subTotal.innerText = subtotalValue;
  return subtotalValue;
  };


function calculateAll() {
  const products = document.querySelector('.product');
  let totalValue = 0;
  for (let product of products) {
    totalValue += updateSubtotal(product);
    document.querySelector('#total-value span').innerText = totalValue;
  }
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  const row = target.parentNode.parentNode;
  console.log(row);
  const parent = row.parentNode;
  console.log(parent);
  parent.removeChild(row);
  calculateAll();
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
