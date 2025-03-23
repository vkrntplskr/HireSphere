import React from 'react'
import Image from 'next/image'
import { UserButton } from '@stackframe/stack'

function Appheader() {
  return (
    <div className='p-3 shadow-sm flex justify-between items-center'>
       <div className='flex items-center'><Image src={'/logo.png'} alt='logo'
        width={50}
        height={50}/><h6 className='font-bold'>HireSphere</h6></div>
        <UserButton/>
    </div>
  )
}

export default Appheader