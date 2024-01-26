
const Product = (props)=> {
    // console.log(props)

    return (
        <div>
            <h1>{props.productname}</h1>
            <p>{props.price}</p>
        </div>
    )

}

export default Product;