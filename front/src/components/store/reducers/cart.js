import productList from "./product";

const INITIAL_STATE = {
  value: 0,
  products: productList,
  cart: [],
  total: 0
};

export default function cart(state = INITIAL_STATE, action) {
  if (action.type === 'INCREMENT_TO_CART') {
    if (state.value === 0) {
      let item = {
        id: action.product.id,
        name: action.product.name,
        image: action.product.image,
        price: action.product.price,
        quantity: 1
      }
      state.cart.push(item);
    }
    else {
      let check = false;
      state.cart.map((item, key) => {
        if (item.id === action.product.id) {
          state.cart[key].quantity++;
          check = true;
        }
        return null;
      });
      if (!check) {
        let item = {
          id: action.product.id,
          name: action.product.name,
          image: action.product.image,
          price: action.product.price,
          quantity: 1
        }
        state.cart.push(item);
      }
    }
    state.total = state.cart.reduce((a, b) => (a) + (b.price * b.quantity), 0)

    return {
      ...state,
      value: (state.value + 1)
    }
  }
  return state;
}
