import ItemCard from "../ItemCard/ItemCard";
import './ItemList.css'

export default function ItemList ({ items }) {
    const itemCards = items.map(item =>
        <ItemCard
          key={item._id}
          item={item}
        />
      );
    return(
        <div className="item-list-container">
            { itemCards }
        </div>
    );
};