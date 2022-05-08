const Add = (cart, product) => {
  return {
    type: 'ADD_TO_CART',
    cart,
    product
  }
}
const Remove = (cart, product) => {
  return {
    type: 'REMOVE_TO_CART',
    cart,
    product
  }
}
const IncrementItem = (cart, product) => {
  return {
    type: 'INCREMENT_TO_ITEM',
    cart,
    product
  }
}
const DecrementItem = (cart, product) => {
  return {
    type: 'DECREMENT_TO_ITEM',
    cart,
    product
  }
}
const ChangeCart = (localCart) => {
  return {
    type: 'CHANGE_CART',
    localCart
  }
}

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  Add,
  Remove,
  IncrementItem,
  DecrementItem,
  ChangeCart
}