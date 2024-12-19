import Link from "next/link";
import Image from "next/image";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="https://www.instagram.com/believer_boys_56_"
          // className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          <Image
            src="/mulaoLogo.png"
            alt="Rotaract Logo"
            width={100}
            height={200}
            className="rounded-lg"
          />
        </Link>
        <div className="relative w-full h-full">
          <p className="absolute inset-0 flex items-center justify-center text-gray-700 font-bold text-xl italic">
            Together we run, Together we believe
          </p>
        </div>

        {/* <Link href="/register" passHref>
          <Button variant="outline">Register Now</Button>
        </Link> */}
      </div>
    </header>
  );
}
