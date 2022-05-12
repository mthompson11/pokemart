import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import * as itemsAPI from '../../utilities/itemsAPI'
import Button from '@mui/material/Button';
import './ItemDetailPage.css'


export default function ItemDetailPage({handleAddToOrder}){
    const { id } = useParams()
    const [item, setItem] = useState(null)
    
    useEffect(function() {
        async function getItem() {
          const item = await itemsAPI.getById(id);
          setItem(item);
        };
        getItem();
      }, [id]);

    // async function stripetest(){
    //   const res = await checkoutAPI.checkout()
    //   window.location.href = res.url
    // };

    return(
      <div className="item-detail-container">
        <div className="item-detail-card">
          {item ?
            <>
              <img src={ item.img } alt='' />
              <div>
              <h1>{ item.name }</h1>
              <p>{ item.description }</p>
              <p>{ `$${item.price}` }</p>
              <p>{ item.stripeId }</p>
              <Button variant='contained' onClick={() => handleAddToOrder(item._id)} sx={{ borderRadius: 10 }}>
                Add to Cart
              </Button>
            </div>
            </>          
          :
          <></>
          }
        </div>
      </div>
    );
};