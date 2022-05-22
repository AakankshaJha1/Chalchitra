import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav(){
    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll",() =>{
            if(window.scrollY > 200 ){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll");
        }
    },[]);
    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo"
                src=''
                alt="Movie"
            />
        </div>
    )
}

export default Nav;