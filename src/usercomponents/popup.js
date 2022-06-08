import './popup.css';

function Popup(props) {
    return (props.trigger) ? ( 
        <div className='popup'>
        <div className='popup-inner'>
           <div className="container rounded bg-white mt-5 mb-5">
              <div className="row">
                 <div className=" col-sm-12 col-md-4  border-right">
                    <div className="d-flex flex-column align-items-center text-center p-3 py-5"><img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"/><span className="font-weight-bold">Edogaru</span><span class="text-black-50">edogaru@mail.com.my</span><span> </span></div>
                 </div>
                 <div className="col-md-8 col-sm-12 border-right">
                    <div className="p-3 py-5">
                       <div className="d-flex justify-content-between align-items-center mb-3">
                          <h4 className="text-right">Profile Settings</h4>
                       </div>
                       <div className="row mt-2">
                          <div className="col-md-6"><label className="labels">Name</label><input type="text" className="form-control" placeholder="first name" value=""/></div>
                          <div className="col-md-6"><label className="labels">Surname</label><input type="text" className="form-control" value="" placeholder="surname"/></div>
                       </div>
                       <div className="row mt-3">
                          <div className="col-md-12"><label className="labels">Mobile Number</label><input type="text" className="form-control" placeholder="enter phone number" value=""/></div>
                          <div className="col-md-12"><label className="labels">Address</label><input type="text" className="form-control" placeholder="enter address line 1" value=""/></div>
                          <div className="col-md-12"><label className="labels">Postcode</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div>
                          <div className="col-md-12"><label className="labels">Area</label><input type="text" className="form-control" placeholder="enter address line 2" value=""/></div>
                          <div className="col-md-12"><label className="labels">Email ID</label><input type="text" className="form-control" placeholder="enter email id" value=""/></div>
                       </div>
                       <div className="row mt-3">
                          <div className="col-md-6"><label className="labels">Country</label><input type="text" className="form-control" placeholder="country" value=""/></div>
                          <div className="col-md-6"><label className="labels">State/Region</label><input type="text" className="form-control" value="" placeholder="state"/></div>
                       </div>
                       <div className="mt-5 text-center"><button className="btn btn-primary profile-button" type="button" onClick={()=>props.setTrigger(false)} >Save Profile</button></div>
                    </div>
                 </div>
              </div>
           </div>
        </div>
     </div>

   ) : "";
}

export default Popup;