import React, { Component } from 'react'
import Product from './product';
class ShopingCart extends Component {
    
    render() { 
        return ( 
            <div>
                <h2>shoping cart</h2>
                <br />
                {this.props.products.map(product => (
                    <Product key={product.id} product={product} handleDlete={this.props.handleDlete} handeleButton={this.props.handeleButton} decrementButton={this.props.decrementButton}/>
                ))}
            </div>
         );
    }
}
 
export default ShopingCart;