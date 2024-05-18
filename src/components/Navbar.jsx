import { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import { Link } from 'react-router-dom'


const Navbar = () => {
  const [nav, setNav] = useState(false)

  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#57dfe9]">LOGO</h1>
      <ul className="hidden md:flex">
        <Link to='/'><li className="p-4">Home</li></Link>
        <Link to='/movies'><li className="p-4">Movies</li></Link>
        <Link to='/mylist'><li className="p-4">MyList</li></Link>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
        
      </div>
      <div className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500' : 'fixed left-[-100%]'}>
      <h1 className="w-full text-3xl font-bold text-[#57dfe9] m-4">LOGO</h1>
        <ul className='p-4 uppercase'>
        <Link to='/'><li className="p-4 border-b border-gray-600">Home</li></Link>
        <Link to='/movies'><li className="p-4 border-b border-gray-600">Movies</li></Link>
        <Link to='/mylist'><li className="p-4 border-b border-gray-600">Contact</li></Link>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
