import Link from "next/link";
import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <p>
              <span>Phone: </span>
              <a
                href="tel:+919373555916"
                className="text-blue-500 hover:text-blue-700"
              >
                +91 9373555916
              </a>
            </p>
            <p>
              <span>Email: </span>
              <a
                href="mailto:believerboys56@gmail.com"
                className="text-blue-500 hover:text-blue-700"
              >
                believerboys56@gmail.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/believer_boys_56_"
                className="flex items-center hover:text-purple-400"
              >
                <FaInstagram className="mr-2" size={24} />
                believer_boys_56_
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2025 BELIEVER BOY'S 56. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
