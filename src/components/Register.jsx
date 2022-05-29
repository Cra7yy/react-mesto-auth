import { Link } from 'react-router-dom'

const Register = () => {

  return (
    <div className="log-in">
      <h2 className="log-in__title">Регистрация</h2>
      <form className="log-in__form" onSubmit={''}>
        <input
          type="email"
          className="log-in__input log-in__email"
          placeholder="Email"
          required
          minLength="5"
          maxLength="40"
          onChange={''}
          />
        <input
          type="password"
          className="log-in__input log-in__pasword"
          placeholder="Пароль"
          required
          minLength="2"
          maxLength="30"
          onChange={''}
          />
        <button type="submit" className="log-in__button">Зарегистрироваться</button>
      </form>
      {/* <InfoTooltip/> */}
      <p className="log-in__text">Уже зарегистрированы?<Link to="/signin" className="log-in__text link"> Войти</Link></p>
    </div>
  )
}

export default Register