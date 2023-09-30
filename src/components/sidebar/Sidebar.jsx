import "./sidebar.css"
import amma from "./amma.jpg"
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img
            className="sidebarImg"
            src={amma}
            alt=""
            />
            <p>
                I am a passionate poet dwelling on the 
                musings life has to offer... 
            </p>
            <div className="sidebarItem">
            <span className="sidebarTitle">Categories</span>   
            <ul className="sidebarList">
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Cinema</li>
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Tech</li>
            </ul>
            </div>
            <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>   
            <div className="sidebarSocial">
            <i class="sidebaricon fa-brands fa-facebook"></i>
            <i class="sidebaricon fa-brands fa-instagram"></i>  
            </div>
            </div>
            </div>
    </div>
  )
}

