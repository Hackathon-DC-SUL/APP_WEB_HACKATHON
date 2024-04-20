import './CardInfo.css'

export default function CardInfo({ titulo, quantidade, periodo, icone, bgCor }) {
  return (
    <div className="card-info" style={{background: bgCor}}>
      <div className='info'>
        <p className="titulo">{titulo}</p>
        <p className="quantidade">{quantidade}</p>
        <p className="periodo">{periodo}</p>
      </div>
      <div className='icon'>
        {icone}
      </div>
    </div>
  )
}