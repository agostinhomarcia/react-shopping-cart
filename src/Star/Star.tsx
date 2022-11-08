import React, {useState, useEffect } from 'react';
import { BoxStars } from './styles';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs'




 function Stars( rating: {rate:number} ) {
    const [rate, setRate] = useState('')

    useEffect(() => {
        if (rating.rate <= 1) {
            setRate('péssimo')
            return
        } else if (1.1 <= rating.rate && rating.rate <= 1.9) {
            setRate('ruim')
            return
        } else if (2 <= rating.rate && rating.rate <= 2.9) {
            setRate('medio')
            return
        } else if (3 <= rating.rate && rating.rate <= 3.9) {
            setRate('bom')
            return
        }
        else if (3.9 <= rating.rate && rating.rate <= 4.5) {
            setRate('mtbom')
            return
        } else if (4.6 <= rating.rate && rating.rate <= 5) {
            setRate('perfeito')
            return
        }
    }, [rating.rate])
    return (
        <BoxStars>
            <div className='container-stars'>
            {rate === 'pessimo' && (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                    <BsStar />
                </>
            )}
            {rate === 'medio' && (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                    <BsStar />
                </>
            )}
            {rate === 'bom' && (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStar />
                </>
            )}
            {rate === 'mtbom' && (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarHalf />
                </>
            )}
            {rate === 'perfeito' && (
                <>
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                    <BsStarFill />
                </>
            )}
            </div>
            
        </BoxStars>
    )
}
export default Stars