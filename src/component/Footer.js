import React from "react"

export default function Footer () {
    return (

        <footer>
            <div className="footer--sec">

                <div className="footer--img">
                <img src="./images/interjet.png" alt="" />
                </div>
                
                <div className="footer--list">
                    <div className="footer--right">
                        <h3 className="footer--header">Platform</h3>
                        <ul className="footer--item">
                            <li>Demo</li>
                            <li>Pricing</li>
                            <li>Landing Pages</li>
                            <li>How to Shop</li>
                            <li>WordPress</li>
                        </ul>
                    </div>
            
                    <div className="footer--right">
                        <h3 className="footer--header">Knowledge Base</h3>
                        <ul className="footer--item">
                            <li>Blog</li>
                            <li>Help Center</li>
                            <li>Showcase</li>
                            <li>Academy</li>
                            <li>API</li>
                        </ul>
                    </div>

                    <div className="footer--right">
                        <h3 className="footer--header">Partnership</h3>
                        <ul className="footer--item">
                            <li>Partners</li>
                            <li>Product Designers</li>
                            <li>All Others</li>
                        </ul>
                    </div>

                </div>
            </div>

            <hr />

            <div className="footer--Copyright">
                <p>2022 &copy; Copyright. All right reserved to PIIS DEVELOPMENT TEAM</p>
            </div>
            
        </footer>

        )
}