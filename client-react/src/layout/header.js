import React from 'react'

const Header = () => {
  return (
    <header className="app-header">
      <div className="nombre-usuario">Hola <span>Juan Pablo</span></div>
      <div className="nav nav-principal">
        <a href="#!">Sign up</a>
      </div>
    </header>
  )
}

export default Header
