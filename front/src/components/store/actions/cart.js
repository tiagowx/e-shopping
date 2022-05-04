const Increment = (cart) => {
  console.log(cart);
  return {
    type: 'INCREMENT_TO_CART',
    cart
  }
}

export default {
  Increment
}