import { ADD_CART, FINISH_ORDER, REMOVE_CART } from "./actionsType"

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CART:
      return [...state, action.product]

    case REMOVE_CART:
      const indexProduct = state.findIndex((item) => item === action.product)
      const remove = state.filter((product, index) => index !== indexProduct)
      return remove

    case FINISH_ORDER:
      return []

    default:
      return state
  }
}

export default cartReducer
