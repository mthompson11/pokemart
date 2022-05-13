import { useEffect} from "react";
import * as ordersAPI from '../../utilities/orders-api'
import Button from '@mui/material/Button';

export default function PaymentSuccessPage({ cart, setCart }){
    
    useEffect(function(){
        async function markCartPaid(){
            await ordersAPI.markCartPaid()
            const newCart = await ordersAPI.getCart();
            // eslint-disable-next-line
            setCart(newCart);
        };
        markCartPaid();
      }, []);
    
    return(
        <>
            <h1>Payment Success!</h1>
            <Button variant='contained' sx={{ borderRadius: 10 }}>
                Keep Shopping!
            </Button>
        </>
    );
};