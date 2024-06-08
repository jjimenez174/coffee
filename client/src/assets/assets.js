import cafesitologowords from './cafesitologowords.png'
import basket_icon from './basket_icon.png'
import add_icon from './add_icon.png'
import green_icon from './green_icon.png'
import red_icon from './red_icon.png'
import brazil from './Brazil.webp'
import coffee_grinder from './coffee_grinder.jpeg'
import colombia from './colombia.webp'
import costarica from './costarica.webp'
import electric_kettle from './electric_kettle.webp'
import ethiopia from './Ethiopia.webp'
import filtered_coffee from './filtered_coffee.webp'
import guatemala from './guatemala.webp'
import india from './India.webp'
import sumatra from './sumatra.webp'
import coffee_accs from './coffee_accs.avif'
import coffee_packaging from './coffee_packaging.webp'


export const assets = {
    cafesitologowords,
    basket_icon,
    add_icon,
    green_icon,
    red_icon
}
export const menu_list = [
{
    menu_name: "Coffee",
    menu_image: coffee_packaging
},
{
    menu_name: "Gadgets",
    menu_image: coffee_accs
}
]

export const shop_list = [
  {
    _id: "1",
    name: "Brazil Coffee",
    image: brazil,
    price: 30,
    description:"",
    category: "Coffee"
},
{
    _id: "2",
    name: "Colombia Coffee",
    image: colombia,
    price: 25,
    description: "",
    category: "Coffee"
},
{
    _id: "3",
    name: "Costa Rica Coffee",
    image: costarica,
    price: 25,
    description: "",
    category: "Coffee"
},
{
    _id: "4",
    name: "Guatemala Coffee",
    image: guatemala,
    price: 25,
    description: "",
    category: "Coffee"
},
{
    _id: "5",
    name: "Ethiopia Coffee",
    image: ethiopia,
    price: 30,
    description: "",
    category: "Coffee"
},
{
    _id: "6",
    name: "Inida Coffee",
    image: india,
    price: 30,
    description: "",
    category: "Coffee"
},
{
    _id: "7",
    name: "Sumatra Coffee",
    image: sumatra,
    price: 30,
    description: "",
    category: "Coffee"
},
{
    _id: "8",
    name: "Coffee Grinder",
    image: coffee_grinder,
    price: 80,
    description: "",
    category: "Accs"
},
{
    _id: "9",
    name: "Filtered Coffee",
    image: filtered_coffee,
    price: 50,
    description: "",
    category: "Accs"
},
{
    _id: "10",
    name: "Electric Kettle",
    image: electric_kettle,
    price: 120, 
    description: "",
    category: "Accs"
}
]