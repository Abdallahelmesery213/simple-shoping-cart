import './App.css';
import React, { Component } from 'react'
import ShopingCart from './components/ShopingCart'
import Navbarr from './components/Navbar';
import {Route,Redirect} from 'react-router-dom'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import notFound from './components/notFound'
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
        <Navbarr productCount={this.state.products.length}/>
        <div className="container">
          {/* <ShopingCart products={this.state.products} handeleButton={this.handeleButton} handleDlete={this.handleDlete} decrementButton={this.decrementButton}/> */}
          
            <Route path='/' exact component={Home} />
            <Route path='/About' component={About} />
            <Route path='/Contact' component={Contact} />
            <Route path='/cart' render={()=> <ShopingCart products={this.state.products} handeleButton={this.handeleButton} handleDlete={this.handleDlete} decrementButton={this.decrementButton}/>} />
            <Route path='/notFound' component={notFound}/>
            <Redirect to='/notFound' />
          
        </div>
    </div>
  );
}}

export default App;
