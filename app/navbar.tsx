"use client"
import Link from "next/link"
import ToggleButton from "../components/ToggleButtonDarkMode"
import { useState } from "react"

export default function HomeNav() {
  const [contactInfo, setContactInfo] = useState("Contact")
  const [isOpen, setIsOpen] = useState(false)
  const handleEmailClick = () => {
    window.location.href = "mailto:harit19961@gmail.com"
    setContactInfo("harit19961@gmail.com")
  }
  const handleMobileMenuClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="top-0 z-50 fixed w-full bg-gradient-to-b dark:from-black/80 dark:to-black/10 from-white/80 to-white-10 transition-colors duration-1800">
      <nav>
        <div className="mx-auto max-w-screen px-2 sm:px-6 lg:px-8 sticky">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                onClick={handleMobileMenuClick}
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open menu</span>
                <svg
                  className="block size-6 open-svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <svg
                  className="hidden size-6 close-svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                  data-slot="icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="hidden sm:ml-6 sm:block">
                <div id="nav-div" className="flex space-x-4">
                  <Link
                    href="/"
                    className="rounded-md px-3 py-2 text-sm font-medium nav-text-theme"
                  >
                    Home
                  </Link>
                  <Link
                    href="/about"
                    className="rounded-md px-3 py-2 text-sm font-medium nav-text-theme"
                  >
                    About
                  </Link>
                  <Link
                    href="/skills"
                    className="rounded-md px-3 py-2 text-sm font-medium nav-text-theme"
                  >
                    Skills
                  </Link>
                  <Link
                    href="/experience"
                    className="rounded-md px-3 py-2 text-sm font-medium nav-text-theme"
                  >
                    Experience
                  </Link>
                  <Link
                    href="/projects"
                    className="rounded-md px-3 py-2 text-sm font-medium nav-text-theme"
                  >
                    Projects
                  </Link>
                  <Link
                    href="HariharasudhanResume.pdf"
                    className="rounded-md px-3 py-2 text-sm font-medium nav-text-theme"
                    passHref
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Resume
                  </Link>
                </div>
              </div>
            </div>
            <div className="absolute right-0 flex items-center pr-2 sm:static sm:inset-auto space-x-10">
              <ToggleButton />
              <Link
                href="https://github.com/harit06"
                target="_blank"
                rel="noopener noreferrer"
                className="py-2 text-sm font-medium nav-text-theme"
              >
                Github
              </Link>
              <a
                onClick={handleEmailClick}
                className="text-sm font-medium nav-text-theme cursor-pointer hidden md:block"
              >
                {contactInfo}
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={`${
          isOpen ? "" : "hidden"
        } sticky z-10 bg-white dark:bg-black`}
        id="mobile-menu"
        onClick={handleMobileMenuClick}
      >
        <div className="space-y-4 px-6 pb-4">
          <Link href="/" className="block nav-text-theme text-lg">
            Home
          </Link>
          <Link href="/about" className="block nav-text-theme text-lg">
            About
          </Link>
          <Link href="/skills" className="block nav-text-theme text-lg">
            Skills
          </Link>
          <Link href="/experience" className="block nav-text-theme text-lg">
            Experience
          </Link>
          <Link href="/projects" className="block nav-text-theme text-lg">
            Projects
          </Link>
          <Link
            href="HariharasudhanResume.pdf"
            className="block nav-text-theme text-lg"
            passHref
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </Link>
        </div>
      </div>
    </div>
  )
}
