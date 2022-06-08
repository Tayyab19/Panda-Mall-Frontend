
import 'bootstrap/dist/css/bootstrap.min.css';
import './style_dark.css';
import abc from './abc.png';
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Signup() {

    const navigate = useNavigate();
  const signUp = (email, password) => {
    axios({
      method: "post",
      url: `http://localhost:5000/users/signup`,
      data: {
        email: email,
        password: password,
      },
      Headers: { "Content-Type": "application/json" },
    })
      .then((response) => {
        console.log(response);
        if (response.status == 201) {
          toast.success(
            "Please Click on the Confirmation Link Sent to your Email Account to Verify your Account",
            {
              position: "top-right",
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
            }
          );
          navigate("/");
        }
      })
      .catch((err) => {
        toast.error("Username\\Email Already in Use", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.formpassword.value.length > 5) {
      if (e.target.password.value === e.target.password2.value) {
        signUp(
          e.target.formemail.value,
          e.target.formpassword.value
        );
      } else {
        toast.error("Entered Passwords Do Not Match", {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
    } else {
      toast.error("Password too short", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
        }
    }
    

    return (     
    
    <div className="page-content d-flex align-items-center">

    <div className="container d-flex justify-content-center">

        <div className="col-12 col-sm-10 col-md-8 col-lg-7 col-xl-6 col-xxl-5">

            <div className="auth-card">

                <div className="logo-area">

                <img  src={abc}/>



                </div>

                <h5 className="auth-title">Panda Mall</h5>

               

                <hr className="separator"/>

                <form onSubmit={e => {e.preventDefault(); handleSubmit(e);}}>

                    <div className="mb-2 mt-5">
                        <input id='email' type="email" className="form-control auth-input" placeholder="Email" aria-describedby="emailHelp"/>
                    </div>

                    <div className="mb-2">
                        <input password='password' type="password" className="form-control auth-input" placeholder="Password"/>
                    </div>

                    <div className="mb-3">
                        <input type="password2" className="form-control auth-input" placeholder="Passwort verification"/>
                    </div>

                    <button type='submit' className="btn auth-btn mt-2 mb-4">Register</button>

                </form>

                <p className="text mb-4">Already have a Account? <a href="/" className="text-link">Login Here!</a></p>

            </div>
        </div>
    </div>
</div>
);
}

export default Signup;