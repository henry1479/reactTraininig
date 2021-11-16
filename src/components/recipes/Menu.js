import { recipesData as recipes } from "./data";
import { Recipe } from './Recipe';


export const Menu = () => 
<article>
    <header>
        <h1>Delicious Recipes</h1>
    </header>
    <div className="recipes">
        {recipes.map((recipe,i)=> 
        <Recipe key={i} {...recipe}/>)}
    </div>
</article>