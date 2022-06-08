import React, { useState } from "react";
import Dropdown from "@material-tailwind/react/Dropdown"
import DropdownItem from "@material-tailwind/react/DropdownItem"
import DropdownLink from "@material-tailwind/react/DropdownLink"
import {Link} from 'react-router-dom';

const ProductBarHelper = ({name, values}) => {
    var color = "orange";

    return (
        <Dropdown
            color="orange"
            placement="bottom-start"
            buttonText={name}
            buttonType="link"
            size="sm"
            rounded={false}
            block={false}
            ripple="dark"
        >
            {values.map(element => (
                <DropdownLink
                    href={`${name}/${element.type}`}
                    color={color}
                    ripple="light"
                >
                    {element.type}
                </DropdownLink>
                ))}
            
        </Dropdown>
    )
}

export default ProductBarHelper;