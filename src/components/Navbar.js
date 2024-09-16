import Link from 'next/link'
import config from '@/config'


const Navbar = () => {


  return (
    <header className="bg-gray-900">
      <nav className="mx-auto flex items-center justify-between w-full max-w-7xl p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <img src={`${config.nav_icon}`}  className="rounded-full shadow-md brightness-100 saturate-100 w-20 h-25"/>
          </Link>
          <span className='text-center mx-5 my-7 font-bold text-white'>Developer Profile</span>
        </div>
        
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="#Profile" className="text-sm font-semibold leading-6 text-white">Profile</Link>
          <Link href="#Projects" className="text-sm font-semibold leading-6 text-white">Projets</Link>
          <Link href="#Contact" className="text-sm font-semibold leading-6 text-white">Contact</Link>
        </div>
      </nav>
    </header>
  )
}

export default Navbar