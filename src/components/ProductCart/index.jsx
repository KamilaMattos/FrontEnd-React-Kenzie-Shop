import { useDispatch } from "react-redux"
import { cartThunk } from "../../store/modules/cart/thunk"

import { BsCartX } from "react-icons/bs"
import { LiCartStyled } from "./style"

export const ProductCart = ({ product }) => {
  const dispatch = useDispatch()

  const removeProduct = () => {
    dispatch(cartThunk(product, false))
  }

  return (
    <LiCartStyled>
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
      <button onClick={removeProduct}>
        Remover
        <BsCartX size={15} />
      </button>
    </LiCartStyled>
  )
}
