import React, { useState } from 'react'
import logo from '../assets/Logo.png'
import { navigation } from '../constants/constants'
import { Link, useLocation } from 'react-router-dom'
import Button from './Button'
import { RxHamburgerMenu } from "react-icons/rx";
import { FaX } from "react-icons/fa6";

const Navbar = () => {
    const pathName = useLocation();
    const [openNavigation, setOpenNavigation] = useState(false);
    const [color, setColor] = useState(false);
    const toggleNavigation = () => {
        if (openNavigation) {
            setOpenNavigation(false);
            // enablePageScroll();
        } else {
            setOpenNavigation(true);
            // disablePageScroll();
        }
    };
    const handleClick = () => {
        if (!openNavigation) return;

        // enablePageScroll();
        setOpenNavigation(false);
    };
    const changeColor = () => {
        if(window.scrollY >= 85)
            setColor(true)
        else{
            setColor(false)
        }
    }
    window.addEventListener('scroll', changeColor)
    return (
        <>
            <div className={`fixed top-0 left-0 z-50 w-full border-b-2 border-n-15 transition-all ${color ? 'bg-n-9' : ''}`}>
                <div className='flex items-center justify-between px-5 
                lg:px-7.5 xl:px-10 max-lg:py-4'>
                    <a href="home" className='block w-[12rem]'>
                        <img src={logo} alt="96klive" width={190} height={40} />
                    </a>
                    <nav className={`${openNavigation ? "block opacity-100" : "opacity-0 lg:opacity-100 invisible"} bg-n-9 lg:visible lg:bg-transparent transition-all fixed top-[5rem] left-0 right-0 bottom-0
                    lg:static lg:flex`}>
                        <div className='relative z-2 flex flex-col items-center justify-between
                        lg:flex-row lg:items-end'>
                            {navigation.map((item) => {
                                return <Link key={item.id}
                                    to={item.url}
                                    className={`block relative font-code text-2xl uppercase transition-colors hover:text-color-1 px-6 py-6 md:py-8 lg:-mr-0.25 lg:font-semibold ${item.url === pathName.pathname
                                        ? "z-2 text-color-1"
                                        : "text-n-1"
                                        } lg:leading-5 lg:hover:text-color-1 xl:px-12 lg:text-xl`} onClick={handleClick}>
                                    {item.title}
                                </Link>
                            })}
                        </div>
                    </nav>
                    <Button className='lg:hidden'
                        px="px-3"
                        onClick={toggleNavigation}
                    >
                        {openNavigation ? <FaX /> : <RxHamburgerMenu />}
                    </Button>
                </div>
            </div>
        </>
    )
}

export default Navbar