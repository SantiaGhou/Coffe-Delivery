import arabe from './Coffees/Árabe.png'
import cafeComLeite from './Coffees/CaféComLeite.png'
import capuccino from './Coffees/Capuccino.png'
import chocolateQuente from './Coffees/ChocolateQuente.png'
import cubano from './Coffees/Cubano.png'
import expresso from './Coffees/Expresso.png'
import expressoCremoso from './Coffees/ExpressoCremoso.png'
import havaiano from './Coffees/Havaiano.png'
import irlandes from './Coffees/Irlandês.png'
import latte from './Coffees/Latte.png'
import macchiato from './Coffees/Macchiato.png'
import mochaccino from './Coffees/Mochaccino.png'

export const coffees = [
  {
    id: 1,
    name: "Expresso Tradicional",
    tags: ["TRADICIONAL"],
    description: "O tradicional café feito com água quente e grãos moídos",
    price: 9.9,
    image: expresso
  },
  {
    id: 2,
    name: "Expresso Americano",
    tags: ["TRADICIONAL"],
    description: "Expresso diluído, menos intenso que o tradicional",
    price: 9.9,
    image: expresso
  },
  {
    id: 3,
    name: "Expresso Cremoso",
    tags: ["TRADICIONAL"],
    description: "Café expresso tradicional com espuma cremosa",
    price: 9.9,
    image: expressoCremoso
  },
  {
    id: 4,
    name: "Expresso Gelado",
    tags: ["TRADICIONAL", "GELADO"],
    description: "Bebida preparada com café expresso e cubos de gelo",
    price: 9.9,
    image: expresso
  },
  {
    id: 5,
    name: "Café com Leite",
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Meio a meio de expresso tradicional com leite vaporizado",
    price: 9.9,
    image: cafeComLeite
  },
  {
    id: 6,
    name: "Latte",
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
    price: 9.9,
    image: latte
  },
  {
    id: 7,
    name: "Capuccino",
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Bebida com canela feita de doses iguais de café, leite e espuma",
    price: 9.9,
    image: capuccino
  },
  {
    id: 8,
    name: "Macchiato",
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso misturado com um pouco de leite quente e espuma",
    price: 9.9,
    image: macchiato
  },
  {
    id: 9,
    name: "Mocaccino",
    tags: ["TRADICIONAL", "COM LEITE"],
    description: "Café expresso com calda de chocolate, pouco leite e espuma",
    price: 9.9,
    image: mochaccino
  },
  {
    id: 10,
    name: "Chocolate Quente",
    tags: ["ESPECIAL", "COM LEITE"],
    description: "Bebida feita com chocolate dissolvido no leite quente e café",
    price: 9.9,
    image: chocolateQuente
  },
  {
    id: 11,
    name: "Cubano",
    tags: ["ESPECIAL", "ALCOÓLICO", "GELADO"],
    description: "Drink gelado de café expresso com rum, creme de leite e hortelã",
    price: 9.9,
    image: cubano
  },
  {
    id: 12,
    name: "Havaiano",
    tags: ["ESPECIAL"],
    description: "Bebida adocicada preparada com café e leite de coco",
    price: 9.9,
    image: havaiano
  },
  {
    id: 13,
    name: "Árabe",
    tags: ["ESPECIAL"],
    description: "Bebida preparada com grãos de café árabe e especiarias",
    price: 9.9,
    image: arabe
  },
  {
    id: 14,
    name: "Irlandês",
    tags: ["ESPECIAL", "ALCOÓLICO"],
    description: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
    price: 9.9,
    image: irlandes
  }
]
