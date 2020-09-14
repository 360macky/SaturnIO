export const initialState = {
  basket: [],
};

const reducer = (state, action) => {

  switch(action.type) {
    case 'ADD_TO_BASKET':
      return {
        ...state
      }
      break;
  }

}

export default reducer;
