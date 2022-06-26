import { useSelector } from "react-redux"
import { CardProduct } from "../../components/CardProduct"
import { Header } from "../../components/Header"
import { ContainerProducts } from "./style"

export const Home = () => {
  const { products } = useSelector((state) => state)

  return (
    <>
      <Header />
      <ContainerProducts>
        <ul>
          {products.map((product, index) => (
            <CardProduct key={index} product={product}></CardProduct>
          ))}
        </ul>
      </ContainerProducts>
    </>
  )
}
