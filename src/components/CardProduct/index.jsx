import { useDispatch } from "react-redux/es/exports"
import { cartThunk } from "../../store/modules/cart/thunk"
import { BsCartPlusFill } from "react-icons/bs"
import { LiStyled } from "./style"

export const CardProduct = ({ product }) => {
  const dispatch = useDispatch()

  const addCart = () => {
    dispatch(cartThunk(product, true))
  }

  return (
    <LiStyled>
      <img src={product.img} alt={product.name} />
      <h2>{product.name}</h2>
      <div>
        <span>{product.category}</span>
      </div>
      <p>
        {product.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <button onClick={addCart}>
        Adicionar
        <BsCartPlusFill size={15} />
      </button>
    </LiStyled>
  )
}
