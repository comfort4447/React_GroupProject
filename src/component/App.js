import React from "react"
import Service from "./Service"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Home from "./Home"

function App() {
  return (
    <div className="app--class">
      <Navbar />

      <Home />

      <Service />

      <Footer />
      
    </div>
  )
}

export default App;
