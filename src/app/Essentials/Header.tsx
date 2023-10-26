import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import logo from "/public/logo.png"
export default function Header() {
  return (
    <header className=''>
    <div className='flex justify-around items-center'>
<div className='flex items-center'>
    <Image src={logo} alt='Maham Fayyaz'  width={130}/>
</div>
<div>
    <ul className='flex  space-x-12 text-white fontstyle text-xl'>
        <a href='/'><li>Home</li></a>
        <a href='/Pages/About'><li>About</li></a> 
        <a href='/Pages/Projects'><li>Work</li></a>
        <a href='/Pages/Contact'><li>Contact</li></a>
        </ul>
</div>
<button className=" border-gray-900 border-2 mt-3 rounded-full text-center bg-black text-white p-2 text-md items-center ">DownloadCV</button>          
</div>
</header>
  )
}
