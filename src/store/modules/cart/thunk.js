import { addCart, finishOrder, removeCart } from "./actions"
import { toast } from "react-toastify"

export const cartThunk = (product, state) => (dispatch) => {
  if (product) {
    if (state) {
      dispatch(addCart(product));
      toast.success('Produto adicionado ao carrinho!')
    } else {
      dispatch(removeCart(product))
      toast.success('Produto removido do carrinho!')
    }
  } else {
    dispatch(finishOrder())
    toast.success('Compra finalizada!')
  }
}
