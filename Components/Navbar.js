import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Link from "next/link" 
export default function Navbar() {
  return (
    <>

    <nav className="navbar px-5 navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">GONA</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse px-4" id="navbarNav">
        <ul className="navbar-nav">
            <li className="nav-item active">
            <Link  href="/accueil">
                <a className="nav-link" >Accueil<span className="sr-only"></span></a>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/blog">
                <a className="nav-link" >Blog</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/contact">
                <a className="nav-link" >Contact</a>
            </Link>
            </li>
            <li className="nav-item">
            <Link href="/apropos">
                <a className="nav-link" >A propos</a>
            </Link>
            </li>
            
        </ul>
        </div>
    </nav>
    
    </>
  )
}
