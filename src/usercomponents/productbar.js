import React, { useState } from "react";
import ProductBarHelper from "./productbarhelper";
import { NavbarContainer } from "@material-tailwind/react";

export default function ProductBar() {
    const [shirts, setShirts] = useState([{ type:'Formal Shirts'}, {type:'Casual Shirts'}]);
    const [bottoms, setBottom] = useState([{ type:'Shorts'}, {type:'Trousers'}, {type:'Jeans'}]);
    const [summers, setSummers] = useState([{ type:'T-Shirts'}, {type:'Shorts'}]);
    const [winter, setWinter] = useState([{ type:'Jackets'}, { type: 'Sweater'}]);
    const [activeWear, setActiveWear] = useState([{ type:'Gym Tee'}, {type:'Gym Shorts'}]);

    return (
        <div className="bg-gray-100">
        <NavbarContainer>
            <ProductBarHelper name="Shirts" values={shirts}/>
            <ProductBarHelper name="Bottoms" values={bottoms}/>
            <ProductBarHelper name="Summers" values={summers}/>
            <ProductBarHelper name="Winters" values={winter}/>
            <ProductBarHelper name="Active Wear" values={activeWear}/>
       </NavbarContainer>
       </div>
    )
}