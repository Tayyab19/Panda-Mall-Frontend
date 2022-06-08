import './App.css';
import Navbar from "./components/navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import React, {Fragment, useState} from "react";
import Sidebar from "./components/sidebar";
import Products from "./components/products";
import Footer from "./components/footer";
import Breadcrumb from "./components/breadcrumb";
import "@material-tailwind/react/tailwind.css";
import ProductDetail from "./usercomponents/product_details";
import LogOut from "./usercomponents/logout";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from "./usercomponents/home"
import Login from "./commoncomponents/login"
import Signup from './commoncomponents/signup';
import Favourite from "./usercomponents/favourite"
import Profile from "./usercomponents/profile"

function App() {
    const [check, setCheck] = useState(true);
    const [currPage, setCurrPage] = useState("Home");
    const [currTitle, setCurrTitle] = useState();
    const [currPrice, setCurrPrice] = useState();
    const [currBrand, setCurrBrand] = useState();
    const [currImageUrl, setCurrImageUrl] = useState();

    const changeCheck = () => {
        setCheck(!check);
    }

    const changeCurrPage = (currPage) => {
        setCurrPage(currPage)
    }

    const [checkPD, setCheckPD] = useState(false);

    return (
        <Router>
            <Routes>
                <Route path=""  element={<Login />} />
                <Route path="/Signup"  element={<Signup />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Home/:id" element={<Home />} />
                <Route path="/favourite" element={<Favourite />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Login />} />
            </Routes>
        </Router>
    );
}

export default App;
