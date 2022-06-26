import { useSelector } from "react-redux"
import { Header } from "../../components/Header"
import { OrderSummary } from "../../components/OrderSummary"
import { ProductCart } from "../../components/ProductCart"
import { ContainerProductsCart } from "./style"

export const Cart = () => {
  const { cart } = useSelector((state) => state)
  return (
    <>
      <Header />
      <>
        <OrderSummary />
        <ContainerProductsCart>
          <ul>
            {cart.map((product, index) => (
              <ProductCart key={index} product={product}></ProductCart>
            ))}
          </ul>
        </ContainerProductsCart>
      </>
    </>
  )
}
