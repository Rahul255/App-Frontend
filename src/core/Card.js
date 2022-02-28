import React from 'react'
import ImageHelper from './helper/imageHelper';
import { Navigate } from 'react-router-dom';
import { addItemToCart,removeItemFromCart } from './helper/cartHelper';


const isAuthenticated = true

const Card = ({
    product,
    addtoCart = true,
    removeFromCart = false,

}) => {

    const cartTitle = product ? product.name : "This is the product"
    const cartDescription = product ? product.description : "default description"
    const cartPrice = product ? product.price : "default"

    const addToCart = () => {
        if (isAuthenticated) {
            addItemToCart(product, () => {})
            console.log("added to cart")
        } else {
            console.log("login Please!")
        }
    }
    const getAredirect = redirect => {
        if (redirect) {
            return <Navigate to="/cart" />
        }
    }
    const showAddToCart = addToCart => {
        return (
            addtoCart && (
                <button
                    onClick={addToCart}
                    className="btn btn-block btn-outline-success mt-2 mb-2"
                >Add to cart</button>
            ));
    }
    const showRemoveFromCart = removeFromCart => {
        return(
            removeFromCart && (
                <button
                            onClick={() => { 
                                //Todo: handle this too
                                removeItemFromCart(product.id)
                                console.log("product removed from cart");
                            }}
                            className="btn btn-block btn-outline-danger mt-2 mb-2"
                        >Remove from cart</button>
            )
        )
    }
    return (
        <div className="card text-white bg-dark border border-info ">
            <div className="card-header lead">{cartTitle}</div>
            <div className="card-body">

                <ImageHelper product={product} />

                <p className="lead bg-success font-weight-normal text-wrap">
                    {cartDescription}
                </p>

                <p className="btn btn-success rounded  btn-sm px-4">$ {cartPrice}</p>

                <div className="row">
                    <div className="col-12">
                       {showAddToCart(addToCart)}
                    </div>

                    <div className="col-12">
                       {showRemoveFromCart(removeFromCart)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Card