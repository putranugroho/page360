import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'

import Home from './Home'
import Header from './Header'
import Product from './Product'
import Footer from './Footer'

class App extends React.Component{
    

    render() {
         return (
            <BrowserRouter>
                <Route path='/' exact component={Header}/>
                <Route path='/' exact component={Home}/>
                <Route path='/' exact component={Product}/>
                <Route path='/' exact component={Footer}/>
            </BrowserRouter>
        )   
    }
}

export default App