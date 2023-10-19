import React from "react";
import { Ham, Home, Iconmain, Profile } from "../../Svgs";

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg  pl-4 ">
    <div class="container-fluid">
     <Iconmain/>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0 part-1">
          <li class="nav-item">
            <a class="nav-link" aria-current="page" href="/">New</a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="/">Used</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Sell</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Electric</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Leasing</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/">Reviews</a>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0 part-2">
          <li class="nav-item d-flex flex-column justify-content-center align-items-center text-white ">
           <Home/>
           Home
          </li>
          <li class="nav-item d-flex flex-column justify-content-center align-items-center text-white ">
           <Profile/>
           Log in
          </li>
          <li class="nav-item d-flex flex-column justify-content-center align-items-center text-white ">
           <Ham/>
           Menu
          </li>
        
        </ul>
       
      </div>
    </div>
  </nav>
  
  );
}
