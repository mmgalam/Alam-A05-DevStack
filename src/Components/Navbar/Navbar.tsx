import { FaBars } from 'react-icons/fa'
import Logo from '../../assets/logo-text.png'

export default function Navbar() {
    
    return (
        <nav className='flex justify-between container mx-auto items-center my-2 py-3'>

            <button className='md:hidden text-xl'>
                <FaBars />
            </button>
            
            <img src={Logo} alt="Logo" className='w-32' />

            <ul className='hidden md:flex gap-4'>
                <li className='text-orange-500'><a href="#">Home</a></li>
                <li><a href="#">Technologies</a></li>
                <li><a href="#">Projects</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>

            <div className='flex gap-4'>
                <button>Sign In</button>
                <button className='bg-[#D91B7E] text-white px-3 py-1.5 rounded-2xl'>Sign Up</button>
            </div>

            
        </nav>
    )
}