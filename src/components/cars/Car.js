import classes from './car.module.css';
// import Radium from 'radium';
import React from 'react';
// передает все параметры от роутера
import {withRouter} from 'react-router-dom'


const style = {
    border: '1px solid #ccc',
    boxShadow: '0 4px 5px rgba(0,0,0,.14)',
    marginBottom: '10px',
    ':hover': {
        border: '1px solid #aaa',
        cursor: 'pointer',
        boxShadow: '0 4px 5px 0 rgba(0,0,0,.25)'
    }
}



const Car = (props) => {
   

    // componentWillReceiveProps (nextProps) {
    //     console.log('Car componentWillReceiveProps', nextProps);
    // }

    // shouldComponentUpdate(nextProps,nextState) {
    //     console.log('Car shouldComponentUpdate', nextProps,nextState);
    //     return nextProps.name.trim() !== this.props.name.trim();
    // }

    // componentWillUpdate(nextProps,nextState) {
    //     console.log('Car componentWillUpdate', nextProps,nextState);
    // }



    // componentDidUpdate(){
    //     console.log('Car componentDidUpdate');
    // }

    // componentWillUnmount() {
    //     console.log('Car componentWillUnmount');
    // }

    // static getDerivedStateFromProps(nextProps, prevState) {
    //     console.log('Car getDerivedStateFromProps', nextProps, prevState);
    //     return prevState
    // }


    // getSnapshotBeforeUpdate() {
    //     console.log('Car getSnapShotBeforeUpdate');
    //     return null
    // }
        const inputClasses = [classes.input];

        if (props.name !== '') {
            inputClasses.push(classes.green)
        } else {
            inputClasses.push(classes.red);
        }
    
        if(props.name.length>4) {
            inputClasses.push(classes.bold);
        }
    
       
        
        return (<div 
            className="Car"
            style={style}
            // добавляем путь до карточки с машиной
            onClick={()=> props.history.push(`/cars/${props.name.toLowerCase()}`)}
            
        >
        <h3>{props.name}</h3>
        <p>{props.year}</p>
        <input
        
        className={inputClasses.join(' ')} 
        type="text" 
        onChange={props.onChangeName} 
        value={props.name}/>
        {/* <button onClick={props.onChangeTitleHandler}>Click</button> */}
        <button onClick={props.onDelete}>Remove car</button>
        </div>)
}


export default withRouter(Car)

