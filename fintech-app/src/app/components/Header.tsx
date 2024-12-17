'use client'
 
import React from 'react';
import Image from 'next/image';
// import { useRouter } from 'next/navigation'
// import LogoName from "@/app/components/Logo"
import { useState } from "react"
import Link from 'next/link'
// import Logo from './Logo'
import "../../app/globals.css"
import profilePic from '../../../public/personal_img.jpg';

// const Header: React.FC = (props:any) => {
//     const router = useRouter()
//     console.log(router)
//     return(
//     <>
    
//     <header className="bg-green-900 py-6">
//       <nav className="container mx-auto flex justify-between items-center">
//         {/* Left Navigation Links */}
//         <ul className="flex space-x-12 text-white text-lg font-medium">
//           <li className="hover:text-gray-300 transition duration-200">
//             <Link href="/">
//               Home
//             </Link>
//           </li>
//           <li className="hover:text-gray-300 transition duration-200">
//             <Link href="/pages/about">
//               About
//             </Link>
//           </li>
//         </ul>

//         {/* Center Logo */}
//         <div className="text-white text-2xl font-bold">
//           <span className="tracking-widest">NN</span>
//         </div>

//         {/* Right Navigation Links */}
//         <ul className="flex space-x-12 text-white text-lg font-medium">
//           <li className="hover:text-gray-300 transition duration-200">
//             <Link href="/projects">
//               Portfolio
//             </Link>
//           </li>
//           <li className="hover:text-gray-300 transition duration-200">
//             <Link href="/contact">
//               Contact
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Divider */}
//       <div className="mt-4 border-t border-gray-300 w-full"></div>
//     </header>
//     </>
//     )
// }




// Replace these with your image paths

// import behindPic from '../public/behind_pic.png';

const Header: React.FC = () => {
  const [photo, setPhoto] = useState(false);

  const flipPhoto = (e: React.MouseEvent<HTMLImageElement>) => {
    e.preventDefault();
    setPhoto(!photo);
  };

  return (
    <main className="relative bg-[#0A2B35] h-screen w-full overflow-hidden">
      
      {/* Image with Click Flip */}
      <div className="relative mt-48 ml-32">
        <Image
          src= {profilePic}
          alt="Profile"
          width={480}
          height={480}
          className="object-cover cursor-pointer"
          onClick={flipPhoto}
        />
      </div>

      {/* Circular Element */}
      <div className="absolute top-[25%] left-[5%] w-[600px] h-[600px] rounded-full bg-[#c07205] -z-10"></div>

      {/* Navigation Links */}
      <div className="absolute top-[50%] right-[15%] space-y-4 text-4xl font-semibold text-[#DDB373]">
        <Link href="/pages/about" className="block hover:text-[#c38c8c] transition-all duration-300">
          About Me
        </Link>
        <Link href="/pages/posts" className="block hover:text-[#c38c8c] transition-all duration-300">
          Projects
        </Link>
        <Link href="/publications" className="block hover:text-[#c38c8c] transition-all duration-300">
          Publications
        </Link>
        <Link href="/interests" className="block hover:text-[#c38c8c] transition-all duration-300">
          Interests
        </Link>
      </div>
    </main>
  );
};


export default  Header;