import React from "react";
import Car from "./Car";
import ErrorBoundary from "../../ErrorBoundary/ErrorBoundary";
import { Counter } from "../Counter/Counter";

export default class Cars extends React.Component {
    constructor(props) {
        // console.log('Cars constructor');
        super(props);

        this.state =  {
            cars: [
                {
                    name: 'Audi',
                    year: 2016
                },
                {
                    name: 'BMW',
                    year: 2020
                },
                {
                    name: 'Opel',
                    year: 2019
                },
                {
                    name: 'Volzwagen',
                    year: 2022
                },
                {
                    name: 'Mercedes',
                    year: 2018
                }
            ],
            title: 'This is Cars!',
            showCars: false    
        }
    }

   

    onHandleTitleChange = (newTitle) => {
        // e.preventDefault();
        // const title = 'This is best cars!'
        
        this.setState({
            ...this.state,
            title: newTitle
        })
        console.log(this.state.title)
        
    }

    // handleInput = (e) => {
    //     console.log('changed', e.target.value);
    //     this.setState({
    //         ...this.state,
    //         title: e.target.value
    //     })
    // }

    toggleCarsHandler = () => {
        this.setState({
            ...this.state,
            showCars:!this.state.showCars
        })
    }

    onChangeName = (name,index) => {
        console.log(name,index);
        const car = this.state.cars[index];
        car.name = name;
        const cars = [...this.state.cars];
        cars[index] = car;
        this.setState({
            ...this.state,
            cars
        })

    }

    deleteHandler = (index) => {
        let cars = [...this.state.cars];
        cars = cars.filter((el,i)=> i !==index);
        
        this.setState({
            ...this.state,
            cars
        })

    }

    // componentWillMount() {
    //     // console.log('Cars componentWillMount')
    // }

    // componentDidMount() {
    //     // console.log('Cars componenDidMount')
    // }
    goToHomePage = () => {
        this.props.history.push({
            pathname: '/'
        })
    }
    render() {
        

       
        const {cars,title,showCars} = this.state;
       
        let newcars = (<p>Cars is hidden</p>);
        if(showCars) {
            newcars = cars?.map((el,i)=>(
            <ErrorBoundary key={i}>
                <Car 
                name={el.name} 
                year={el.year} 
                onChangeTitleHandler={this.onHandleTitleChange.bind(this, el.name)}  
                onChangeName={event=>this.onChangeName(event.target.value,i)}
                onDelete={this.deleteHandler.bind(this,i)}
                />
            </ErrorBoundary>));
        }

        

        return(
            
            <div className="cars-container">
                <h1>Cars</h1>
                <button onClick={this.goToHomePage}>To HomePage</button>
                <Counter/>
                <button onClick={()=>this.onHandleTitleChange('Changed!')}>Change Title</button>
                {/* <input type="text" onChange={this.handleInput}/> */}
                <div style={{
                    width: 400,
                    margin: 'auto',
                    paddingTop: 20
                }}>
                {
                    newcars
                }
                </div>
                <button onClick={this.toggleCarsHandler}>Toggle cars</button>
                
            </div>

        )
    }
}