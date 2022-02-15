 import React from "react"

export default function Home(){
    return (
        <div className="home">
            <div className="home-text" >
                <h2>We grow e-commerce <br></br>On average increase <br></br>revenue by 90%</h2>
                <p>On average we’ve helped businesses increase revenue by <br></br>80%. 
                See what we can do for you.</p>
                <div className="btn-start">
                    <button className="start">Get Started</button>
                </div>
                <img src="../images/group_logo.png"  alt="" className="home-logo"/>
            </div>
            <img src="../images/home-image.png" alt="" className="home-img" />
        </div>
    )
}