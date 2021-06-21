import './App.css';
import React, { Component } from 'react'
import ShopingCart from './components/ShopingCart'
import Navbarr from './components/Navbar';
import {Route,Redirect} from 'react-router-dom'
import Home from './components/Home';
// import About from './components/About';
// import Contact from './components/Contact';
import notFound from './components/notFound'
import Menu from './components/Menu'
class App extends Component {
  state = { 
    products:[
        {id:1, name:'Burger',count:1, price:30 , isInCart:false},
        {id:2, name:'Fries' ,count:1, price:20 , isInCart:false},
        {id:3, name:'Cola',count:1, price:10 , isInCart:false}
        
    ]
 }
 handeleInCartChange = (product) => {
  console.log("clicked");
  // clone
  const products = [...this.state.products];
  const index = products.indexOf(product);
  products[index] =  {...products[index]};
  // edit
  products[index].isInCart = !products[index].isInCart
  // setState
  this.setState({products})
}
//  handleDlete= (product)=> {
//      const newProducts = this.state.products.filter(p => p.id !== product.id);
//      this.setState({products:newProducts})
//  }
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
            <Route path='/home' component={Home} />
            <Route path='/notFound' component={notFound}/>
            {/* <Redirect to='/notFound' /> */}
            <Route path='/menu' render={ props => (
              <Menu 
                {...props} 
                products={this.state.products} 
                onClick={this.handeleInCartChange}
            /> )} />

            <Route path='/cart' 
              render={props=> (
                <ShopingCart 
                  products={this.state.products.filter(p => p.isInCart)} 
                  handeleButton={this.handeleButton} 
                  handleDlete={this.handleDlete} 
                  decrementButton={this.decrementButton}
                  /> )} />

          
        </div>
    </div>
  );
}}

export default App;
