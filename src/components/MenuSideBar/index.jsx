import './MenuSideBar.css'

import { AiOutlineDashboard } from "react-icons/ai";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa";
import { Link } from 'react-router-dom';

export default function MenuSideBar() {
  return (
    <div className='container-sidebar'>
      <ul>
        <li><Link to="/"><AiOutlineDashboard /> Dashboard</Link></li>
        <li><Link to="/eventos"><FaRegCalendarAlt /> Eventos</Link></li>
        <li><Link to="/usuarios"><FaUsers /> Usuários</Link></li>
        <li><Link to="/salas"><FaBuilding /> Salas</Link></li>
      </ul>
    </div>
  )
}