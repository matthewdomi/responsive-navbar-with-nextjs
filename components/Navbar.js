import React, {useState} from 'react'
import {Transition} from '@headlessui/react';
import {Link} from 'react-scroll'; 

const Navbar = () => {

    const [isOpen, setIsOpen] = useState();
  return (
    <div>
      <nav className="shadow-sm fixed w-full z-10">
        <div className="w-full">
            <div className="flex items-center h-20 w-full">
                <div className=" flex items-center mx-20 justify-between w-full">
                            <div className="flex justify-center items-center flex-shink-0">
                            <h1 className="font-bold text-xl curser-pointer">Demak <span className="text-blue-500">Ventures</span></h1>
                            </div>
                            {/* fo small screen we do not show tabs that's written hidden and on medium devices we want them as block  */}
                            <div className="hidden md:block">
                                <div className="ml-10 felx items-baseline space-x-4">
                                  
                                {/* Explanation for Link
                                Link carry some of the properties like activeClass i.e on curent page,
                                to i.e on about page if there, smooth ie transition between tabs,
                                ofset i.e time interval transition. duration i.e how much time it will change. */}

                                    <Link activeClass="Home"
                                     to="home" 
                                     smooth={true} 
                                     offset={50} 
                                     duration={500}
                                    className="cursor-pointer text-blue-600 font-semibold px-3 py-2 text-md hover:font-black "
                                    >
                                        Home
                                    </Link>
                                    
                                    <Link activeClass="About"
                                     to="about" 
                                     smooth={true} 
                                     offset={50} 
                                     duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:tet-wite px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        About
                                    </Link>

                                    <Link activeClass="work"
                                     to="work" 
                                     smooth={true} 
                                     offset={50} 
                                     duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:tet-wite px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Pojects
                                    </Link>
                                    
                                    <Link activeClass="services"
                                     to="services" 
                                     smooth={true} 
                                     offset={50} 
                                     duration={500}
                                    className="cursor-pointer hover:bg-blue-600 text-black hover:tet-wite px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        services
                                    </Link>

                                    <Link activeClass="Contact"
                                     to="contact" 
                                     smooth={true} 
                                     offset={50} 
                                     duration={500}
                                    className="cursor-pointer bg-blue-600 text-white px-3 py-2 hover:bg-black rounded-md text-sm font-medium"
                                    >
                                        Contact
                                    </Link>
                                </div>
                            </div>
                </div>
            {/* Mobile responsiveness */}
            <div className="mr-10 flex md:hidden">
                <button onClick={()=>setIsOpen(!isOpen)}
                 className="bg-blue-600 inline-flex items-center justify-cente p-2 ounded-md text-white hover:bg-blue-600 focus:outline-none focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                 type="button"
                 aria-controls="mobile-menu"
                 aria-expanded="false"
                 >
                    <span className="sr-only">Open main menu</span>
                    {!isOpen ? (
                        <svg className="block h-6 w-6" 
                        xmlns="http:wind.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentcolor"
                        aria-hidden="true"
                        >
                            <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                             strokeWidth="2"
                            d="M4 6h1M4 12h16M4 18h16"/>
                        </svg>
                    ):(
                        <svg className="block h-6 w-6" 
                        xmlns="http:wind.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentcolor"
                        aria-hidden="true"
                        >
                            <path 
                            strokeLinecap="round"
                             strokeLinejoin="round" 
                             strokeWidth="2"
                            d="M6 18L18 6M6 6112 12"/>
                        </svg> 
                    )}
                 
                 </button>
            </div>
            </div>
        </div>
        <Transition
        show={isOpen}
        enter="tansition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="tansition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
        >
            {(ref) =>(
                <div className="md:hidden id-mobile-menu">
            <div ref={ref} className="bg-white px-2 pt-2 pb-3 space-y-1 sm:px-3" >
            <Link href="/home"
            activeClass="home"
            to="home"
            smooth={true}
            duration={500}
            className=" curser-pointer hover:bg-blue-600 
            text-black 
            hover:text-white block px-3 py-2 rounded-md text-base font-medium"
           
            >
                 Home
                       </Link>

                       <Link href="/about"
            activeClass="about"
            to="about"
            smooth={true}
            duration={500}
            className=" curser-pointer hover:bg-blue-600 
            text-black 
            hover:text-white block px-3 py-2 rounded-md text-base font-medium"
           
            >
                 About
                       </Link>


                       <Link href="/work"
            activeClass="work"
            to="work"
            smooth={true}
            duration={500}
            className=" curser-pointer hover:bg-blue-600 
            text-black 
            hover:text-white block px-3 py-2 rounded-md text-base font-medium"
           
            >
                 Pojects
                       </Link>

                       <Link href="/services"
            activeClass="services"
            to="services"
            smooth={true}
            duration={500}
            className=" curser-pointer hover:bg-blue-600 
            text-black 
            hover:text-white block px-3 py-2 rounded-md text-base font-medium"
           
            >
                 Services
                       </Link>

                       <Link href="/contact"
            activeClass="Contact"
            to="contact"
            smooth={true}
            duration={500}
            className=" curser-pointer hover:bg-blue-600 
            text-black 
            hover:text-white block px-3 py-2 rounded-md text-base font-medium"
           
            >
                 Contact
                       </Link>
                     </div>
                </div>
            )}

        </Transition>
      </nav>
    </div>
  )
}

export default Navbar
