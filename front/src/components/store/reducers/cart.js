import productList from "./product";

const INITIAL_STATE = {
  value: 0,
  products: productList,
  cart: [],
  total: 0
};

export default function cart(state = INITIAL_STATE, action) {

  switch (action.type) {
    case 'ADD_TO_CART': {
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
      return {
        ...state,
        total: state.cart.reduce((a, b) => a + b.price * b.quantity, 0),
        value: state.cart.reduce((a, b) => a + b.quantity, 0),
      }
    }
    case 'REMOVE_TO_CART': {
      if (!state.cart.includes(action.product)) {
        return null;
      }
      return {
        ...state,
        total: state.cart.reduce((a, b) => a + b.price * b.quantity, 0) - action.product.price * action.product.quantity,
        value: action.cart.value - action.product.quantity,
        cart: state.cart.filter(item => item.id !== action.product.id),
      }
    }
    case 'INCREMENT_TO_ITEM': {
      action.product.quantity++;
      return {
        ...state,
        value: state.cart.reduce((a, b) => a + b.quantity, 0),
        total: state.cart.reduce((a, b) => a + b.price * b.quantity, 0)
      }
    }
    case 'DECREMENT_TO_ITEM': {
      if (action.product.quantity > 0) {
        action.product.quantity--;
        return {
          ...state,
          value: state.cart.reduce((a, b) => a + b.quantity, 0),
          total: state.cart.reduce((a, b) => a + b.price * b.quantity, 0)
        }
      } else
        return state;
    }
    case 'CHANGE_CART': {
      return state = action.localCart
    }

    default:
      return state;

  }

}
