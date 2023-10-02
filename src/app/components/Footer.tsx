import Link from 'next/link'
import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="h-12 md:h-24 p-4 lg:px-20 xl:px-40 text-blue-500 flex items-center justify-between">
                <Link href="/" className="font-bold text-xl">FASTY PASTY</Link>
                <p>© ALL RIGHTS RESERVED.</p>
            </div>
        </div>
    )
}

export default Footer
