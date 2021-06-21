import React from 'react';
import Cart from'./Cart'
const Menu = props => {
    return ( 
        <React.Fragment>
            <h1>Menu</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {props.products.map( product =>(
                        <tr>
                            <td>{product.name} </td>
                            <td>{product.price}</td>
                            <td>
                                <Cart onClick={props.onClick} product={product} key={product.id}/>
                            </td>
                        </tr>
                    ) )}
                </tbody>
            </table>
        </React.Fragment>
     );
}
 
export default Menu;