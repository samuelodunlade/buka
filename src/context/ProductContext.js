
import { createContext, useContext,  useState} from "react";

// create a context

const productContext = createContext([]);

//create a context provider component

const ProductProvider = ({children}) => {
    //state
    const[products, setProducts] = useState([]);

    //function to add

    const addNewProduct = (productDetail)=>{
        setProducts([...products, productDetail]);
    }

    //a function to delete
    const deleteProduct = (proId)=>{
        setProducts(products.filter((prod)=>prod.id != proId));
    }

    // const returnAllProducts = ()=>{
    //     return products
    // }
    
    return (
            <productContext.Provider value={{products, addNewProduct, deleteProduct}}>
                {children}
            </productContext.Provider>
    )
}
//usecontext
function useProductContext(){
    const context = useContext(productContext);
    if(!context){
         console.log("To use this context, you need product context");
    }

    return context;
}


export {ProductProvider, useProductContext}