import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Home from './../views/home';
import Prueba1 from '../views/pdf/prueba1';
import Prueba2 from '../views/pdf/prueba2';
import Prueba3 from '../views/pdf/prueba3';
import Prueba4 from '../views/pdf/prueba4';
import Prueba5 from '../views/pdf/prueba5';

export default function Routes() {
    const scrollTop = (Component, props) => {
        window.scrollTo(0, 0);
        return <Component {...props}/>;
    };

    return(
    <Switch>
        <Route path="/home" render={props => scrollTop(Home, props)}/>
        <Route path="/prueba1" render={props => scrollTop(Prueba1, props)}/>
        <Route path="/prueba2" render={props => scrollTop(Prueba2, props)}/>
        <Route path="/prueba3" render={props => scrollTop(Prueba3, props)}/>
        <Route path="/prueba4" render={props => scrollTop(Prueba4, props)}/>
        <Route path="/prueba5" render={props => scrollTop(Prueba5, props)}/>
        <Redirect exact from="/*" to="/home"/>
    </Switch>
    );
}