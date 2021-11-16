import { useState } from 'react';
import {Star} from './Star';


export const StarRaiting = ({starsSelected=0, totalStars=5, onRate=f=>f}) => {
    
    // создаем 5 звезд с возможностью клика с изменением цвета при клике
    return (
       <div className="star-rating">
           {[...Array(totalStars)].map((n,i)=>
           <Star key={i}
           selected={i<starsSelected}
           onClick={()=>onRate(i+1)}/>
           )}
           <p style={{clear:'both', textAlign:'left'}}>{starsSelected} of {totalStars}</p>
       </div>
    )
}