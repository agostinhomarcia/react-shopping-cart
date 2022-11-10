import React from 'react'
import { Button } from '@mui/material';


//types
import { CartItemType } from '../App'


// styles

import { Wrapper } from './CartItem.styles';



type Props = {
    item: CartItemType;
    addToCart: (clickedItem: CartItemType) => void;
    removeFromCart: (id: number) => void;

}

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (

    <Wrapper>
        <div>
            <h3 className='title-cart'>{item.title}</h3>
            <div className='information'>
                <p className='info'>Price: R${item.price}</p>
                <p className='info'>Total: R${(item.amount * item.price).toFixed(2)}</p>
            </div>
            <div className='buttons'>
                <Button
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => removeFromCart(item.id)}  >
                    -
                </Button>

                <p>{item.amount}</p> 

                <Button 
                    size="small"
                    disableElevation
                    variant="contained"
                    onClick={() => addToCart(item)} >
                    +
                </Button>

            </div>
        </div>

        <img src={item.image} alt={item.title}/>
    </Wrapper>
);



export default CartItem