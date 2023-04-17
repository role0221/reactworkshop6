import { Link } from "react-router-dom"
import { FaBars,FaWindowClose } from "react-icons/fa";
import { useState } from "react";
import "./Navigation.css";
import ManuData from "../data/MenuData";


const Navigation=()=>{
    const [showmenu,setshowmenu] = useState(false)
    const togglemenu = ()=>setshowmenu(!showmenu)

    return(
        <aside>
            <div className="navbar">
                <div className="navbar-toggle" >
                    <Link to="#" className="menu-bar">
                        <FaBars onClick={togglemenu}/>
                    </Link>
                </div>
            </div>
            <nav className={showmenu ? "nav-menu active" :"nav-menu"}>
                <ul className="nav-menu-item" onClick={togglemenu}>
                    <li className="navbar-toggle">
                    <Link to="#" className="menu-bar">
                        <FaWindowClose onClick={togglemenu}/>
                    </Link>
                    </li>
                    
                    {ManuData.map((menu,index)=>{
                        return(
                         <li className="menu-text" key={index}>
                            <Link to={menu.path}>
                            {menu.icon}
                            <span>{menu.title}</span>
                            </Link>
                        </li>
                        )
                    })}
                    
                </ul>
            </nav>
        </aside>
    )
}

export default Navigation