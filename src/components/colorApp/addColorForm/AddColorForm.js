// import { Input, Button } from '@material-ui/core';
import { ColorForm } from './ColorForm';


export const AddColorForm = ({onNewColor=f=>f}) => {
 
    return (
        <ColorForm sendColor={onNewColor}/>
    )
}