import { useState } from "react";
import { AddColorForm } from "./addColorForm/AddColorForm";
import { ColorList } from "./colorList/ColorList";
import {dataColors} from "./data";
import { v4 } from "uuid";




export const ColorApp = () => {
    const[colors,setColors]=useState(dataColors);

    const addColor = (title,color) => {
        const changeColors = [
            ...colors,
            {
                id: v4(),
                title,
                color,
                rating: 0,
            }
        ];
        setColors(changeColors);
    }

    const rateColor = (id,rating) => {
        const changeColors = colors.map(color=>(color.id !== id) ? 
        color : {
            ...color,
            rating
        }
        )
        setColors(changeColors)
    }

    const removeColor = (id) => {
        const changeColors = colors.filter(
            color => color.id !== id
        )
        setColors(changeColors)
        console.log(colors)
    }
    console.log(colors)
    return (
        <div className="color-app">
            <AddColorForm onNewColor={addColor}/>
            <ColorList colors={colors}
                onRate={rateColor}
                onRemove = {removeColor}
            />
        </div>
    )
}