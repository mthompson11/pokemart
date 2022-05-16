import { useEffect} from "react";
import * as ordersAPI from '../../utilities/orders-api'
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import './PaymentSuccessPage.css'

export default function PaymentSuccessPage({ cart, setCart }){
    
    useEffect(function(){
        async function markCartPaid(){
            await ordersAPI.markCartPaid()
            const newCart = await ordersAPI.getCart();
            setCart(newCart);
        };
        markCartPaid();
      }, []);

    const navigate = useNavigate()
    
    return(
        <div className="success-container">
            <h1>Payment Success!</h1>
            <Button variant='contained' sx={{ borderRadius: 10 }} onClick={() => navigate('/')}>
                Keep Shopping!
            </Button>
        </div>
    );
};