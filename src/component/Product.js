import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

class Product extends Component {

    state = {
        products: []
    }

    componentDidMount(){
        this.getProduct()
    }

    getProduct = () => {
        axios.get('http://localhost:2019/product')
            .then(res => {
               this.setState({products: res.data})
               console.log(res.data);
            })
    }

    renderProduct = () => {
        return this.state.products.map(item => { // hasil map = item{id,name,desc,price,src}
            return (
                <div id='box' className='card-body col-3 text-center'>
                    <img className='list' alt='' style={{width: 150, height: 150}} src={item.thumb}/>
                    <div className='card-body'>
                        <h5 className='card-title'>{item.title}</h5>
                        <p className='card-text'>Bedroom : {item.bedroom}, Bathroom :   {item.bathroom}</p>    
                        <p className='card-text'>
                        <div class="row">
                            <div class="col-7">
                            Furnished : {item.furnished}
                            </div>
                            <div class="col">
                            Area : {item.area}m<sup>2</sup>    
                            </div>
                        </div>
                        </p>
                        <p className='card-text'>
                        <div class="row">
                            <div class="col-7">
                            Tower : {item.tower}
                            </div>
                            <div class="col">
                            Floor : {item.floor}  
                            </div>
                        </div>
                        </p>
                    </div>
                </div>
            )
        })
    }

    render () {
        return (
            <div className='container'>
                <div className='row'>
                {this.renderProduct()}
                </div>
            </div>
        )
    }
}
    
    export default Product