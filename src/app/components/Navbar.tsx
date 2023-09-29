import Link from 'next/link'
import React from 'react'
import Menu from './Menu'

const Navbar = () => {
    return (
        <div className='h-12 text-blue-500 p-4 flex items-center justify-between border-b-2 border-b-blue-500 uppercase'>
            <div className='text-xl'><Link href="/">Fasty Pasty</Link></div>
            <div><Menu/></div>
        </div>
    )
}

export default Navbar
