export const initialState = {
  basket: [],
  user: null,
};

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

const ADD_TO_BASKET = 'ADD_TO_BASKET';
const REMOVE_FROM_BASKET = 'REMOVE_FROM_BASKET';
const SET_USER = 'SET_USER';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case ADD_TO_BASKET:
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (product) => product.id === action.id
      );
      let updatedBasket = [...state.basket];

      if (index >= 0) {
        updatedBasket.splice(index, 1);
      } else {
        console.warn(
          `Can't remove the product (id: ${action.id}) as its not in basket!`
        );
      }

      return {
        ...state,
        basket: updatedBasket,
      };
    default:
      return state;
  }
};

export default reducer;
