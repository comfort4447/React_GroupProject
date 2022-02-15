 import React from "react"

export default function Navbar() {
    return(
            <nav>
                <div className="nav-logo">
                    <img src="../images/interjet.png" alt="" className="nav-img" />
                </div>
                <div className="nav-details">
                    <ul>
                        <li><a href="/#">Home</a></li>
                        <li><a href="/#">Services</a></li>
                        <li><a href="/#">About</a></li>
                        <button className="get-started">Get Started</button>
                    </ul>
                </div>
            </nav>
    )
}