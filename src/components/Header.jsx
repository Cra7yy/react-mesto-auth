import logo from '../images/Logo.svg'
import {Link} from 'react-router-dom'

const Header = () => {

  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo"/>
      <p className='header__link'>{}</p>
      <Link to='/signup' className='header__link link' onClick={''}>регистрация</Link>
    </header>
  )
}

export default Header