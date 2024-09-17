import Link from 'next/link'
import config from '@/config'

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-6 flex flex-col items-center justify-between gap-8">
                <Link href="/" className="text-sm font-semibold leading-6">
                    <img src={`${config.nav_icon}`} className="rounded-full w-12 h-12" alt="Logo" />
                </Link>
                <span className='text-center font-bold text-white'>Developer Profile</span>
                <ul className="flex gap-4">
                    <li>
                        <Link href="#Profile" className="text-sm font-semibold leading-6">
                            Profile
                        </Link>
                    </li>
                    <li>
                        <Link href="#Projects" className="text-sm font-semibold leading-6">
                            Projets
                        </Link>
                    </li>
                    <li>
                        <Link href="#Contact" className="text-sm font-semibold leading-6">
                            Contact
                        </Link>
                    </li>
                    </ul>
                    <p className="text-sm font-semibold">Copyright © 2024 Clarity-Corp x LME WEB DEV. Tous droits réservés.</p>
                    </div>
                    </footer>
    )
}

export default Footer