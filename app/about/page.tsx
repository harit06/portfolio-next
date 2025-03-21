import { DynaPuff, Atma } from "next/font/google"
import Image from "next/image"
import Link from "next/link"

const dynapuff = DynaPuff({ subsets: ["latin"] })
const atma700 = Atma({ subsets: ["latin"], weight: "700" })
const atma400 = Atma({ subsets: ["latin"], weight: "400" })
const About = () => {
  const awsSolutionsArchitectBadgeUrl =
    "https://images.credly.com/images/0e284c3f-5164-4b21-8660-0d84737941bc/twitter_thumb_201604_image.png"
  const awsCloudPractitionerBadgeUrl =
    "https://images.credly.com/images/00634f82-b07f-4bbd-a6bb-53de397fc3a6/image.png"
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-17 md:mt-15 pb-10 overflow-hidden">
      <div className="flex flex-col items-center">
        <h1 className="text-center font-black md:text-4xl uppercase font-serif tracking-widest">
          About
        </h1>
        <span className="inline-flex m-2 h-2 w-10 bg-gray-400 dark:bg-gray-700 rounded-full overflow-hidden"></span>

        {/* Contents */}

        <div className="pt-2 md:pt-4 flex justify-evenly w-screen px-2">
          <Image
            className="fade-in-ltr hidden lg:block w-40 h-40"
            src={awsSolutionsArchitectBadgeUrl}
            width={500}
            height={500}
            alt="aws certified solutions architect"
          ></Image>
          <div className="text-center flex flex-col justify-center items-center">
            <h4
              className={`${dynapuff.className} text-xl md:text-3xl pt-1 md:pt-2 font-bold`}
            >
              Driven by Innovation
            </h4>
            <h4
              className={`${atma700.className} text-lg md:text-xl pt-1 md:pt-2`}
            >
              I turn visionary ideas into captivating digital realities.
            </h4>
          </div>
          <Image
            className="fade-in-rtl hidden lg:block w-40 h-40"
            src={awsCloudPractitionerBadgeUrl}
            width={500}
            height={500}
            alt="aws certified solutions architect"
          ></Image>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pt-4 md:pt-8 xl:pt-20 md: gap-4 px-4 xl:w-[90%]">
        <div className="p-2 md:p-4 rounded-2xl bg-gray-100 dark:bg-black shadow-lg dark:shadow-gray-400 border-2 border-white/50">
          <h3
            className={`${dynapuff.className} p-1 md:p-3 text-center text-xl font-extrabold`}
          >
            PAST WORK{" "}
          </h3>
          <p
            className={`${atma400.className} tracking-wide p-1 md:p-3 text-justify text-lg`}
          >
            I am a dedicated software developer with over four years of industry
            experience, primarily focused on{" "}
            <strong>backend development</strong>. I’ve had the privilege of
            contributing to prestigious organizations, including{" "}
            <strong>Goldman Sachs</strong> and <strong>IC&SR IITM</strong>.
          </p>
        </div>
        <div className="p-2 md:p-4 rounded-2xl bg-gray-100 dark:bg-black shadow-lg dark:shadow-gray-400 border-2 border-white/50">
          <h3
            className={`${dynapuff.className} p-1 md:p-3 text-center text-xl font-extrabold`}
          >
            CURRENT WORK{" "}
          </h3>
          <p
            className={`${atma400.className} tracking-wide p-1 md:p-3 text-justify text-lg`}
          >
            I graduated with a <strong>Masters in Computer Science</strong>,
            deepening my expertise in{" "}
            <strong>AI, ML, Big Data, HPC, Parallel </strong> computing and
            Cloud computing. I am currently exploring new job opportunities and
            working on side gig{" "}
            <Link
              href="https://swiftsoftjobs.web.app"
              className="text-blue-600 font-bold"
            >
              SWIFTSOFT
            </Link>
            , designed to help software engineers navigate the competitive job
            market.
          </p>
        </div>
        <div className="p-2 md:p-4 rounded-2xl bg-gray-100 dark:bg-black shadow-lg dark:shadow-gray-400 border-2 border-white/50">
          <h3
            className={`${dynapuff.className} p-1 md:p-3 text-center text-xl font-extrabold`}
          >
            Passion{" "}
          </h3>
          <p
            className={`${atma400.className} tracking-wide p-1 md:p-3 text-justify text-lg`}
          >
            I am passionate about creating innovative products and solutions
            that make a meaningful impact on the world. If you would like to
            learn more or discuss potential collaborations, please feel free to{" "}
            <a
              href="mailto:harit19961@gmail.com"
              className="text-blue-600 font-bold"
            >
              contact me
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
