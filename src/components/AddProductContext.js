import { useState } from "react"
import {useProductContext} from "../context/ProductContext";
const AddProductContext = () => {

    const {addNewProduct} = useProductContext(); // addNewProduct is coming from ProductContext.js
    const  [data, setData] = useState({
        id: "",
        name: "",
        price: ""
    });
   //TODO: single function update state
    function handleNameChange(e){
        let fieldname = e.target.name; 
        setData((prev)=>{return {...prev, name: e.target.value} })
    }

    function handleProductForm(e){
        e.preventDefault();
        addNewProduct(data);

        setData({
            id: "",
            name: "",
            price: ""
        })
    }
  return (
    <div>
       <h1>AddProduct Section</h1>
       <form method="post" onSubmit={handleProductForm}>

            <input type="text" name="name"  placeholder="Product Name" value={data.name} 
                onChange={(e)=>{ setData((prev)=>{return {...prev, name: e.target.value} })}}
            />

            <input type="number" name="price"  placeholder="Product Price" value={data.price} onChange={(e)=>{  
                setData((prev)=>{return {...prev, price:e.target.value, id:Math.random()}})
            }}/>
            <button type="submit">Add Product</button>
        </form> 
    </div>
  )
}

export default AddProductContext