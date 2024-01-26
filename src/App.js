
import Product from "./components/Product";
import Products from "./components/Products";
import Events from "./components/Events";
import Cart from "./components/Cart";
import Form from "./components/Form";
import Footer from "./components/Footer";
import Header from "./components/Header";
import AddProduct from "./components/AddProduct";
import { useState } from "react";
import AddProductContext from "./components/AddProductContext";
import ProductsByContext from "./components/ProductsByContext";
const App = ()=> {

  const pro = [

    {id: 1, name: "Greek Yogurt", price: 3500},
    {id: 2, name: "crazy Jean", price: 1000},
    {id: 3, name: "Apple smartwatch", price: 65000},
    {id: 4, name: "Hair clipper", price: 500},

  ];

  const [products, setProducts] = useState([]);

  //this fucntion add new product to the state products
  const addNewProduct = (newProduct) =>{

    setProducts((prev)=>{
      return [...prev, newProduct];
    })

  }


  function deleteItem(id){
    alert(`The item you want me to delete has id:  ${id}`);
    //filter()
  }

return (
  <div>
    <Header/>
    <AddProductContext/>
    <ProductsByContext/>
    <Footer/>
  </div>
);

}

export default App;