import React, { useState } from "react";
import Pagination from "@material-tailwind/react/Pagination";
import PaginationItem from "@material-tailwind/react/PaginationItem";
import Icon from "@material-tailwind/react/Icon";
import { useSearchParams } from "react-router-dom";

const FullPagination = ({totalPages, currPage, changePageNumber}) => {
    const [curr, setCurr] = useState(currPage);

    return (
        <Pagination >
            {
            curr-2 > 0 ? (
                <button className="outline-0" onClick={(e)=>{e.preventDefault(); changePageNumber(curr-2); setCurr(curr-2) }}>
                    <PaginationItem href="" ripple="dark">
                        {curr-2}
                    </PaginationItem>
                </button>
            ) : (<></>)    
            }
            {
            curr-1 > 0 ? (
                <button className="outline-0" onClick={(e)=>{e.preventDefault(); changePageNumber(curr-1); setCurr(curr-1) }}>
                    <PaginationItem href="" ripple="dark">
                        {curr-1}
                    </PaginationItem>
                </button>
            ) : (<></>)    
            }
            { totalPages > 0 ?
            <PaginationItem color="orange" ripple="light">{curr}</PaginationItem>
            : null
            }
            {
            curr+1 <= totalPages ? (
                <button className="outline-0" onClick={(e)=>{e.preventDefault(); changePageNumber(curr+1); setCurr(curr+1) }}>
                    <PaginationItem href="" ripple="dark">
                        {curr+1}
                    </PaginationItem>
                </button>
            ) : (<></>)    
            }
            {
            curr+2 <= totalPages ? (
                <button className="outline-0" onClick={(e)=>{e.preventDefault(); changePageNumber(curr+2); setCurr(curr+2) }}>
                    <PaginationItem href="" ripple="dark">
                        {curr+2}
                    </PaginationItem>
                </button>
            ) : (<></>)    
            }
        </Pagination>
    );
}

export default FullPagination;