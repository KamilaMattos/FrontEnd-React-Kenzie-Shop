import cadeira from "../../../assets/imgs/cadeira.jpg"
import headset from "../../../assets/imgs/headset.jpg"
import play from "../../../assets/imgs/play.jpg"
import smartphone from "../../../assets/imgs/smartphone.jpg"
import teclado from "../../../assets/imgs/teclado.jpg"
import tv from "../../../assets/imgs/tv.jpg"

const products = [
  {
    name: "Cadeira Gamer Noblechairs EPIC",
    price: 3499,
    img: cadeira,
    category: "Cadeira gamer",
    id: 1,
  },

  {
    name: "Headset Gamer Fallen Morcego",
    price: 399,
    img: headset,
    category: "Periféricos",
    id: 2,
  },
  {
    name: "Console Sony Playstation 5 + Horizon Forbidden West",
    price: 4750,
    img: play,
    category: "Vídeo games",
    id: 3,
  },
  {
    name: "Smartphone Samsung Galaxy S20 FE 128GB",
    price: 2900,
    img: smartphone,
    category: "Smartphone",
    id: 4,
  },
  {
    name: "Teclado Mecânico Gamer Husky Gaming Blizzard",
    price: 230,
    img: teclado,
    category: "Periféricos",
    id: 5,
  },
  {
    name: "Smart TV Samsung 50 QLED 4K",
    price: 3400,
    img: tv,
    category: "Smart TV",
    id: 6,
  },
]

export const productsReducer = (state = products) => {
  return state
}
