"use client"

import { useState } from "react"
import { DynaPuff, Atma } from "next/font/google"
const atma400 = Atma({ subsets: ["latin"], weight: "400" })

const dynapuff = DynaPuff({ subsets: ["latin"] })

// Arrow SVG (Rotates when open)
const ArrowIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`w-5 h-5 text-gray-700 dark:text-gray-300 transition-transform ${
      isOpen ? "rotate-180" : "rotate-0"
    }`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M12 14.293l-5.146-5.147a1 1 0 111.414-1.414L12 11.465l4.732-4.733a1 1 0 011.415 1.414L12 14.293z"
      clipRule="evenodd"
    />
  </svg>
)

const ExperienceTimeline = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "IC&SR - IITM",
      date: "Mar 2022 - Jun 2022",
      summary:
        "Revolutionized outdoor advertising industry by leveraging geotag data to classify audiences based on demographics, empowering advertisers to optimize their reach and significantly increase.",
      details: [
        "Developed a real-time data processing system, enabling clients to dynamically adjust their market strategies.",
        "Utilized containerization technology with Dockers to orchestrate and automate the CI/CD pipeline, optimizing development, testing, and deployment workflows for enhanced scalability and reliability.",
      ],
      tags: [
        "JavaScript",
        "TypeScript",
        "React",
        "Spring MVC",
        "Kafka",
        "Flink",
        "MongoDB",
        "Jenkins",
      ],
    },
    {
      title: "Senior Software Engineer",
      company: "MasDat Solutions",
      date: "Mar 2020 - Feb 2022",
      summary:
        "Worked for a client Waste Harmonics, a leader in smart waste management, I spearheaded the integration of 2000 smart bins, enhancing system functionalities for real-time status updates and automating waste collection processes.",
      details: [
        "Produced low-latency statistical reports for metrics tracking and stakeholder reporting.",
        "Re-engineered the web application to support multilingual capabilities, facilitating business expansion into the Middle East and Europe while significantly improving scalability and user experience.",
      ],
      tags: ["React", "Spring Boot", "Airflow", "Hive", "Presto", "SQL", "AWS"],
    },
    {
      title: "Senior Software Engineer",
      company: "Infosys Ltd",
      date: "Jan 2018 - Feb 2020",
      summary:
        "Worked for the client Goldman Sachs, I contributed to the Margining Team and Client Onboarding Team, enhancing financial operations and client integration processes. I collaborated with cross-functional teams to streamline operations, ensuring robust risk management.",
      details: [
        "Collaborated with cross-functional teams to develop a comprehensive application for client onboarding processes including negotiations, due diligence, risk management, and account setup. This innovation reduced client onboarding time by 60%.",
        "Identified data corruption in systems and developed validation routines and services to ensure data integrity during transfers, resulting in a 27% improvement in data accuracy.",
        "Led the enhancement of a legacy application, including query optimizations and setting up new pipelines to fetch data from updated sources while deprecating invalid data sources. Ensured seamless and error-free operations by independently managing the entire project lifecycle, from conceptualizing the vision and creating the roadmap to designing, implementing, testing, and successfully launching the solution.",
      ],
      tags: [
        "Spring MVC",
        "Spring Boot",
        "DB2",
        "PostgreSQL",
        "Maven",
        "Gradle",
        "Slang/SecDB",
        "Legend/Pure",
        "Express JS",
      ],
    },
  ]

  const [openItems, setOpenItems] = useState<boolean[]>(
    new Array(experiences.length).fill(false)
  )

  const handleToggle = (index: number) => {
    // Toggle the open state of the clicked item
    setOpenItems((prevState) => {
      const newState = [...prevState]
      newState[index] = !newState[index]
      return newState
    })
  }

  return (
    <div className="flex items-center justify-center min-h-screen mt-5 md:mt-15">
      <div className="flex flex-col items-center w-full">
        <h1 className="text-center font-black md:text-4xl page-title uppercase tracking-widest mt-20 md:mt-2 font-serif">
          Experience
        </h1>
        <span className="inline-flex m-2 h-2 w-10 page-titleline rounded-full"></span>

        {/* Contents */}
        <div className="p-10 md:p-20 md:max-w-3/4 w-full">
          <ol className="relative border-s border-gray-200 dark:border-gray-700">
            {experiences.map((exp, index) => (
              <li
                key={index}
                className={`flex flex-col mb-6 ms-6 ${dynapuff.className} `}
              >
                {/* Timeline Dot */}
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3 ring-8 ring-white dark:ring-gray-900 dark:bg-gray-800">
                  <svg
                    className="w-2.5 h-2.5 text-gray-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </span>

                {/* Header (Title + Company + Arrow) */}
                <div
                  className={`md:flex md:items-center md:justify-between mb-1 cursor-pointer bg-clip-text bg-gradient-to-bl from-blue-400 to-purple-600 via-[#e042ac] text-transparent`}
                  onClick={() => handleToggle(index)}
                >
                  <h3 className="ex-title">{exp.title}</h3>
                  <div className="flex md:justify-end justify-between space-x-5 items-center">
                    <span className="ex-title">{exp.company}</span>
                    <ArrowIcon isOpen={openItems[index]} />
                  </div>
                </div>

                {/* Time */}
                <time className="block mb-2 ex-timeline">{exp.date}</time>

                {/* Summary */}
                <p className={`${atma400.className} md:mb-4 ex-content-head`}>
                  {exp.summary}
                </p>

                {/* Tags */}
                <div className="hidden md:flex md:flex-wrap overflow-hidden items-end pb-3 mt-auto px-4 gap-1">
                  {exp.tags.map((tag, index) => (
                    <div
                      className="px-3 py-1 text-xs lg:text-sm rounded-4xl bg-gray-300 dark:bg-teal-300/50 dark:text-white lg:w-30 text-center"
                      key={index}
                    >
                      {tag}
                    </div>
                  ))}
                </div>

                {/* Details */}
                <div
                  className={`${
                    atma400.className
                  } mt-2 p-4 bg-gray-100 dark:bg-[#151515] rounded-lg ${
                    openItems[index]
                      ? "max-h-[600px] opacity-100"
                      : "max-h-0 opacity-0"
                  } transition-all duration-1800 overflow-hidden`}
                >
                  <ul className="space-y-2 list-inside list-disc ex-content-extra">
                    {exp.details.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}

export default ExperienceTimeline
