import './Header.css'

import Search from "../Search";
import { IoMenu } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header>
      <div className='container-main'>
        <div>
          <img src="LOGO _DIGITAL_ COLLEGE.PNG" alt="" className='logo' />
        </div>
        <div className="container-header">
          <div className="menu-search">
            <IoMenu />
            <IoSearch />
            <Search />
          </div>
          <div className="notifications-user">
            <IoMailOutline />
            <IoNotificationsOutline />
            <div className="dropdown">
              <button className="btn dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Modo Claro
              </button>
              <ul className="dropdown-menu">
                <li><button className="dropdown-item" type="button">Modo Claro</button></li>
                <li><button className="dropdown-item" type="button">Modo Escuro</button></li>
              </ul>
            </div>
            <img src="https://avatars.githubusercontent.com/u/127361936?v=4" alt="" className='img-user' />
          </div>
        </div>
      </div>
    </header>
  )
}