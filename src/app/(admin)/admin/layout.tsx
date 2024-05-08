"use client"
import { signOut } from 'next-auth/react'
import Link from 'next/link'
import React, { ReactNode, useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'

interface LayoutProps {
    children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMenuOpen(window.innerWidth >= 1024);
        };

        setIsMenuOpen(window.innerWidth >= 1024);

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const toggleDropdown = () => {
        setIsMenuOpen((prevState) => !prevState);
    }

    return (
        <div className="w-full min-h-screen flex flex-wrap bg-gray-900 text-gray-200">
            <div className="flex flex-col top-0 left-0 w-full sm:w-full md:w-full lg:w-1/5 xl:w-1/5 sticky bg-gray-800 h-fit sm:h-fit md:h-fit lg:h-screen xl:h-screen border-r rounded-r-xl">
                <div className='fixed w-full sm:w-full md:w-full lg:w-1/5 xl:w-1/5 h-fit sm:h-fit md:h-fit lg:h-screen xl:h-screen'>
                    <div className="flex items-center justify-around h-14 border-b border-gray-700 rounded-md bg-gray-800">
                        <div className='flex'>
                            <Link href='/' className='font-bold'>symbiSoc.</Link>
                        </div>
                        <div className='flex lg:hidden'>
                            <Menu onClick={toggleDropdown} size={20}/>
                        </div>
                    </div>
                    <div className={`overflow-y-auto overflow-x-hidden flex-grow lg:block xl:block bg-gray-800`}>
                        {isMenuOpen &&
                            <ul className="flex flex-col py-4 space-y-1">
                                <li className="px-5">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="text-sm font-light tracking-wide text-gray-500">Menu</div>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/admin/createEvents" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-300 hover:text-white border-l-4 border-transparent hover:border-indigo-500 pr-6 rounded-md">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Create Events</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin/pastEvents" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-300 hover:text-white border-l-4 border-transparent hover:border-indigo-500 pr-6 rounded-md">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Past Events</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin/upcomingEvents" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-300 hover:text-white border-l-4 border-transparent hover:border-indigo-500 pr-6 rounded-md">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Upcoming Events</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin/roleManagement" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-300 hover:text-white border-l-4 border-transparent hover:border-indigo-500 pr-6 rounded-md">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Role Management</span>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/admin/addUsers" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-300 hover:text-white border-l-4 border-transparent hover:border-indigo-500 pr-6 rounded-md">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Add Users</span>
                                    </Link>
                                </li>
                                <li className="px-5">
                                    <div className="flex flex-row items-center h-8">
                                        <div className="text-sm font-light tracking-wide text-gray-500">Settings</div>
                                    </div>
                                </li>
                                <li>
                                    <Link href="/admin/profile" className='relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-300 hover:text-white border-l-4 border-transparent hover:border-indigo-500 pr-6 rounded-md' >
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
                                    </Link>
                                </li>
                                <li>
                                    <button onClick={() => signOut()} className="w-full relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-700 text-gray-300 hover:text-white-gray-800 border-l-4 border-transparent hover:border-indigo-500 pr-6 rounded-md">
                                        <span className="inline-flex justify-center items-center ml-4">
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                        </span>
                                        <span className="ml-2 text-sm tracking-wide truncate">Logout</span>
                                    </button>
                                </li>
                            </ul>}
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center container py-16 md:py-16 w-full sm:w-full md:w-full lg:w-4/5 xl:w-4/5'>
                {children}
            </div>
        </div>
    )
}

export default Layout