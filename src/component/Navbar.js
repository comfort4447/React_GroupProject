import React from "react"

export default function Navbar() {
    return(
            <nav>
                <img src="../images/interjet.png" alt="" className="img-nav" />
                <div className="nav-details">
                    <a href="/#">Home</a>
                    <a href="/#">Services</a>
                    <a href="/#">About</a>
                    <button className="get-started">Get Started</button>
                </div>
            </nav>
    )
}