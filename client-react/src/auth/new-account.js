import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NewAccount = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirm: ''
  })
  const { name, email, password, confirm } = user
  const onChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }
  const onSubmit = event => {
    event.preventDefault()
  }

  return (
    <div className="form-usuario">
      <div className="contenedor-form sombra-dark">
        <h1>Get an account</h1>
        <form onSubmit={onSubmit}>
        <div className="campo-form">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              value={name}
              onChange={onChange}
            />
          </div>
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
            <label htmlFor="confirm">Confirm Password</label>
            <input
              type="password"
              name="confirm"
              placeholder="Your confirm password"
              value={confirm}
              onChange={onChange}
            />
          </div>
          <div className="campo-form">
            <input
              type="submit"
              className="btn btn-primario btn-block"
              value="Register"
            />
          </div>
        </form>
        <Link to={'/'} className="enlace-cuenta">
          Return to Login
        </Link>
      </div>
    </div>
  )
}

export default NewAccount
