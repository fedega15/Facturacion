//Logo
import Vessel from '../assets/logo.jpg'

export default function HomePage() {
  return (
    <div>
      <h1 style={{
        textAlign: 'left',
        padding: '8px'
      }}>
       CONTABILITY
      </h1>
      <div>
        <img src={Vessel} className='logo'/>
      </div>
    </div>
  )
}
