import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const [user, setUser] = useState({
    email: '',
    password: ''
  })
  const { email, password } = user
  const onChange = (event) => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Login</h1>
        <form>
          <div className="campo-form">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Your email"
              value={email}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Your password"
              value={password}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Login"
            />
          </div>
        </form>
        <Link to={'/new-account'} className="enlace-cuenta">
          Get account
        </Link>
      </div>
    </div>
  )
}

export default Login
