import React from 'react'

import {HashRouter, Switch, Route} from 'react-router-dom'

import Home from './views/home'
import RegisterProduct from './views/products/register'

import Query from './views/products/query'


export default ()=>{
    return (
        <HashRouter>
            <Switch>
                <Route exact path="/register-products" component={RegisterProduct}/>
                <Route exact path="/" component={Home}/>
                <Route exact path="/query" component={Query}/>

            </Switch>
        </HashRouter>
    );
}