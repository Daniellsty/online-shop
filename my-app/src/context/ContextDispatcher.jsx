export function reducerHandler(state, action) {
    switch (action.type) {
      case "ADD_TO_CART": {
        console.log(state);
        const updatedCart = [...state.cart];
        const index = updatedCart.findIndex((item) => {
          return item.id === action.cart.id;
        });
  
        if (index < 0) {
          state.cart.push({ ...action.cart, quantity: 0 });
        } else {
          const updatedItem = { ...updatedCart[index] };
          updatedItem.quantity++;
          updatedCart[index] = updatedItem;
        }
        return { ...state, cart: updatedCart, total:state.total + action.cart.price };
      }
    
      default:
        return state;
        break;
    }
  }
  