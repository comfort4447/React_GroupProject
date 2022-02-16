 import React from "react"

export default function Navbar() {
    return(
            <div className="bkground-img">
            <nav>
                
                    <img src="../images/interjet.png" alt="" className="nav-img" />
                <div className="nav-details">
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">Services</a></li>
                        <li><a href="/#">About</a></li>
                        <button className="nav-start">Get Started</button>
                    </ul>
                </div>
            </nav>
            </div>
            
    )
}