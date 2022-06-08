import React from "react";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";
import { Icon } from "@material-tailwind/react";

const ProductCard = ({name, url, brand, price, productURL, sku, color_size, type, fabric, fit, collar, sleeves, cuff_style, cPD, uP, fav, updateFavouriteValue}) => {

    return (
            <Card>
                <img src={url} onError={({ currentTarget }) => {
                    currentTarget.onerror = null;
                    currentTarget.src="https://m.media-amazon.com/images/I/91IM87eeuCL._CLa%7C2140%2C2000%7C51c0gezEzTL.png%7C0%2C0%2C2140%2C2000%2B0.0%2C0.0%2C2140.0%2C2000.0_AC_UX342_.png";
                }}/>

                <CardBody className="">
                    <h6 size="sm" color="gray">{name} <br></br> <b>Brand:</b>{` ${brand}`}</h6>
                    <p color="gray">
                        {`Rs. ${price}`}
                    </p>
                </CardBody>

                <CardFooter>
                    <div className="flex justify-center">
                        <div className="mr-3">
                    <button className="outline-0" onClick={() => {cPD(true); uP(name, url, brand, price, productURL, sku, color_size, type, fabric, fit, collar, sleeves, cuff_style);}}>
                        <Button color="orange" size="large" ripple="light">
                        Details
                        </Button>
                    </button>
                        </div>
                    <div className="ml-3">
                    <Button
                        color="orange"
                        buttonType={fav ? ("filled") : ("outline")}
                        size="regular"
                        rounded={true}
                        block={false}
                        iconOnly={true}
                        ripple="dark"
                        onClick={() => updateFavouriteValue(name)}
                    >
                    <Icon name="favorite" size="sm" />
                    </Button>
                    </div>
            </div>
                </CardFooter>
            </Card>
    );
}

export default ProductCard;