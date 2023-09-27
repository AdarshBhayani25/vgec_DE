import React, { Component } from 'react'
import Searchbox from '../Searchbox'

export default function Navbar(props) {

  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">VGEC</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>

              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="#">Block A</a></li>
                  <li><a className="dropdown-item" href="#">Block B</a></li>
                  <li><a className="dropdown-item" href="#">Block C</a></li>
                  <li><a className="dropdown-item" href="#">Block D</a></li>
                  <li><a className="dropdown-item" href="#">Block E</a></li>
                  <li><a className="dropdown-item" href="#">Block F</a></li>
                  <li><a className="dropdown-item" href="#">Block G</a></li>
                  <li><a className="dropdown-item" href="#">other</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <Searchbox SearchChange={props.onsearch} />
            {/* <Searchbox SearchChange={props.onsearch} /> */}
          </div>
        </div>
      </nav>
    </div>
  )

}
