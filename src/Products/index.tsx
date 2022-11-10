
import {CartItemType} from '../App'
import Stars from '../Star/Star'
import {Wrapper} from './styles'



type Props = {
    item:CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

function Item ({item, handleAddToCart}: Props){
    

    return(
    <Wrapper>
        
        
            <img src={item.image} alt={item.title}/>
            <h3 className='title-products'>{item.title}</h3>
            <p className='description-products'>  {item.description.slice(0, 60) }...</p>
            

            <div className='stars'>
            <Stars
                rate={item.rating.rate} 
            />
                <p> {item.rating.rate} - <span className='span-uni'>  {item.rating.count} Unidades </span></p>
            </div>

            
        <div className='container-price'>
            <span className='span-price'>R${item.price}</span>
            <button  onClick={() => handleAddToCart(item)}>Add + </button>
        </div>
    </Wrapper>
    )}


export default Item

