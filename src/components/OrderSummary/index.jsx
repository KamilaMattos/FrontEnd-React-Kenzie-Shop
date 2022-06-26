import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"
import { cartThunk } from "../../store/modules/cart/thunk"
import { OrderSummaryStyle } from "./style"
import { BsCartCheck } from "react-icons/bs"

export const OrderSummary = () => {
  const { cart } = useSelector((state) => state)
  const dispatch = useDispatch()
  const history = useHistory()

  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0)

  const finishOrder = () => {
    history.push("/")
    dispatch(cartThunk())
  }

  return (
    <OrderSummaryStyle>
      <div>
        <p>Resumo da sua compra</p>
      </div>
      <span>
        Total: 
        {totalPrice.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </span>
      <button onClick={finishOrder}>
        Finalizar <BsCartCheck size={15} />
      </button>
    </OrderSummaryStyle>
  )
}
