import Image from "next/image";
const Products = () =>{

    return(
    <div id="products">
        
        <section className="py-5 border-bottom" >
            <div className="text-center my-5">
                <h2 className="fw-bolder">Our Products</h2>
            </div>
            <div className="container px-5" >
            
                <img  className="img-fluid"  alt="Products" src="/products.jpg"/>
                
            </div>
        </section>
    </div>
    )
}
export default Products;