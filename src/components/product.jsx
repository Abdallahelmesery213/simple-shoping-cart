import React, { Component } from 'react';
class Product extends Component {
    // state = { 
    //     name:this.props.product.name,
    //     count:this.props.product.count
    //  }
    
    render() { 
        
        return (  
            <div className="row">
                <div className="col-1">
                    <span className="mr-2 h4">{this.props.product.name}</span>
                </div>
                <div className="col">
                    <span className="mr-2 badge badge-primary" style={{fontSize:"16px"}}>{this.props.product.count}</span>
                    <button style={{fontSize:"13px", fontWeight:"bold"}} onClick={()=>{this.props.handeleButton(this.props.product)}} className="btn btn-primary mr-2 btn-sm">+</button>
                    <button style={{fontSize:"13px", fontWeight:"bold"}} onClick={()=>{this.props.decrementButton(this.props.product)}} className="btn btn-primary mr-2 btn-sm">-</button>                    
                    <br /> <br />
                </div>
                
            </div>  
        );
    }
}
 
export default Product;