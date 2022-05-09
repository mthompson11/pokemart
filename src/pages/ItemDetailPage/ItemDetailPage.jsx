import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as itemsAPI from '../../utilities/itemsAPI'

export default function ItemDetailPage(){
    const { id } = useParams()
    const [item, setItem] = useState(null)
    useEffect(function() {
        async function getItem() {
          const item = await itemsAPI.getById(id);
          setItem(item);
        };
        getItem();
      }, []);
    console.log(item)
    return(
        <div>
            <img src={ item.img } />
        </div>
    );
};