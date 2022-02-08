import {Link} from 'react-router-dom'

function NavBar() {
  return (
    <nav className='navbar'>
      <Link to='/'><h2>The Dojo Blog</h2></Link>
        <div className='links'>
            <Link to='/'>Home</Link>
            <Link to='/create'>New Blog</Link>
        </div>
    </nav>
  )
}

export default NavBar
