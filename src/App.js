import './App.css';
import React, { Component } from 'react'
import ShopingCart from './components/ShopingCart'
import Navbar from './components/Navbar';
class App extends Component {
  state = { 
    products:[
        {id:1, name:'Burger',count:15},
        {id:2, name:'Rice',count:5},
        {id:3, name:'Meat',count:9}
    ]
 }
 handleDlete= (product)=> {
     const newProducts = this.state.products.filter(p => p.id !== product.id);
     this.setState({products:newProducts})
 }
 // increment function
 handeleButton = (product) => {
  console.log("clicked");
  // clone
  const products = [...this.state.products];
  const index = products.indexOf(product);
  products[index] =  {...products[index]};
  // edit
  products[index].count++;
  // setState
  this.setState({products})
}
// decrement function
decrementButton = (product) => {
  console.log("clicked");
  // clone
  const products = [...this.state.products];
  const index = products.indexOf(product);
  products[index] =  {...products[index]};
  // edit
  products[index].count--;
  // setState
  this.setState({products})
}
 render () {
  return (
    <div className="App">
        <Navbar productCount={this.state.products.length}/>
        <div className="container">
          <ShopingCart products={this.state.products} handeleButton={this.handeleButton} handleDlete={this.handleDlete} decrementButton={this.decrementButton}/>
        </div>
    </div>
  );
}}

export default App;
