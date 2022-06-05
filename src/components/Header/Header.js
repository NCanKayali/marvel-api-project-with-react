import React from 'react'
import logo from "../../images/marvel-logo.png"

const Hearder = () => {
  return (
    <header className='header'>
      <a id='url' target="_blank" rel='noreferrer' href='https://www.marvel.com/' >

        <img className='marvel_logo' src={logo} alt="marvel_logo" />
      </a>
    </header>
  )
}

export default Hearder