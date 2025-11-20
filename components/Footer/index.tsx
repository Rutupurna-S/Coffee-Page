import Link from "next/link";
import Image from "next/image";
import {
  MdOutlineEmail,
  MdLocationPin,
  MdOutlinePhone,
  MdOutlineFacebook,
} from "react-icons/md";
import { RiInstagramFill, RiYoutubeFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";

export default function FooterSection() {
  const FOOTER_BG_COLOR = "bg-[#1D130C]";
  const FOOTER_TEXT_COLOR = "text-[#FAF3E3]";
  const FOOTER_ACCENT_COLOR = "bg-[#6F4E37]";
  const INPUT_BG_COLOR = "bg-white/10";
  const INPUT_TEXT_COLOR = "text-[#FAF3E3]";

  return (
    <footer
      id="footer"
      className={`${FOOTER_BG_COLOR} ${FOOTER_TEXT_COLOR} py-16 px-4 scroll-mt-24`}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-5 items-start">
          <div className="md:text-left">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/images/logo1.png"
                alt="Fresh Brews Logo"
                width={120}
                height={80}
                className="mx-auto md:mx-0"
              />
            </Link>
            <p className="font-bold text-lg mb-4">Fresh Brews</p>
            <div className="space-y-3 text-sm opacity-90 mb-6">
              <p className="flex items-center">
                <MdLocationPin className="mr-2" />
                Bhubaneswar, Odisha, India
              </p>
              <p className="flex items-center">
                <MdOutlinePhone className="mr-2" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-amber-500 transition-colors"
                >
                  +91 98765 43210
                </a>
              </p>
              <p className="flex items-center">
                <MdOutlineEmail className="mr-2" />
                <a
                  href="mailto:hello@freshbrews.com"
                  className="hover:text-amber-500 transition-colors"
                >
                  hello@freshbrews.com
                </a>
              </p>
            </div>
            <p className="text-sm opacity-90 font-semibold mb-6">
              Mon - Sun: 10:00 AM - 10:00 PM
            </p>
            <div className="flex space-x-4 text-xl">
              <a
                href="#"
                aria-label="Our Facebook"
                className="hover:text-amber-500 transition-colors"
              >
                <MdOutlineFacebook />
              </a>
              <a
                href="#"
                aria-label="Our Instagram"
                className="hover:text-amber-500 transition-colors"
              >
                <RiInstagramFill />
              </a>
              <a
                href="#"
                aria-label="Our YouTube"
                className="hover:text-amber-500 transition-colors"
              >
                <RiYoutubeFill />
              </a>
              <a
                href="#"
                aria-label="Out Twitter"
                className="hover:text-amber-500 transition-colors"
              >
                <FaTwitter />
              </a>
            </div>
          </div>
          <div className="md:text-left">
            <h4 className="text-xl font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-base opacity-90">
              <li>
                <Link
                  href="/#home"
                  className="hover:text-amber-500 transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="hover:text-amber-500 transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/#history"
                  className="hover:text-amber-500 transition-colors"
                >
                  History
                </Link>
              </li>
              <li>
                <Link
                  href="/#article"
                  className="hover:text-amber-500 transition-colors"
                >
                  Articles
                </Link>
              </li>
              <li>
                <Link
                  href="/#menu"
                  className="hover:text-amber-500 transition-colors"
                >
                  Menu
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:text-left">
            <h4 className="text-xl font-semibold mb-6 ml-25">Book a Table</h4>
            <form className="w-full max-w-xs space-y-4">
              <input
                type="text"
                placeholder="Name"
                className={`w-full p-3 rounded-md ${INPUT_BG_COLOR} ${INPUT_TEXT_COLOR} placeholder-current focus:ring-amber-500 focus:border-amber-500 outline-none border border-transparent focus:border-opacity-50 transition-colors`}
              />
              <input
                type="email"
                placeholder="Email"
                className={`w-full p-3 rounded-md ${INPUT_BG_COLOR} ${INPUT_TEXT_COLOR} placeholder-current focus:ring-amber-500 focus:border-amber-500 outline-none border border-transparent focus:border-opacity-50 transition-colors`}
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className={`w-full p-3 rounded-md ${INPUT_BG_COLOR} ${INPUT_TEXT_COLOR} placeholder-current focus:ring-amber-500 focus:border-amber-500 outline-none border border-transparent focus:border-opacity-50 transition-colors`}
              />
              <div className="grid grid-cols-2 gap-4">
                <input
                  type="date"
                  className={`w-full p-3 rounded-md ${INPUT_BG_COLOR} ${INPUT_TEXT_COLOR} placeholder-current focus:ring-amber-500 focus:border-amber-500 outline-none border border-transparent focus:border-opacity-50 transition-colors`}
                />
                <input
                  type="time"
                  className={`w-full p-3 rounded-md ${INPUT_BG_COLOR} ${INPUT_TEXT_COLOR} placeholder-current focus:ring-amber-500 focus:border-amber-500 outline-none border border-transparent focus:border-opacity-50 transition-colors`}
                />
              </div>
              <button
                type="submit"
                className={`w-full p-3 rounded-md ${FOOTER_ACCENT_COLOR} ${FOOTER_TEXT_COLOR} font-semibold hover:bg-[#5a3f2d] transition-colors`}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#FAF3E3]/20 text-center text-xs opacity-70">
          <p className="mb-1">
            &copy; 2025 Rutupurna Swain. All rights reserved.
          </p>
          <p>Images created with the help of Freepik</p>
        </div>
      </div>
    </footer>
  );
}
