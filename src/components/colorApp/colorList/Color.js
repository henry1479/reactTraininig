import { StarRaiting } from "./starRating/StarRaiting"

export const Color = ({title, color, rating=0, onRemove=f=>f,onRate=f=>f}) => {
    return (
        <section className="color">
            <h1>{title}</h1>
            <button onClick ={onRemove}>Remove</button>
            <div className="color"
            style={{background:color, width: '60%', height: '100px'}}></div>
            <StarRaiting starsSelected={rating} onRate={onRate}/>
        </section>
    )
}