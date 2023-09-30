import React from 'react'
import "./topbar.css"
import { Link } from "react-router-dom";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
      <i class="topicon fa-brands fa-facebook"></i>
      <i class="topicon fa-brands fa-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link to="/">HOME</Link>
              </li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
        </ul>
      </div>
      <div className="topRight"></div>
    </div>
  )
}
