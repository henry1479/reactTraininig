import {  Route, Switch } from "react-router-dom";
import { Comment } from "../components/comment/Comment";
import { Tick } from "../components/tick/Tick";
import { Menu } from "../components/recipes/Menu";
import { Main } from "../components/main/Main";
import { ColorApp } from "../components/colorApp/ColorApp"
import { MemberList } from "../components/memberList/MemberList";
import Cars from "../components/cars/Cars";
import { CarDetail } from "../components/cars/CarDetail";
import { SimpleFormApp } from "../containers/SimpleForms/SimpleFormApp";

export const Router = ({log}) => {
   
    return(
        <Switch>
        <Route path ='/simple-form' component={SimpleFormApp} />
        <Route path ='/cars/:name' component={CarDetail} />
        {log ? <Route path ='/cars' component={Cars}/> : null}
        <Route path ='/members'>
            < MemberList />
        </Route>
        <Route path ='/color'>
            < ColorApp />
        </Route>
        <Route path ='/comment' component={Comment}/>
        <Route path ='/tick'>
            <Tick />
        </Route>
        <Route path='/menu'>
            <Menu />
        </Route>
        <Route path='/' exact>
            <Main />
        </Route>
        <Route render={()=><h1 style={{color: 'red', textAlign: 'center'}}>404 not found</h1>}/>
    </Switch>
    )
}

   
