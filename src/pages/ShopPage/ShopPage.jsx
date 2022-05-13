import { useState, useEffect, useRef } from 'react'
import CategoryList from '../../components/CategoryList/CategoryList'
import ItemList from '../../components/ItemList/ItemList';
import * as itemsAPI from '../../utilities/itemsAPI'
import './ShopPage.css'

export default function ShopPage(){
    const [items, setItems] = useState([]);
    const [activeCat, setActiveCat] = useState('');
    const categoriesRef = useRef([]);

    useEffect(function() {
        async function getItems() {
          const items = await itemsAPI.getAll();
          categoriesRef.current = items.reduce((cats, item) => {
            const cat = item.category.name;
            return cats.includes(cat) ? cats : [...cats, cat]
          }, []);
          setActiveCat(categoriesRef.current[1]);
          setItems(items);
        }
        getItems();
      }, []);

    return(
        <div id="shop-page-div">
          <CategoryList
            categories={categoriesRef.current}
            activeCat={activeCat}
            setActiveCat={setActiveCat}
            id="cat-list"
          />
          <ItemList
          items={items.filter(item => item.category.name === activeCat)}
          />
        </div>
    );
};