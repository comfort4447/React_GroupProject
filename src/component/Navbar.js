 import React from "react"

export default function Navbar() {
    return(
            <nav>
                    <img src="../images/interjet.png" alt="" className="nav-img" />
                    <a href="/#" className="toggle-button">
                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </a>
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