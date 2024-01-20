import React from "react"
import "./App.css"
import NavItems from "./components/NavItems"
import Footer from "./components/Footer"
import { Outlet } from "react-router-dom"

export default function  App ( ){
    return (
        <>
            <NavItems/>
            <div className="min-vh-100">
                <Outlet/>
            </div>
            <Footer/>
        </>
    )
}
