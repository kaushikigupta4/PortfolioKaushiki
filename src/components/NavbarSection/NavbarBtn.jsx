import { Link } from "react-scroll"


const NavbarBtn = () => {
  return (
    <Link to="contact"  smooth={true} duration={500}>
    <button className='md:px-8 md:py-4 px-4 py-2 rounded-full text-xl font-bold bg-[#6146E0] text-white hover:bg-gradient-to-r from-[#6146E0] to-blue-400 hover:scale-110 transition-all duration-700'>
Contact
   </button></Link>
   
  )
}

export default NavbarBtn
