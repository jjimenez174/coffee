import React from 'react'
import './ExploreShop.css'
import { menu_list } from '../../assets/assets'

const ExploreShop = ({category, setCategory}) => {
  return (
    <div className ='explore-menu' id='explore-menu'>
      <h1>Shop</h1>
      <div className="explore-menu-list">
        {menu_list.map((item, index)=>{
            return (
                <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className='explore-menu-list-item'>
                    <img className={category===item.menu.name?"active":""} src={item.menu_image} alt="" />
                    <p>{item.menu_name}</p>
                </div>
            )
        })}
      </div>
      <hr />
    </div>
  )
}

export default ExploreShop
