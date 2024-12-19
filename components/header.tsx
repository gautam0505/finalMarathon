import Link from 'next/link'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Header() {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image src="/mulaoLogo.png" alt="Rotaract Logo" width={100} height={200} />
        </Link>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-gray-700 hover:text-black">Home</Link></li>
            <li><Link href="#about" className="text-gray-700 hover:text-neutral-800">About</Link></li>
            <li><Link href="#categories" className="text-gray-700 hover:text-neutral-800">Categories</Link></li>
            <li><Link href="#contact" className="text-gray-700 hover:text-neutral-800">Contact</Link></li>
          </ul>
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col space-y-4 mt-8">
              <Link href="/" className="text-gray-700 hover:text-purple-600">Home</Link>
              <Link href="#about" className="text-gray-700 hover:text-purple-600">About</Link>
              <Link href="#categories" className="text-gray-700 hover:text-purple-600">Categories</Link>
              <Link href="#contact" className="text-gray-700 hover:text-purple-600">Contact</Link>
            </nav>
          </SheetContent>
        </Sheet>
        {/* <Link href="/register" passHref>
          <Button variant="outline">Register Now</Button>
        </Link> */}
      </div>
    </header>
  )
}

