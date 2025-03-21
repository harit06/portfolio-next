import Image from "next/image"

function Skills() {
  const skillIcons = [
    { src: "html.svg", alt: "HTML" },
    { src: "css.svg", alt: "CSS" },
    { src: "bootstrap.svg", alt: "Bootstrap" },
    { src: "tailwind.svg", alt: "Tailwind" },
    { src: "javascript.svg", alt: "Javascript" },
    { src: "typescript.svg", alt: "Typescript" },
    { src: "react.svg", alt: "React" },
    { src: "nextjs.svg", alt: "NextJs" },
    { src: "node-js.svg", alt: "NodeJs" },
    { src: "express-js.svg", alt: "ExpressJs" },
    { src: "spring.svg", alt: "Spring" },
    { src: "graphql.svg", alt: "GraphQl" },
    { src: "mongodb.svg", alt: "MongoDB" },
    { src: "cassandra.svg", alt: "Cassandra" },
    { src: "redis.svg", alt: "Redis" },
    { src: "java.svg", alt: "Java" },
    { src: "python.svg", alt: "Python" },
    { src: "kafka.svg", alt: "Kafka" },
    { src: "flink.svg", alt: "Flink" },
    { src: "airflow.svg", alt: "Airflow" },
    { src: "spark.svg", alt: "Spark" },
    { src: "aws.svg", alt: "AWS" },
    { src: "gcp.svg", alt: "GCP" },
    { src: "terraform.svg", alt: "Terraform" },
    { src: "jenkins.svg", alt: "Jenkins" },
    { src: "rabbitmq.svg", alt: "RabbitMQ" },
    { src: "gitlab.svg", alt: "Gitlab" },
    { src: "qt.svg", alt: "QT" },
  ]

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col items-center">
        <h1 className="text-center font-black md:text-4xl uppercase tracking-widest font-serif">
          Skills
        </h1>
        <span className="inline-flex m-2 h-2 w-10 bg-gray-400 dark:bg-gray-700 rounded-full"></span>

        <div className="pt-5 md:pt-8 grid grid-cols-5 gap-3 md:gap-7">
          {skillIcons.map((icon, index) => (
            <div className="tooltip" key={index}>
              <Image
                className="skill-icons"
                src={icon.src}
                alt={icon.alt}
                width={0}
                height={0}
              />
              <span className="tooltiptext">{icon.alt}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
