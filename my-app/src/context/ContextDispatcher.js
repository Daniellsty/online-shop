export function reducerHandler(state, action) {
    switch (action.type) {
      case "ADD_TO_CART": {
        const updatedCart = [...state.cart];
        const index = updatedCart.findIndex((item) => {
          return item._id === action.cart._id;
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
      case "REMOVE": {
        const updatedCart = [...state.cart];
        const index = updatedCart.findIndex((item) => {
          return item._id === action.item._id;
        });
  
        const updatedItem = { ...updatedCart[index] };
  
        if (updatedItem.quantity === 1) {
          const filtered = updatedCart.filter((item) => {
            return item._id !== action.item._id;
          });
  
  
          return { ...state, cart: filtered ,total:state.total - action.item.price };
  
        } else {
          const updatedItem = { ...updatedCart[index] };
          updatedItem.quantity--;
          updatedCart[index] = updatedItem;
  
          return { ...state, cart: updatedCart,total:state.total - action.item.price  };
        }
      }
      default:
        return state;
        break;
    }
  }
  