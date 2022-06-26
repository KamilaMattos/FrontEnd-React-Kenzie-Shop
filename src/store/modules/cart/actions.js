import { ADD_CART, FINISH_ORDER, REMOVE_CART } from "./actionsType"

export const addCart = (product) => ({
  type: ADD_CART,
  product,
})

export const removeCart = (product) => ({
  type: REMOVE_CART,
  product,
})

export const finishOrder = (product) => ({
  type: FINISH_ORDER,
})
