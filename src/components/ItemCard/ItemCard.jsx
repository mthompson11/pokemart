import './ItemCard.css'
import { Link } from 'react-router-dom';


export default function ItemCard({ item }) {
    return (
        <div className="item-card-container">
            <Link to={`/items/${ item._id }`}>
                <img className="shop-image" src={ item.img } alt=''/>
            </Link>
            <Link className='item-link' to={`/items/${ item._id }`}>
                { item.name }
            </Link>
            <p>{ `$${item.price}` }</p>
        </div>
    );
};