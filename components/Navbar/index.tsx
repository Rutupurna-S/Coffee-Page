"use client";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigations = [
    { href: "/", title: "Home" },
    { href: "/#about", title: "About" },
    { href: "/#history", title: "History" },
    { href: "/#article", title: "Article" },
    { href: "/#footer", title: "Contact" },
  ];

  return (
    <header className="w-screen">
      <nav
        className={`
          fixed top-0 left-0 w-full z-50 transition-all duration-300
          ${scrolled ? "bg-[#1b0f07] shadow-lg" : "bg-transparent"}
        `}
      >
        <div className="flex justify-between items-center mx-auto sm:px-10 px-5 h-[90px]">
          <Link href="/" className="text-white">
            <div className="h-[80px] w-[140px] relative">
              <Image
                src="/images/logo1.png"
                alt="logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>

          <div className="pr-6">
            <button
              onClick={() => setIsMobile((prev) => !prev)}
              className="text-[#d3b58b] px-4 py-1 border rounded sm:hidden border-[#d3b58b]"
            >
              {isMobile ? "X" : <kbd>&#9776;</kbd>}
            </button>

            <ul className="hidden sm:flex space-x-10">
              {navigations.map((nav) => (
                <li
                  key={nav.title}
                  className={`
                    text-base font-semibold tracking-wide cursor-pointer transition
                    ${
                      pathname === nav.href
                        ? "text-[#d3b58b]"
                        : "text-white hover:text-[#d3b58b]"
                    }
                  `}
                >
                  <Link href={nav.href}>{nav.title}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {isMobile && (
          <div className="bg-[#1b0f07]">
            <ul className="flex flex-col sm:hidden p-4">
              {navigations.map((nav) => (
                <li
                  key={nav.title}
                  className={`
                    text-sm font-bold uppercase my-3 transition
                    ${
                      pathname === nav.href
                        ? "text-[#d3b58b]"
                        : "text-white hover:text-[#d3b58b]"
                    }
                  `}
                >
                  <Link href={nav.href} onClick={() => setIsMobile(false)}>
                    {nav.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
