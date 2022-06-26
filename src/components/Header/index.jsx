import { BsCart2 } from "react-icons/bs"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { HeaderStyle } from "./style"

export const Header = () => {
  const { cart } = useSelector((state) => state)

  return (
    <HeaderStyle>
      <Link to='/'>
        <h1>Kenzie Shop</h1>
      </Link>
      <div>
        <Link to='/cart'>
          <BsCart2 size={30} color='white' />
        </Link>
        <span>{cart.length}</span>
      </div>
    </HeaderStyle>
  )
}
