import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>Phone: +91 9373555916</p>
            <p>Email: believerboys56@gmail.com</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
            <Link href="https://www.instagram.com/believer_boys_56_" className="hover:text-purple-400">Instagram</Link>

            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
        <p>&copy; 2025 BELIEVER BOY'S 56. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

