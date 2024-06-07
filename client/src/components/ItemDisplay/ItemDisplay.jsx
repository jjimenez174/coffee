import React from 'react'
import './ItemDisplay.css'
import { StoreContext } from '../Context/StoreContext'

const ItemDisplay = ({category}) => {

    const {shop_list} = useContext(StoreContext)
  return (
    <div className = 'shop-display' id='shop-display'>
        <h2>Coffee</h2>
      <div className="shop-display-list">
        {shop_list.map((item, index) => {
            return <ShopItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
        })}
      </div>
    </div>
  )
}

export default ItemDisplay
