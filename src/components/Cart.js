
import { useState } from "react";

const Cart = ()=> {

    //useState(): to handle state, a value that changes in our application

    //the name of the state/ a function for updating the state
     //const[statename, afunctiontoupdatertehstate] = useState();
    
     const [cartItem, setCartItem] = useState(0);


    // let cartItemNo = 0;we dont do this here

    function handleCart(){
        // cartItemNo++ we dont do this here
        setCartItem((xyz)=>{return xyz = xyz + 1}); //updating state: cartItem
        console.log(`cart item number is ${cartItem}`)
        // console.log(cartItemNo)
    }


    return (

        <div>
                <h1>{cartItem}</h1>
                <button onClick={handleCart}>Add To Cart</button>
        </div>

    )

}

export default Cart;