import React from 'react'
import {Routes,Route} from "react-router-dom"
import Home from "../pages/home";
import About from "../pages/about";
import Work from "../pages/work";
import Project from "../pages/project";

function Router() {
  return (
    <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/project" element={<Project/>}/>
    </Routes>
  )
}

export default Router