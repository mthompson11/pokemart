import { useState, useEffect, useRef } from 'react'
import CategoryList from '../../components/CategoryList/CategoryList';

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
          setMenuItems(items);
        }
        getItems();
      }, []);

    return(
        <>
        <h1>Yo we made it!</h1>
        <CategoryList
          categories={categoriesRef.current}
          activeCat={activeCat}
          setActiveCat={setActiveCat}
        />
        </>
    );
};