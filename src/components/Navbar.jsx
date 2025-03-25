import React from 'react'
import Link from 'next/link'
const Navbar = () => {
  return (
    <div className='flex justify-center items-center gap-20 text-3xl text-blue-800 font-bold border-b-2 p-5 bg-blue-100'>
        <Link href={'/'}>Home</Link>
        <Link href={'/cart'}>Cart</Link>
    </div>
  )
}

export default Navbar