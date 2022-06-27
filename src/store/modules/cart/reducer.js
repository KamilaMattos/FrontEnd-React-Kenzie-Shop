import { ADD_CART, FINISH_ORDER, REMOVE_CART } from "./actionsType"

const initialState = () => {
  const cartStorage = localStorage.getItem("cart")
  if (cartStorage) {
    return JSON.parse(cartStorage)
  } else {
    return []
  }
}

const cartReducer = (state = initialState(), action) => {
  switch (action.type) {
    case ADD_CART:
      localStorage.setItem("cart", JSON.stringify([...state, action.product]))
      return [...state, action.product]

    case REMOVE_CART:
      const indexProduct = state.findIndex((item) => item === action.product)
      const remove = state.filter((product, index) => index !== indexProduct)
      localStorage.setItem("cart", JSON.stringify(remove))
      return remove

    case FINISH_ORDER:
      localStorage.clear()
      return []

    default:
      return state
  }
}

export default cartReducer
