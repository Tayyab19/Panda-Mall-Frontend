import React, { useEffect, useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import ModalFooter from "@material-tailwind/react/ModalFooter";
import Button from "@material-tailwind/react/Button";
import axios from "axios";

const ProductDetail = ({id, changePD}) => {
    const [showModal, setShowModal] = useState(true);

    const [product_details, setProductDetails] = useState();

    const getProductDetails = (id) => {
        axios.get(`http://localhost:5000/api/product/${id}`,{headers: {
            'Authorization': `JWT ${localStorage.getItem("token")}`
          }})
            .then((response) => {
              setProductDetails(response.data);
            })
            .catch((err) => {
              console.log(err);
            });
    }

    useEffect(() => {getProductDetails(id)})


    return (
        <>
            <Modal size="lg" active={showModal} toggler={() => changePD(false)}>
                <ModalHeader toggler={() => changePD(false)}>
                    {brand}
                </ModalHeader>
                <ModalBody>
                    <p className="text-base leading-relaxed text-gray-600 fw-bold">
                        Title: {name} <br></br>
                        Type: {type} <br></br>
                        Fabric: {fabric} <br></br>
                        Fit: {fit} <br></br>
                        Collar: {collar} <br></br>
                        Sleeves: {sleeves} <br></br>
                        Cuff Style: {cuff_style} <br></br>
                        Price: {price} <br></br>
                    </p>
                </ModalBody>
                <ModalFooter>
                    <Button 
                        color="red"
                        buttonType="link"
                        onClick={(e) => changePD(false)}
                        ripple="dark"
                    >
                        Close
                    </Button>

                    <Button
                        color="green"
                        onClick={(e) => {window.location.href=productURL;}}
                        ripple="light"
                    >
                        Buy
                    </Button>
                </ModalFooter>
            </Modal>
            </>
    );
}

export default ProductDetail;