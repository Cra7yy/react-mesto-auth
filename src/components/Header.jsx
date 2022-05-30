import { Link, useLocation } from 'react-router-dom'

import logo from '../images/Logo.svg'

const Header = ({ signOut, email }) => {

  const location = useLocation()

  let link = ''
  let text = ''

    if (location.pathname ==='/signin') {
      link = 'signup';
      text = 'Регистрация';
  } else if (location.pathname ==='/signup') {
      link = 'signin';
      text = 'Вход';
  } else if (location.pathname ==='/main') {
      link = 'signin';
      text = 'Выход';
  }

  const onClose = () => {
      if (location.pathname ==='/main') { 
        signOut();
      }
  }

  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo"/>
      <div className='header__block'>
        <p className='header__link'>{email.email}</p>
        <Link to={link} className=' header__link link' onClick={onClose}>{text}</Link>
      </div>
    </header>
  )
}

export default Header