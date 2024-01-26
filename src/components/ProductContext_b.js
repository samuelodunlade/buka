import { useContext, createContext, useState } from "react";



// create context
const productContext = createContext();



const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    //methods
    //method to add 
    const addNewProduct = (productDetail) => {
        setProducts([...products, productDetail]);
    }
    //method to delete
    const deleteAProduct = (productId) => {
        setProducts(products.filter((prod)=>prod.id!=productId));
    }

    return (

        <productContext.Provider value={{products, deleteAProduct, addNewProduct}}>
            {children}
        </productContext.Provider>
    )
}


function useProductContext (){
    const context = useContext(productContext);
    if(!context){
        throw new Error("useProductContext must be within a product context")
    }
    return context;
}

export {ProductProvider, useProductContext}