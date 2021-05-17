import React from "react"

class Cart extends React.Component{
    render(){
        return (
        <div className="container" style={{"display": "flex","justify-content": "center","flex-direction": "column","align-items": "center"}}>
        <img src="./Assets/emptycart.svg" style={{"width": "225px","height": "165px"}}alt=""/>
        <h3>Your Cart is empty!</h3>
        <p>You have no items added in cart</p>
        <button className="btn btn-primary mt-3">Add Products</button>
    </div>
        )
    }
}

export default Cart