import LineItem from '../../components/LineItem/LineItem'
import Button from '@mui/material/Button';
import './OrderDetailPage.css'
import * as checkoutAPI from '../../utilities/checkout-api'
import OrderHistoryPage from '../OrderHistoryPage/OrderHistoryPage';

export default function OrderDetailPage({ order, handleChangeQty }){
    let lineItems
    if(order){
        lineItems = order.lineItems.map(item =>
            <LineItem
            lineItem={item}
            isPaid={order.isPaid}
            key={item._id}
            handleChangeQty={handleChangeQty}
          />)
    }else {
        lineItems = [];
    }

    async function handleCheckout(order){
        const res = await checkoutAPI.checkout(order)
        window.location.href = res.url
    };

    return(
        <div className="order-detail-container">
            <h1>Order Details</h1>
            { lineItems.length > 0 ? lineItems : <h1>Empty Cart</h1>}
            <Button variant='contained' onClick={() => handleCheckout(order)} sx={{ borderRadius: 10 }}>
                Checkout
            </Button>
        </div>
    );
};