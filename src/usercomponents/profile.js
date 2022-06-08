import 'bootstrap/dist/css/bootstrap.min.css';
import UserNavbar from './navbar';
import ProductBar from './productbar';
import axios from "axios";
import FilterBar from './filterbar';
import ProductList from './products';
import Footer from '../components/footer';
import React, {Fragment, useEffect, useState} from "react";
import "@material-tailwind/react/tailwind.css";
import ProductDetail from "./product_details";

import './Profile_Page.css';
import Popup from './popup';


function Profile() {

   const [loading,setLoading] = useState(false);
  const [buttonPopup,setButtonPopup]= useState(false);
   const [profile, setProfile] = useState();

   const getMyUser = async () => {
      axios.get(`http://localhost:5000/users/myProfile`,{headers: {
        'Authorization': `JWT ${localStorage.getItem("token")}`
      }})
        .then((response) => {
          setProfile(response.data);
          setLoading(true);
        })
        .catch((err) => {
          console.log(err);
        })
    }

    const updateUser = async (newUserData) => {
      await axios.patch(`http://localhost:5000/users/profile/edit`,newUserData,{headers: {
        'Authorization': localStorage.getItem("token") 
      }}).catch((err) => {
        console.log(err);
      });
    };

    useEffect(() => {
      getMyUser();
    })

  return (
    <div>
    <UserNavbar currPage={"Profile"}/>
    <div className="App">
    <section className="section about-section gray-bg" id="about">
       <div className="container">
          <div className="row align-items-center flex-row-reverse">
             <div className="col-lg-6">
                <div className="about-text go-to">
                   <h3 className="dark-color">About Me</h3>
                   <h6 className="theme-color lead">A Lead UX &amp; UI designer based in Canada</h6>
                   <p>Hi! My name is  <mark>Ahsan Khan!</mark> I am british / Asian actor. Mostly working for Pakistan. I work here and there as well.</p>
                   <div className="row about-list">
                      <div className="col-md-6">
                         <div className="media">
                            <label>Birthday</label>
                            <p>4th april 1998</p>
                         </div>
                         <div className="media">
                            <label>Age</label>
                            <p>22 Yr</p>
                         </div>
                         <div className="media">
                            <label>Residence</label>
                            <p>Canada</p>
                         </div>
                      </div>
                      <div className="col-md-6">
                         <div className="media">
                            <label>E-mail</label>
                            <p>info@domain.com</p>
                         </div>
                         <div className="media">
                            <label>Phone</label>
                            <p>820-885-3321</p>
                         </div>
                         <div className="media">
                            <label>Skype</label>
                            <p>skype.0404</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
             <div className="col-lg-6">
                <div className="about-avatar">
                   <img src={"https://bootdey.com/img/Content/avatar/avatar7.png"}/>
                </div>
             </div>
          </div>
          <div className="counter">
             <div className="row justify-content-center">
                <div className="col-6 col-lg-3">
                   <div className="count-data text-center">
                      <h6 className="count h2" data-to="500" data-speed="500">500</h6>
                      <p className="m-0px font-w-600">Favorite Clicks</p>
                   </div>
                </div>
                <div className="col-6 col-lg-3">
                   <div className="count-data text-center">
                      <h6 className="count h2" data-to="150" data-speed="150">150</h6>
                      <p className="m-0px font-w-600">Order Completed</p>
                   </div>
                </div>
                <div className="col-6 col-lg-3">
                   <div className="count-data text-center">
                      <h6 className="count h2" data-to="850" data-speed="850">Satisfied</h6>
                      <p className="m-0px font-w-600">Statisfaction Level</p>
                   </div>
                </div>
             </div>
          </div>
          <div className="container">
             <div className="row mt-3">
                <div className="col text-center">
                   <button type="button" class="btn btn-lg btn-outline-primary" onClick={(e)=>{setButtonPopup(true); updateUser(e.target.value)}} >Edit Profile</button> 
                   <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                    
                   </Popup>
                </div>
             </div>
          </div>
       </div>
    </section>
 </div>
 </div>
  );
}

export default Profile;
