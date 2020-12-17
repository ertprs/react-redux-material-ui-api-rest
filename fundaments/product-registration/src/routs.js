import React from 'react'

import { Switch, Route } from 'react-router-dom'

import Home from './views/home'
import RegisterProduct from './views/products/register'
import Query from './views/products/query'



export default () => {
    return (

        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/register-products/:sku?" component={RegisterProduct} />
            <Route exact path="/query" component={Query} />
        </Switch>

    );
}