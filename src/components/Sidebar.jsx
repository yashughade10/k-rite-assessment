import React, { useState } from 'react';
import { ChevronDown, CircleHelp, Code, Folder, Megaphone, MessagesSquare, PenTool, Plus, SquarePlus, UserPlus } from 'lucide-react';
import logo from '/assets/images/Logo.png'
import userLogo from '/assets/images/members/6.avif'

const Sidebar = () => {

    const [isOpen1, setIsOpen1] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const [isOpen3, setIsOpen3] = useState(false);
    const [isHamburgerOpen, setIsHamburgerOpen] = useState(false);

    // Function to toggle the dropdown menu
    const toggleDropdown = (dropdownNumber) => {
        switch (dropdownNumber) {
            case 1:
                setIsOpen1(!isOpen1);
                break;
            case 2:
                setIsOpen2(!isOpen2);
                break;
            case 3:
                setIsOpen3(!isOpen3);
                break;
            default:
                break;
        }
    };

    // Function to toggle the hamburger for menu options (Mobile devices)
    const toggleSidebar = () => {
        setIsHamburgerOpen(!isHamburgerOpen);
    };


    return (
        <>
            <button type="button"
                className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                onClick={toggleSidebar}>
                <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path clip-rule="evenodd" fill-rule="evenodd" d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"></path>
                </svg>
            </button>

            <aside className={`fixed top-0 left-0 z-40 w-68 h-screen transition-transform ${isHamburgerOpen ? '' : '-translate-x-full'
                } sm:translate-x-0 border-2 sm:rounded-2xl rounded-r-lg mt-14 sm:m-4 bg-white`}>
                <div className="h-full px-3 py-4 overflow-y-auto">
                    <a href="#" className="flex items-center justify-between ps-2.5 mb-5">
                        <div className="flex items-center">
                            <img src={logo} className="h-10 me-3 sm:h-10" alt="Flowbite Logo" />
                            <span className="self-center leading-4 font-semibold whitespace-nowrap dark:text-black">
                                <p>INC</p>
                                <p>InnovateHub</p>
                            </span>
                        </div>
                        <img src={userLogo} className="h-8 w-8 sm:h-8 rounded-full" alt="User Logo" />
                    </a>

                    <ul className="space-y-2 font-medium">
                        <div className='border-2 rounded-xl'>
                            <li>
                                <a href="#" className="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-black dark:hover:bg-gray-300 group">
                                    <div className="flex items-center">
                                        <PenTool className='menu-icon' size={20} />
                                        <span className="ms-3">Design Team</span>
                                    </div>
                                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-md dark:bg-gray-300 dark:text-gray-600 group-hover:bg-white group-hover:text-gray-600">x+1</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-black dark:hover:bg-gray-300 group ">
                                    <div className="flex items-center">
                                        <Megaphone className='menu-icon' size={20} />
                                        <span className="ms-3">Marketing Team</span>
                                    </div>
                                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-md dark:bg-gray-300 dark:text-gray-600 group-hover:bg-white group-hover:text-gray-600">x+2</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-black dark:hover:bg-gray-300 group">
                                    <div className="flex items-center">
                                        <Code className='menu-icon' size={20} />
                                        <span className="ms-3">Development Team</span>
                                    </div>
                                    <span className="inline-flex items-center justify-center px-2 ms-3 text-sm font-medium text-gray-800 bg-gray-100 rounded-md dark:bg-gray-300 dark:text-gray-600 group-hover:bg-white group-hover:text-gray-600">x+3</span>
                                </a>
                            </li>
                            <hr />
                            <li>
                                <a href="#" className="flex items-center justify-between p-2 text-gray-900 rounded-lg dark:text-black dark:hover:bg-gray-300 group">
                                    <div className="flex items-center">
                                        <SquarePlus className='menu-icon' color='gray' size={20} />
                                        <span className="ms-3 text-gray-400">Create a team</span>
                                    </div>
                                </a>
                            </li>
                        </div>


                        <div>
                            <div className=' flex justify-between items-center mx-2'>
                                <p>FOLDERS</p>
                                <Plus size={20} />
                            </div>
                            <li>
                                <button className={`flex items-center w-full p-2 text-base text-gray-900 rounded-lg dark:hover:bg-gray-300 ${isOpen1 ? 'bg-gray-300' : ''}`} onClick={() => toggleDropdown(1)} aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <Folder size={20} />
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Products</span>
                                    <ChevronDown size={20} className='ml-1' />
                                </button>
                                <ul id="dropdown-example" className={`py-2 space-y-2 ${isOpen1 ? '' : 'hidden'} hidden py-2 space-y-2`}>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group dark:hover:text-gray-600 relative ">
                                            <div className="absolute left-4 top-28 transform -translate-y-1/2" >
                                                <div className="w-3 h-0.5 absolute top-7 left-2 bg-gray-400"></div>
                                                <div className="w-0.5 h-56 bg-gray-400 ml-2"></div>
                                            </div>
                                            Roadmap</a>
                                    </li>
                                    <li className=' relative'>
                                        <a href="#" className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 dark:hover:text-gray-600 ">Feedback</a>
                                        <div className="w-3 h-0.5 absolute top-5 left-6 bg-gray-400"></div>
                                    </li>
                                    <li className='relative'>
                                        <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 dark:hover:text-gray-600">Performance</a>
                                        <div className="w-3 h-0.5 absolute top-6 left-6 bg-gray-400"></div>
                                    </li>
                                    <li className='relative'>
                                        <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 dark:hover:text-gray-600">Team</a>
                                        <div className="w-3 h-0.5 absolute top-6 left-6 bg-gray-400"></div>
                                    </li>
                                    <li className='relative'>
                                        <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 dark:hover:text-gray-600">Analytics</a>
                                        <div className="w-3 h-0.5 absolute top-6 left-6 bg-gray-400"></div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button className={`flex items-center w-full p-2 text-base text-gray-900 rounded-lg dark:hover:bg-gray-300 ${isOpen2 ? 'bg-gray-300' : ''}`} onClick={() => toggleDropdown(2)} aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <Folder size={20} />
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Sales</span>
                                    <ChevronDown size={20} className='ml-1' />
                                </button>
                                <ul id="dropdown-example" className={`py-2 space-y-2 ${isOpen2 ? '' : 'hidden'} hidden py-2 space-y-2`}>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group dark:hover:text-gray-600 relative ">
                                            <div className="absolute left-4 top-14 transform -translate-y-1/2" >
                                                <div className="w-3 h-0.5 absolute top-7 left-2 bg-gray-400"></div>
                                                <div className="w-0.5 h-32 bg-gray-400 ml-2"></div>
                                            </div>
                                            Products</a>
                                    </li>
                                    <li className=' relative'>
                                        <a href="#" className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 dark:hover:text-gray-600 ">Billing</a>
                                        <div className="w-3 h-0.5 absolute top-5 left-6 bg-gray-400"></div>
                                    </li>
                                    <li className='relative'>
                                        <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 dark:hover:text-gray-600">Invoice</a>
                                        <div className="w-3 h-0.5 absolute top-6 left-6 bg-gray-400"></div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button className={`flex items-center w-full p-2 text-base text-gray-900 rounded-lg dark:hover:bg-gray-300 ${isOpen3 ? 'bg-gray-300' : ''}`} onClick={() => toggleDropdown(3)} aria-controls="dropdown-example" data-collapse-toggle="dropdown-example">
                                    <Folder size={20} />
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Design</span>
                                    <ChevronDown size={20} className='ml-1' />
                                </button>
                                <ul id="dropdown-example" className={`py-2 space-y-2 ${isOpen3 ? '' : 'hidden'} hidden py-2 space-y-2`}>
                                    <li>
                                        <a href="#" className="flex items-center w-full p-2 transition duration-75 rounded-lg pl-11 group dark:hover:text-gray-600 relative ">
                                            <div className="absolute left-4 top-14 transform -translate-y-1/2" >
                                                <div className="w-3 h-0.5 absolute top-7 left-2 bg-gray-400"></div>
                                                <div className="w-0.5 h-32 bg-gray-400 ml-2"></div>
                                            </div>
                                            Products</a>
                                    </li>
                                    <li className=' relative'>
                                        <a href="#" className="flex items-center w-full p-2  transition duration-75 rounded-lg pl-11 dark:hover:text-gray-600 ">Billing</a>
                                        <div className="w-3 h-0.5 absolute top-5 left-6 bg-gray-400"></div>
                                    </li>
                                    <li className='relative'>
                                        <a href="#" className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 dark:hover:text-gray-600">Invoice</a>
                                        <div className="w-3 h-0.5 absolute top-6 left-6 bg-gray-400"></div>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <button className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg dark:hover:bg-gray-300" data-collapse-toggle="dropdown-example">
                                    <Folder size={20} />
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Office</span>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg dark:hover:bg-gray-300" data-collapse-toggle="dropdown-example">
                                    <Folder size={20} />
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Legal</span>
                                </button>
                            </li>
                        </div>

                    </ul>
                        <div className="flex flex-col justify-normal mt-32 space-y-2 list-none">
                            <li>
                                <button className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg dark:hover:bg-gray-300" data-collapse-toggle="dropdown-example">
                                    <UserPlus size={20} />
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Invite teammates</span>
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center w-full p-2 text-base text-gray-900 rounded-lg dark:hover:bg-gray-300" data-collapse-toggle="dropdown-example">
                                    <CircleHelp size={20} />
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Help and first steps</span>
                                    <MessagesSquare className="h-9 w-9 sm:h-8 sm:w-8 md:w-9 md:h-9 lg:h-4 lg:w-7 border-2 rounded-sm text-gray-500 cursor-pointer hover:bg-gray-100" />
                                </button>
                            </li>
                            <li>
                                <button className="flex items-center w-full p-2 text-base border bg-gray-100 text-gray-900 rounded-lg dark:hover:bg-gray-300" data-collapse-toggle="dropdown-example">
                                    <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap"><span className='rounded-md px-1 bg-white'>7</span> days left for trial</span>
                                    <button className="py-1 px-1 text-white bg-black text-sm rounded-md hover:bg-white hover:text-black transition-colors">Add billing</button>
                                </button>
                            </li>
                        </div>

                </div>

            </aside>
        </>
    );
}

export default Sidebar;
