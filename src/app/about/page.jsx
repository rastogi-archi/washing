import React from 'react'
import About from '@/components/About'

const AboutUs = () => {
  return (
    <div>
      <div>
            <div className="text-center max-w-3xl mx-auto mb-12 mt-8 sm:mt-12">
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Us</h2>

                <div className="text-center max-w-4xl mx-auto">
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        We Make Sure Your Time Is Respected
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 text-lg">
                        Making Laundry Hassle-Free, One Tap at a Time. Say goodbye to long queues, wasted time,
                        and confusion. With LaundryMate, laundry becomes simple, fair, and efficient.
                    </p>
                </div>
            </div>
            <About/>
        </div>
    </div>
  )
}

export default AboutUs