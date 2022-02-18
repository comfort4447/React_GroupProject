import React from "react"
import AboutUs from "./AboutUs"
import Service from "./Service"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Home from "./Home"
import data from "../data"


export default function App() {
  return(
    <div className="app--class">
      <Navbar />
      <Home />
      <AboutUs />
      <Service />
      <Footer />
    </div>
  )
}