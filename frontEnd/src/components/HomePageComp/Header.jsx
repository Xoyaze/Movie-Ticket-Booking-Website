import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='h-[8vh] w-full flex items-center justify-between px-6 py-2 relative z-[100]'>
        <div className='h-full w-1/2 '>
            <Link to={'/'} className='relative z-[10] cursor-default'>
                <div className='absolute z-[20] top-1 -left-3 h-[100%] w-[12vw] cursor-pointer'></div>
                <img className='h-full scale-[4] ml-[5%] mt-[2%]' src={logo} alt="logo" />
            </Link>
        </div>
        <div className='h-full w-1/2 flex items-center justify-end gap-12 mt-2'>
            <div className='h-full flex items-center gap-4'>
                <FontAwesomeIcon icon={faSearch} className='cursor-pointer text-2xl hover:text-white hover:text-2xl transition-hover duration-150 hover:-mr-1 active:text-xl'/>
                <input className='h-[90%] rounded bg-gray-700 px-2 py-1 focus:outline-none focus:outline-gray-500 text-gray-200' type="text" placeholder='Search Movies' />
            </div>
            <button className='h-[80%] px-4 bg-orange-600 text-gray-800 rounded hover:px-5 active:px-4 hover:bg-orange-500 transition-hover duration-150'>Sign Up</button>
            <button className='hover:outline hover:outline-orange-600 px-5 h-[80%] transition-hover duration-100 hover:text-gray-200 rounded active:outline-orange-500'>Log In</button>
        </div>
    </div>
  )
}   

export default Header
