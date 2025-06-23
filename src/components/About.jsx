import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-center gap-5 px-6 sm:mt-14 mt-10 bg-white dark:bg-gray-900">
      {/* Image Section */}
      <div className="w-full sm:w-1/2 max-w-md">
        <Image
          src="/Laundry5.jpeg"
          alt="About LaundryMate"
          width={500}
          height={500}
          className="w-full h-auto rounded-xl shadow-md object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="w-full sm:w-1/2 sm:text-left py-1">
        <h2 className="text-xl font-bold text-[#032b56] sm:mb-5">
          About <span className="text-blue-700">LaundryMate</span>
        </h2>
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#032b56] mb-2 sm:mb-3">
          Effortless Laundry, One Tap Away
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed">
          Gone are the days of waiting in line, guessing machine availability,
          or missing your turn. Our smart laundry reservation system is built
          to simplify your daily routine—making laundry more predictable,
          efficient, and fair.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed hidden sm:block">Make your laundry routine smarter, more predictable, and hassle-free—because your time matters.</p>
        <Link href={"/about"} className="flex items-center">
          <Button className="text-white bg-[#032b56] rounded-full flex mt-3 sm:mt-5 cursor-pointer hover:bg-[#04396b]">Know More <ChevronRight /></Button>
        </Link>
      </div>
    </div>
  );
};

export default About;
