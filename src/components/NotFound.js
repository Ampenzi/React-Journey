import React from 'react'
import { Link } from 'react-router-dom'
import background from './not-found.svg'
function NotFound() {
  return (
    <div className='not-found' style={{backgroundImage: `url(${background})`}}>
      <h2>404 Error</h2>
      <p>URL_CANN0T_RESOLVE</p>
      <Link to='/'>Home</Link>
    </div>
  )
}

export default NotFound
