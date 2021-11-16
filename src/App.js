
// импорт модуля scss

// import classes from'./App.module.scss';
import { useState } from 'react';
import { Router } from './routing/Router';
import { NavLink } from 'react-router-dom';
import './App.scss';

function App() {
    const [isLogged, setIsLogged] = useState(false);

    const makeLog = () => {
        setIsLogged(prevState=>!prevState)
    }

  return (
    <div className="App">
        <header>
            <NavLink to='/' 
            exact 
            activeClassName={'wfm-active'}
            >Main Page</NavLink>
            <NavLink to='/comment'>Comment Page</NavLink>
            <NavLink to='/simple-form'>Simple Form</NavLink>
            <NavLink to='/tick'>Clock Page</NavLink>
            <NavLink to='/menu'>Recipe Page</NavLink>
            <NavLink to='/color'>Color Page</NavLink>
            <NavLink to={{
                pathname: '/members',
                search: '?a=1&b=2',
                hash: "wfm-hash"
            }}>Member List</NavLink>
            <NavLink to={{
                pathname:'/cars'
            }}>Cars</NavLink>
            <hr/>
            <button
            style={isLogged?{color:'green'}: {color: 'red'}} 
            onClick={makeLog}>Log</button>
        </header>
        <main>
            <Router log={isLogged}/>
        </main>
    </div>
  );
}



export default App;
