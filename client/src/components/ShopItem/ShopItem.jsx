import React from 'react'
import './ShopItem.css'
import { assests } from '../../assets/assets'

const ShopItem = ({id, name, price, description, image}) => {
    const [itemCount, setItemCount] = useState(0)
  return (
    <div className = 'shop-item'>
      <div className = 'shop-item-img-container'>
        <img className = 'shop-item-image'src={image} alt="" />
        {!itemCount
            ?<img className='add' onClick={()=>setItemCount(prev=>prev+1)} src={assests.add_icon} alt="" />
            :<div className = 'shop-item-counter'>
                <img onClick={()=>setItemCount(prev=>prev-1)} scr={assests.red_icon} />
                <p>{itemCount}</p>
                <img onClick={()=>setItemCount(prev=>prev+1)} scr={assests.green_icon_icon} />
            </div>
        }

      </div>
      <div className="shop-item-info">
        <p className="shop-iteam-desc">{description}</p>
        <p className="shop-item-price">${price}</p>
      </div>
    </div>
  )
}

export default ShopItem
