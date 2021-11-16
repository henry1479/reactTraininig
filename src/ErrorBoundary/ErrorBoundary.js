import React from "react";

export default class ErrorBoundary extends React.Component {
    state = {
        hasError:false,
        
    }

    componentDidCatch (error, info) {
        this.setState({hasError: true, info})
    }

    render() {
        if(this.state.hasError) {
            return(
            <div>
                <h1 style={{color: 'red'}}>The Error is occured</h1>
                <p>{this.state.info}</p> 
            </div>
            )
        }

        return this.props.children
        
    }
}