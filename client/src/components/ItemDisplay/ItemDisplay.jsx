import { useContext } from 'react';
import './ItemDisplay.css';
import { StoreContext } from '../../Context/StoreContext';
import ShopItem from '../ShopItem/ShopItem';

const ItemDisplay = ({ category }) => {
  const { shop_list } = useContext(StoreContext);

  const renderShopList = () => {
    if (!shop_list) {
      return null; // or return a loading indicator or message
    }

    const shopItems = [];
    for (let index = 0; index < shop_list.length; index++) {
      const item = shop_list[index];
      if (category === 'All' || category === item.category) {
        console.log(`Rendering item: ${item.name}, Image: ${item.image}`);
        shopItems.push(
          <ShopItem
            key={index}
            image={item.image}
            name={item.name}
            description={item.description}
            price={item.price}
            id={item._id}
          />
        );
      }
    }
    return shopItems;
  };

  return (
    <div className="shop-display" id="shop-display">
      <h2>Coffee</h2>
      <div className="shop-display-list">
       
      </div>
    </div>
  );
};

export default ItemDisplay;