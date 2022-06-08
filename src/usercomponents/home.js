import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from './navbar';
import ProductBar from './productbar';
import FilterBar from './filterbar';
import ProductList from './products';
import Footer from '../components/footer';
import React, {Fragment, useState} from "react";
import "@material-tailwind/react/tailwind.css";
import ProductDetail from "./product_details";
import Button from "@material-tailwind/react/Button";


const Home = () => {
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
            <UserNavbar currPage={"Home"}/>
                {/* <ProductBar/> */}
                {/*<Button color="orange" ripple="dark" className="row col-12 mt-2">Apply Filter</Button>*/}
                <div className='flex row col-12'>
                    <FilterBar />    
                </div>
            <Footer />
        </div>

    )
}

export default Home;