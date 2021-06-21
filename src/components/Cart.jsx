import React from 'react';
const Cart = (props) => {
    const style = !props.product.isInCart 
    ? {color:"#80808080" , cursor:"pointer"}
    : {cursor:"pointer"} ;
    return ( 
    
        <i className="fas fa-cart-plus" style={style}
            onClick={()=>props.onClick(props.product)}
        >
        </i>
    );
};
 
export default Cart;