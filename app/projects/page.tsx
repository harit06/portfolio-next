"use client"
import Image from "next/image"
import Link from "next/link"
import { BsLink45Deg } from "react-icons/bs"
import { DynaPuff } from "next/font/google"

const dynapuff = DynaPuff({ subsets: ["latin"] })

import { useState, useEffect, useRef } from "react"

function Projects() {
  const [page, setPage] = useState(0)
  const handlePrevClick = async () => {
    setPage(page == 0 ? caroselLen - 1 : page - 1)
  }
  const handleNextClick = async () => {
    setPage(page == caroselLen - 1 ? 0 : page + 1)
  }

  const projects = [
    {
      image: { src: "/swiftsoft.jpg", thumbnail: "/swiftsoft-thumbnail.jpg" },
      title: "Swift Soft",
      description:
        "Designed a dynamic system tailored to streamline job applications by fetching over 100 software job postings across the US daily. This tool enhances job seekers visibility by ensuring timely applications, capitalizing on data that indicates earlier applications significantly increase the likelihood of a hiring manager's review.",
      tags: ["React", "Typescript", "GCP"],
      url: "https://swiftsoftjobs.web.app",
    },
    {
      image: { src: "/nfc.jpg", thumbnail: "/nfc-thumbnail.jpg" },
      title: "NFC Scan Roll",
      description:
        "Developed an innovative Android application, that utilizes the device's NFC module to scan RFID tags, marking students present for classes. The system automatically generates reports using the Apache POI library for Excel sheet manipulation and updates attendance records to the university portal.",
      tags: ["Android", "NFC", "RF"],
    },
    {
      image: { src: "/smarthome2.jpg", thumbnail: "/smarthome2-thumbnail.jpg" },
      title: "Smart Home",
      description:
        "Crafted an advanced smart home automation system utilizing a Raspberry Pi to serve as the central hub and an Android application for the user interface. Enhanced the system with voice control functionality to enable seamless user interactions. Additionally, integrated Apple compatibility via Siri Shortcuts.",
      tags: ["Raspberry Pi", "Android", "NLP"],
    },
    {
      image: { src: "/vallet.jpg", thumbnail: "/vallet-thumbnail.jpg" },
      title: "Hardware Wallet",
      description:
        "Engineered a secure hardware wallet for storing cryptographic keys that ensures physical isolation by disallowing any network connection, enhancing security against digital theft.",
      tags: ["QT5", "Firmware", "Fingerprint"],
    },
  ]
  const caroselLen = projects.length

  const [translateValue, setTranslateValue] = useState(78)

  useEffect(() => {
    // Ensure this runs only on the client side
    const handleResize = () => {
      setTranslateValue(window.innerWidth >= 768 ? 33.33 : 78)
    }

    // Initialize and listen for screen resize
    handleResize()
    window.addEventListener("resize", handleResize)

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen mt-5 md:mt-15 pb-10">
      <div className="flex flex-col items-center">
        <h1 className="text-center font-black md:text-4xl page-title uppercase font-serif tracking-widest">
          Projects
        </h1>
        <span className="inline-flex m-2 h-2 w-10 page-titleline rounded-full overflow-hidden"></span>

        {/* Contents */}
        <div className="relative w-3/4 overflow-x-hidden">
          <div className="overflow-hidden pt-2 md:pt-5 opacity-mask">
            {/* Carosel */}
            <div
              className="flex transition-transform duration-3000 ease-in-out gap-[5%] md:gap-[2%] translate-x-[15%] md:translate-x-[33%] pb-10 overflow-h-hidden"
              style={{
                transform: `translateX(-${page * translateValue}%)`,
              }}
            >
              {projects.map((project, index) => {
                return (
                  <div
                    className={`md:flex md:flex-col w-[75%] md:w-[32%] flex-shrink-0 shadow-xl shadow-gray-700 dark:shadow-gray-400
                border-2 dark:border-gray-700 border-gray-200 dark:bg-[#151515] justify-center items-center rounded-2xl`}
                    key={index}
                  >
                    <div className="p-4 place-items-center overflow-hidden">
                      {/* Image */}
                      <Image
                        src={project.image.src}
                        className="rounded-2xl object-cover"
                        width={800}
                        height={800}
                        alt={project.title}
                        placeholder="blur"
                        blurDataURL={project.image.thumbnail}
                      ></Image>

                      {/* Title */}
                      <div
                        className={`text-sm xl:text-xl font-bold dark:text-white text-black text-center py-1 md:py-3  uppercase  `}
                      >
                        {project.url ? (
                          <Link href={project.url}>
                            <span className="inline-flex items-center gap-2">
                              <p className="bg-clip-text bg-gradient-to-bl from-blue-400 to-purple-600 via-[#e042ac] text-transparent opacity-90">
                                {project.title}
                              </p>{" "}
                              <BsLink45Deg />
                            </span>
                          </Link>
                        ) : (
                          <p className="bg-clip-text bg-gradient-to-bl from-gray-300 to-gray-300 via-gray-400 text-transparent">
                            {project.title}
                          </p>
                        )}
                      </div>

                      {/* Description */}
                      <p
                        className={`text-[10px] 2xl:text-sm flex text-justify text-gray-400 dark:text-gray-300 ${dynapuff.className} `}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="hidden md:flex md:flex-wrap overflow-hidden items-end pb-3 mt-auto px-4 gap-1">
                      {project.tags.map((tag, index) => (
                        <div
                          className={`px-3 py-1 text-[10px] font-bold tracking-widest rounded-4xl bg-gray-400 dark:bg-teal-300/50 text-white`}
                          key={index}
                        >
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          <button
            type="button"
            className={`group absolute start-0 top-0 z-30 flex h-full  items-center justify-center px-4 focus:outline-none ${
              page === 0 ? "hidden" : "cursor-pointer"
            }`}
            onClick={handlePrevClick}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                className="h-4 w-4 text-gray-500 rtl:rotate-180 dark:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button
            type="button"
            className={`group absolute end-0 top-0 z-30 flex h-full items-center justify-center px-4 focus:outline-none ${
              page === caroselLen - 1 ? "hidden" : "cursor-pointer "
            }`}
            onClick={handleNextClick}
          >
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:ring-4 group-focus:ring-white group-focus:outline-none dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
              <svg
                className="h-4 w-4 text-gray-500 rtl:rotate-180 dark:text-gray-300"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Projects
