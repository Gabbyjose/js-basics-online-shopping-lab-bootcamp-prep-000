var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random()*100);
  cart.push({[item]:price})
  console.log(`${item} has been added to your cart.`)
  return cart;
 // write your code here
}

function viewCart() {
  var cartStr = 'In your cart, you have ';
  if (cart.length === 0){
    return `Your shopping cart is empty.`;
  }
  else {
    for (var prop in cart){
      cartStr += `${prop} at ${obj[prop]}`
    }
  }
  return cartStr;
}

function total() {
  var total =0;
  for (var n = 0; n<cart.length; n++){
    total += cart[n][1].parseInt();
  }
  return total;
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}
