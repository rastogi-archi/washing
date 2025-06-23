'use client';

import React from 'react';
import { Button } from './ui/button';
import { ChevronRight} from 'lucide-react';
import { imageUrls } from '@/utils/data';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <>
            <section
                className="flex flex-col-reverse lg:flex-row items-center justify-between px-6 md:px-12 lg:px-20 xl:px-32 py-16 bg-white dark:bg-gray-900 gap-10"
              style={{
                backgroundImage: "url('/background.jpeg')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
              }}
            >
                {/* Left Content */}
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                    <p className="text-sm uppercase tracking-widest text-blue-700 font-semibold">
                        Hassle-Free Laundry
                    </p>

                    <h1 className="text-4xl md:text-5xl font-extrabold text-[#032b56] leading-tight">
                        Reserve your washing machine in seconds
                    </h1>

                    <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-lg leading-relaxed">
                        No queues, no confusion. Just tap, reserve, and wash.
                        <br className="hidden sm:inline" />
                        Your floor, your machine, your time.
                    </p>

                    <Link href={"/book-machine"}>
                        <Button className="inline-flex items-center gap-2 bg-[#032b56] text-white rounded-full text-base font-semibold shadow-md hover:bg-[#04396b] transition px-6 py-5 mt-4">
                            Reserve Now
                            <ChevronRight />
                        </Button>
                    </Link>

                    {/* Mini Images */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-4 pt-4">
                        {imageUrls.map((image) => (
                            <Image
                                key={image.id}
                                src={image.link}
                                width={96}
                                height={96}
                                alt="Laundry thumbnail"
                                className="h-24 w-24 sm:h-28 sm:w-28 rounded-full object-cover p-1.5 shadow-md hover:scale-105 transition-transform duration-300"
                            />
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <Image
                        src="/Laundry3.png"
                        alt="Main Laundry Visual"
                        width={500}
                        height={500}
                        className="w-full max-w-md h-auto object-contain drop-shadow-xl"
                    />
                </div>
            </section>
        </>
    );
};

export default Hero;
