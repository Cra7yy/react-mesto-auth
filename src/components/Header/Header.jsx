import logo from '../../images/Logo.svg'

const Header = () => {
  return (
    <header className="header">
      <img src={logo} alt="логотип" className="header__logo" />
    </header>
  )
}

export default Header