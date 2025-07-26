'use client'
import React, { useState } from 'react'
import { navbarLinks } from '@/utils/data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, MoveRight, X } from 'lucide-react'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <nav className='md:flex justify-around items-center hidden border-b-1 shadow-2xl bg-white p-4 sticky top-0 z-50'>
                <div className='text-2xl font-bold'>
                    <Link href={'/'}>
                        LaundryMate
                    </Link>
                </div>
                <div className='flex items-center justify-center gap-5'>
                    {navbarLinks.map((data) => (
                        <ul className='text-base font-semibold' key={data.name}>
                            <Link href={data.link} className='hover:underline'>{data.name}</Link>
                        </ul>
                    ))}
                </div>
                <div>
                    <Button className="bg-[#032b56] hover:bg-[#04396b]">
                        <Link href={'/book-machine'} className='flex items-center justify-center gap-2'>
                            Book Machine <MoveRight className='size-5' />
                        </Link>
                    </Button>
                </div>
            </nav>
            <nav className='md:hidden border-b-1 shadow-md bg-white'>
                <div className='flex justify-between items-center p-4'>
                    <div className='text-lg font-bold'>
                        <Link href={'/'}>
                            LaundryMate
                        </Link>
                    </div>
                    <Button onClick={() => setIsOpen(!isOpen)} className='text-2xl'>
                        {isOpen ? <X className='size-7' /> : <Menu className='size-6' />}
                    </Button>
                </div>
                {isOpen && (
                    <div className='bg-gray-100 p-4'>
                        <div className='flex flex-col'>
                            {navbarLinks.map((data) => (
                                <ul key={data.name}>
                                    <Link href={data.link} className='py-2'>
                                        {data.name}
                                    </Link>
                                </ul>
                            ))}
                        </div>
                        <div className='mt-2'>
                            <Button className="bg-[#032b56] hover:bg-[#04396b]">
                                <Link href={'/book-machine'} className='flex items-center justify-center gap-2'>
                                    Book Machine <MoveRight className='size-5' />
                                </Link>
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </>
    )
}

export default Navbar
