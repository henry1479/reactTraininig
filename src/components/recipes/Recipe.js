import PropTypes from "prop-types";




export const Recipe = ({name='', ingridients=[], steps=[]}) => {
return (
 <section id={name.toLowerCase().replace(/ /g, "-")}>
    <h1>{name}</h1>
    <p><span>{ingridients.length} ingridients</span> | <span>{steps.length} steps</span></p>
    <ul className="ingridients">
        {ingridients.map((ingridient, i)=> <li key={i}>{ingridient.name}</li>)}
    </ul>
    <section className="instructions">
        <h2>Cooking Instructions</h2>
        {steps.map((step,i)=>
        <p key={i}>{step}</p>)}
    </section>
 </section>

)}


Recipe.propTypes = {
    ingridients: PropTypes.array.isRequired,
    steps: PropTypes.array.isRequired,
    name: PropTypes.string,
}