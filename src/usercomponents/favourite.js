import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from './navbar';
import React, {Fragment, useState} from "react";
import "@material-tailwind/react/tailwind.css";
import ProductDetail from "./product_details";
import Footer from '../components/footer';
import FavouriteProducts from "./favourite_products"

const Favourite = () => {

    const [currTitle, setCurrTitle] = useState();
    const [currPrice, setCurrPrice] = useState();
    const [currBrand, setCurrBrand] = useState();
    const [currImageUrl, setCurrImageUrl] = useState();
    const [checkPD, setCheckPD] = useState(false);

    const changeCheckPD = (value) => {
        setCheckPD(value);
    } 

    const updateCurrProduct = (title, imageurl, brand, price) => {
        setCurrTitle(title);
        setCurrPrice(price);
        setCurrBrand(brand);
        setCurrImageUrl(imageurl);
    }

    return (
        <div>
            <UserNavbar currPage={"Favourite"}/>
            <img src='https://cdn3.vectorstock.com/i/1000x1000/62/02/my-favorite-rubber-stamp-vector-14646202.jpg' style={{height: '200px', width: '200px', display: 'block', marginLeft: 'auto', marginRight: 'auto'}}/>
                <div className='flex'>
                <div className='mt-10'>
                    <FavouriteProducts changePD={changeCheckPD} updateProduct={updateCurrProduct}/>
                    {checkPD ? (<ProductDetail name={currTitle} url={currImageUrl} brand={currBrand} price={currPrice} changePD={changeCheckPD} />) : null}
                </div>
                </div>
            <Footer />
        </div>
    )
}

export default Favourite;