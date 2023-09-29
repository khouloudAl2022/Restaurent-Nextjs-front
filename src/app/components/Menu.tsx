import Image from 'next/image'
import React, { useState } from 'react'

const Menu = () => {
    const [open, setOpen] = useState(false)
    return (
        <div>
            <Image src="/open.png" alt="" width={20} height={20} />
        </div>
    )
}

export default Menu
