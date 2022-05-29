const Login = ({onAuthorise}) => {

  return (
    <div className="log-in">
      <h2 className="log-in__title">Вход</h2>
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
        <button type="submit" className="log-in__button">Войти</button>
      </form>
    </div>
  )
}

export default Login