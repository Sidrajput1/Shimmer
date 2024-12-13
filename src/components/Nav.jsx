import React, { useState } from "react";
import { Link } from "react-router-dom";
import slogo from "../assets/images/slogo.webp";

function Nav() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    // <nav className="bg-gradient-to-r from-black text-orange-600 to-black ">
    //   <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8">
    //     <div className="flex justify-between items-center h-12">
    //       <div className="flex-shrink-0 py-2">
    //         <Link to="/">
    //           <img
    //             src={slogo}
    //             className="brightness-110 h-14 w-24 contrast-200"
    //             alt="logo"
    //           />
    //         </Link>
    //       </div>
    //       <div className="hidden md:flex items-center space-x-4 z-50">
    //         <Link to="/home">
    //           <p className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md uppercase font-bold">
    //             Home
    //           </p>
    //         </Link>
    //         <div className="relative">
    //           <button
    //             onMouseEnter={() => setIsDropdownOpen(true)}
    //             onMouseLeave={() => setIsDropdownOpen(false)}
    //             className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md uppercase font-bold"
    //           >
    //             Services
    //           </button>
    //           {/* {isDropdownOpen && (
    //                     <div
    //                         onMouseEnter={() => setIsDropdownOpen(true)}
    //                         onMouseLeave={() => setIsDropdownOpen(false)}
    //                         className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md z-10"
    //                     >
    //                         <Link href="/service1">
    //                             <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    //                                 Service 1
    //                             </p>
    //                         </Link>
    //                         <Link href="/service2">
    //                             <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    //                                 Service 2
    //                             </p>
    //                         </Link>
    //                     </div>
    //                 )} */}
    //         </div>
    //         <Link to="/about">
    //           <p className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md uppercase font-bold">
    //             About
    //           </p>
    //         </Link>
    //         <Link to="/contact">
    //           <p className="hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-md uppercase font-bold">
    //             Contact
    //           </p>
    //         </Link>
    //       </div>
    //       <div className="hidden md:block">
    //         <button className="bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
    //           Sign Up
    //         </button>
    //       </div>
    //       <div className="-mr-2 flex md:hidden">
    //         <button
    //           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    //           className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700"
    //         >
    //           <svg
    //             className="h-6 w-6"
    //             stroke="currentColor"
    //             fill="none"
    //             viewBox="0 0 24 24"
    //             xmlns="http://www.w3.org/2000/svg"
    //           >
    //             <path
    //               strokeLinecap="round"
    //               strokeLinejoin="round"
    //               strokeWidth="2"
    //               d="M4 6h16M4 12h16m-7 6h7"
    //             ></path>
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //   </div>

    //   {isMobileMenuOpen && (
    //     <div className="md:hidden z-50">
    //       <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 z-50">
    //         <Link href="/home">
    //           <p className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
    //             Home
    //           </p>
    //         </Link>
    //         <div className="relative">
    //           <button
    //             onClick={() => setIsDropdownOpen(!isDropdownOpen)}
    //             className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    //           >
    //             Services
    //           </button>
    //           {isDropdownOpen && (
    //             <div className="mt-2 w-full bg-white shadow-lg rounded-md z-10">
    //               <Link href="/service1">
    //                 <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    //                   Service 1
    //                 </p>
    //               </Link>
    //               <Link href="/service2">
    //                 <p className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
    //                   Service 2
    //                 </p>
    //               </Link>
    //             </div>
    //           )}
    //         </div>
    //         <Link href="/about">
    //           <p className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
    //             About
    //           </p>
    //         </Link>
    //         <Link href="/contact">
    //           <p className="hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">
    //             Contact
    //           </p>
    //         </Link>
    //       </div>
    //       <div className="px-2 pt-4 pb-3 space-y-1">
    //         <button className="w-full bg-blue-500 text-white px-4 py-2 rounded-md text-sm font-medium">
    //           Sign Up
    //         </button>
    //       </div>
    //     </div>
    //   )}
    // </nav>

    // <header className="fixed inset-x-0  z-30 mx-auto w-full max-w-screen-md border border-orange-700 bg-black py-3 shadow backdrop-blur-lg md:top-2 md:rounded-3xl lg:max-w-screen-lg">
    //   <div className="px-4">
    //     <div className="flex items-center justify-between">
    //       <div className="flex shrink-0">
    //         <a aria-current="page" className="flex items-center" href="/">
    //           <img className="h-7 w-auto" src={slogo} alt="" />
    //           {/* <p className="sr-only text-white">Website Title</p> */}
    //         </a>
    //       </div>
    //       <div className="hidden md:flex md:items-center md:justify-center md:gap-5">
    //         <Link
    //           aria-current="page"
    //           className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
    //           to="/home"
    //         >
    //           Home
    //         </Link>
    //         <Link
    //           className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
    //           to="/about"
    //         >
    //           About
    //         </Link>
    //         <Link
    //           className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
    //           to="/service"
    //         >
    //           Service
    //         </Link>
    //         <Link
    //           className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
    //           to="/about"
    //         >
    //           Contact
    //         </Link>
    //       </div>
    //       <div className="flex items-center justify-end gap-3">
    //         <a
    //           className="hidden items-center justify-center rounded-xl bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition-all duration-150 hover:bg-gray-50 sm:inline-flex"
    //           href="/login"
    //         >
    //           Sign in
    //         </a>
    //         <a
    //           className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    //           href="/login"
    //         >
    //           Login
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </header>

    <header className="fixed  inset-x-0 z-30 mx-auto w-full max-w-screen-md border border-orange-700 bg-black py-3 shadow backdrop-blur-lg md:top-2 md:rounded-3xl lg:max-w-screen-xl top-0">
            <div className="px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex shrink-0">
                        <a aria-current="page" className="flex items-center" href="/">
                            <img className="h-10 w-auto" src={slogo} alt="Logo" />
                        </a>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex md:items-center md:gap-5">
                        <Link
                            to="/home"
                            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 neon-effect"
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 neon-effect "
                        >
                            About
                        </Link>
                        <div
                            className="relative group inline-block"
                            onMouseEnter={() => setIsDropdownOpen(true)}
                            onMouseLeave={() => setIsDropdownOpen(false)}
                        >
                            <button className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 neon-effect">
                                Services
                            </button>
                            {isDropdownOpen && (
                                <div className="absolute left-0 mt-2 w-40 bg-white shadow-lg rounded-md">
                                    <Link
                                        to="/web-development"
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        Web Development
                                    </Link>
                                    <Link
                                        to="/app-development"
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        App Development
                                    </Link>
                                    <Link
                                        to="/seo-services"
                                        className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-100"
                                    >
                                        SEO Services
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link
                            to="/contact"
                            className="inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-100 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900 neon-effect"
                        >
                            Contact
                        </Link>
                    </div>

                    {/* Login Buttons */}
                    <div className="hidden md:flex items-center gap-3 ">
                        <a
                            href="/login"
                            className="hidden sm:inline-flex items-center justify-center rounded-xl bg-orange-700 px-3 py-2 text-sm font-semibold text-gray-100 shadow-sm ring-1 ring-inset  transition-all duration-150 hover:bg-gray-50"
                        >
                           Get Started
                        </a>
                        
                    </div>

                    {/* Hamburger Menu */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="text-gray-100 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16m-7 6h7"
                                />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-gray-900 text-white">
                    <div className="space-y-1 px-4 py-3">
                        <Link
                            to="/home"
                            className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-700 "
                        >
                            Home
                        </Link>
                        <Link
                            to="/about"
                            className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-700"
                        >
                            About
                        </Link>
                        <div className="relative">
                            <button
                                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                className="block w-full rounded-lg px-3 py-2 text-left text-sm font-medium hover:bg-gray-700"
                            >
                                Services
                            </button>
                            {isDropdownOpen && (
                                <div className="mt-2 space-y-2 bg-white text-gray-900 rounded-lg shadow-md">
                                    <Link
                                        to="/web-development"
                                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                                    >
                                        Web Development
                                    </Link>
                                    <Link
                                        to="/app-development"
                                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                                    >
                                        App Development
                                    </Link>
                                    <Link
                                        to="/seo-services"
                                        className="block px-4 py-2 text-sm hover:bg-gray-200"
                                    >
                                        SEO Services
                                    </Link>
                                </div>
                            )}
                        </div>
                        <Link
                            to="/contact"
                            className="block rounded-lg px-3 py-2 text-sm font-medium hover:bg-gray-700"
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>

   

  );
}

export default Nav;
