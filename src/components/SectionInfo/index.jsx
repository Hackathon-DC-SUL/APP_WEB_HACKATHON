import './SectionInfo.css'

import { FaBuilding, FaRegCalendarAlt, FaUsers } from "react-icons/fa";
import { LuClock9 } from "react-icons/lu";
import CardInfo from "../CardInfo";

export default function SectionInfo() {
  return (
    <section>
      <CardInfo 
        titulo='Eventos ocorridos'
        quantidade={3457}
        periodo='Dez-Fev 2024'
        icone={<FaRegCalendarAlt size={30}/>}
        bgCor='linear-gradient(to right, #8e44ad, #b8a6c9)'
      />
      <CardInfo
        titulo='Número de salas'
        quantidade={53}
        periodo='Dez-Fev 2024'
        icone={<FaBuilding size={30}/>}
        bgCor='linear-gradient(to right, #eb5a7a, #e4bbc4)'
      />
      <CardInfo 
        titulo='Novos Usuários'
        quantidade={245}
        periodo='Dez-Fev 2024'
        icone={<FaUsers size={30}/>}
        bgCor='linear-gradient(to right, #ee9348, #dfc8b5)'
      />  
      <CardInfo 
        titulo='Taxa de ocupação'
        quantidade='69%'
        periodo='Dez-Fev 2024'
        icone={<LuClock9 size={30}/>}
        bgCor='linear-gradient(to right, #2d6aee, #b4c4e6)'
      />
    </section>
  )
}