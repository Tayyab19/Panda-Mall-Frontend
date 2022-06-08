import React from "react";
import { useState } from "react";
import ProductCard from "./product"
import FullPagination from "./pagination";

const FavouriteProducts = ({changePD, updateProduct}) => {
    const [favProducts, setFavProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [pageNumber, setpageNumber] = useState(1);
    const [trigger, setTrigger] = useState(false);
    const singlePageProducts = 12;

    const fetchFavoruiteProducts = () => {
        axios.get("http://localhost:8000/api/products/favourite", {headers: {
            'Authorization': `JWT ${localStorage.getItem("token")}` 
          }}).then((response) => {
            setFavProducts(response.data)
        }).catch((err) => alert("Error While Retrieving Products"))
        .finally(() => setLoading(true));
    }

    useEffect(() => fetchFavoruiteProducts(), [])

    const changePageNumber = (pn) => {
        setpageNumber(pn);
    }

    const updateFavProduct = (id) => {
        axios.patch(`http://localhost:5000/api/products/favourite/edit/${id}`,{favourite: false},{headers: {
            'Authorization': `JWT ${localStorage.getItem("token")}`
        }}).catch((err) => alert("Error While Updating Product"));

        const objIndex = favProducts.findIndex(ele => ele._id === id)
        favProducts[objIndex].favourite = !favProducts[objIndex].favourite
        setTrigger(!trigger)
    }

    return (
        <>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 content-start">
            {loading ? <h1 className="fw-bolder text-center">Loading...</h1> : favProducts.filter(ele => ele.favourite).map((element, ind) => (
                (ind >= singlePageProducts*(pageNumber-1) && ind < singlePageProducts*pageNumber) ? (
                    <div> 
                        <ProductCard name={element.title} url={element.imageurl} brand={element.brand} price={element.price} cPD={changePD} uP={updateProduct} fav={element.favourite} updateFavouriteValue={updateFavProduct} />
                   </div>
                ) : (null)
            ))
            }
        </div>
        {favProducts.filter(ele => ele.favourite).length > 0 ? 
        <div className="flex justify-center mt-4">
        <FullPagination totalPages={Math.ceil(favProducts.filter(ele => ele.favourite).length/singlePageProducts)} currPage={pageNumber} changePageNumber={changePageNumber} />
        </div>
        : 
        null
        }
        </>
    )
}

export default FavouriteProducts;