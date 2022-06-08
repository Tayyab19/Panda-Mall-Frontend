import { useState, useEffect } from "react";
import ProductCard from "./product"
import FullPagination from "./pagination";
import axios from "axios";

const ProductList = ({filterList, changePD, updateProduct}) => {
    const [trigger, setTrigger] = useState(false);
    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState([])

    const fetchProducts = () => {
        axios.get("http://localhost:8000/api/products/", {headers: {
            'Authorization': `JWT ${localStorage.getItem("token")}` 
          }}).then((response) => {
            setProducts(response.data)
        }).catch((err) => alert("Error While Retrieving Products"))
        .finally(() => setLoading(true));
    }

    useEffect(() => fetchProducts(), [])

    const [updatedProducts,setUpdatedProducts]= useState(products);

    const [pageNumber, setpageNumber] = useState(1);
    const singlePageProducts = 15;
    var length = 0;

    const updateFavProduct = (id) => {
        axios.patch(`http://localhost:5000/api/products/favourite/edit/${id}`,{favourite: !favourite},{headers: {
            'Authorization': `JWT ${localStorage.getItem("token")}`
        }}).catch((err) => alert("Error While Updating Product"));

        const objIndex = products.findIndex(ele => ele._id === id)
        products[objIndex].favourite = !products[objIndex].favourite
        setTrigger(!trigger)
    }
    const changePageNumber = (pn) => {
        setpageNumber(pn);
    }
    const filterProducts = () => {


        var brandNames = [];
        var colorNames = [];
        filterList[0].options.filter((item)=>
            item.checked === true ? brandNames.push(item.value) : null
        );

        filterList[1].options.filter((item)=>
            item.checked === true ? colorNames.push(item.value) : null
        );

        if(brandNames.length === 0 && colorNames.length === 0)
        {
            length = products.length;
            return products;
        }
        
        var arr =  [];
        
        products.filter((item)=>{
           if(brandNames.includes(item.brand)){
               if(colorNames.length > 0){
                 if(colorNames.includes(item.color)){
                     arr.push(item)
                 }
               }
               else{
                  arr.push(item)
               }
           }else if(colorNames.length > 0 && brandNames.length === 0){
            if(colorNames.includes(item.color)){
                arr.push(item)
            }
           }
        }
        );
        console.log(arr);
        length = arr.length;
        return arr;     

    }
 

    return (
        <>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 content-start">
            {loading ? <h1 className="text-center fw-bolder">loading...</h1> : filterProducts().map((element, ind) => (   
                (ind >= singlePageProducts*(pageNumber-1) && ind < singlePageProducts*pageNumber) ? (
                    <div className=""> 
                        <ProductCard key={element.sku} name={element.name} url={element.imageurl} brand={element.brand} price={element.price} productURL={element.producturl} sku={element.sku} color_size={element.color} type={element.type} fabric={element.fabric} fit={element.fit} collar={element.collarType} sleeves={element.sleeves} cuff_style={element.cuffStyle} cPD={changePD} uP={updateProduct} fav={element.favourite} updateFavouriteValue={updateFavProduct} />
                   </div>
                ) : (<></>)
            ))
            }
        </div>
        <div className="flex justify-center mt-4">
        <FullPagination totalPages={Math.ceil(length/singlePageProducts)} currPage={pageNumber} changePageNumber={changePageNumber} />
        </div>
        
        </>
    )
}

export default ProductList ;