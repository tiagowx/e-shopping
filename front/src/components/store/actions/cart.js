const Increment = (cart, product) => {
  return {
    type: 'INCREMENT_TO_CART',
    cart,
    product
  }
}

export default {
  Increment
}