import Layout from "@/component/Layout";
import Link from "next/link";

const Resume = () => (
  <Layout>
    <h1 className="text-3xl font-extrabold text-center mt-10 bg-black text-blue-700">
      Resume
    </h1>
    <div className="m-10">
      <section className="mb-8">
        <h2 className="text-2xl font-extrabold mb-4 text-blue-500">
          Education
        </h2>
        <p className="text-xl text-gray-500">
          Southern Alberta Institute of Technology (SAIT) | Software Development
        </p>
        <p className="pt-5">
          16 Av, Nw, Calgary, Alberta | January 2023 – September 2024
        </p>
        <p>GPA: 3.2 (up to the third semester out of four)</p>
        <p className="pt-5 text-xl text-gray-500">
          Dasmesh Parivar International School | High School
        </p>
        <p>Aima Kalan, Tarn Taran, Punjab, India</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-extrabold text-blue-500">Experience</h2>
        <ul className="grid gap-7 mt-5">
          <li>
            <p className="font-semibold">
              <p className="text-gray-300 text-xl pb-3 font-bold">
                XYZ Online Store
              </p>
              Developed a full-stack e-commerce application with a focus on
              performance and security.
            </p>
            <p className="py-1 font-semibold">
              Technologies: Next.js, Restful APIs, Google Firebase
            </p>
            <p className="text-blue-400 cursor-pointer">
              <Link
                href="https://github.com/hunardeep720/xyz-online-store.git"
                target="_blank"
              >
                [GitHub]
              </Link>
              <Link
                href={"https://xyz-online-store-iq2a.vercel.app"}
                target="_blank"
              >
                [Demo]
              </Link>{" "}
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <p className="text-gray-300 text-xl pb-3 font-bold">
                Photography Portfolio
              </p>
              Created a dynamic and responsive photography portfolio website.
            </p>
            <p className="py-1 font-semibold">Technologies: Next.js</p>
            <p className="text-blue-400 cursor-pointer">
              <Link
                href="https://github.com/hunardeep720/photograpy.git"
                target="_blank"
              >
                [GitHub]
              </Link>
              <Link href={"https://photograpy-pied.vercel.app"} target="_blank">
                [Demo]
              </Link>{" "}
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <p className="text-gray-300 text-xl pb-3 font-bold">Portfolio</p>
              Built an interactive online portfolio using modern web
              technologies.
            </p>
            <p className="py-1 font-semibold">
              Technologies: Next.js, Restful APIs
            </p>
            <p className="text-blue-400 cursor-pointer">
              <Link
                href="https://github.com/hunardeep720/next-j-resume.git"
                target="_blank"
              >
                [GitHub]
              </Link>
              <Link href={"https://next-j-resume.vercel.app"} target="_blank">
                [Demo]
              </Link>{" "}
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <p className="text-gray-300 text-xl pb-3 font-bold">
                Delilah’s Doggy Daycare
              </p>
              Developed a management system for a dog daycare service.
            </p>
            <p className="py-1 font-semibold">
              Technologies: HTML, CSS, JavaScript
            </p>
            <p className="text-blue-400 cursor-pointer">
              <Link
                href="https://github.com/hunardeep720/Delilah-s-Doggy-Daycare.git"
                target="_blank"
              >
                [GitHub]
              </Link>
              <Link
                href={"https://hunardeep720.github.io/Delilah-s-Doggy-Daycare/"}
                target="_blank"
              >
                [Demo]
              </Link>{" "}
            </p>
          </li>
          <li>
            <p className="font-semibold">
              <p className="text-gray-300 text-xl pb-3 font-bold">
                MyBudget (React-Native App)
              </p>
              Created a mobile application for personal budgeting.
            </p>
            <p className="py-1 font-semibold">
              Technologies: React-Native, SQLite
            </p>
            <p className="text-blue-400 cursor-pointer">
              <Link
                href="https://github.com/hunardeep720/MyBudget.git"
                target="_blank"
              >
                [GitHub]
              </Link>{" "}
            </p>
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-extrabold text-blue-500">Skills</h2>
        <ul className="list-disc grid gap-7 mt-5">
          <li>
            <strong>Programming Languages:</strong> Java, C#, Python, Rust
          </li>
          <li>
            <strong>Development Tools:</strong> Git, GitHub, Azure DevOps,
            Visual Studio
          </li>
          <li>
            <strong>Frameworks & Libraries:</strong> .NET
          </li>
          <li>
            <strong>Operating Systems:</strong> Linux (Kernel Development
            Knowledge), Windows
          </li>
          <li>
            <strong>Networking:</strong> TCP/IP, Layer 7 Application Protocols,
            IT Network Infrastructure
          </li>
          <li>
            <strong>Scripting:</strong> UNIX Shell Scripting
          </li>
          <li>
            <strong>Databases:</strong> Oracle SQL, SQLite, Firestore Database,
            MongoDb
          </li>
          <li>
            <strong>API:</strong> RESTful APIs
          </li>
          <li>
            <strong>Methodologies:</strong> Agile Development
          </li>
          <li>
            <strong>Concepts:</strong> Object-Oriented Programming,
            High-Performance Data Structure, Algorithms
          </li>
        </ul>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-extrabold text-blue-500 mt-5 mb-3">
          Languages
        </h2>
        <p>Fluent in English.</p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-extrabold text-blue-500 mt-5 mb-3">
          Interests
        </h2>
        <p>
          Network Security, High-Performance Computing, Open Source
          Contributions.
        </p>
      </section>
      <section className="mb-8">
        <h2 className="text-2xl font-extrabold text-blue-500 mt-5 mb-3">
          Certifications
        </h2>
        <p className="py-1 font-semibold">GitHub Essential Training</p>
        <p className="py-1 font-semibold">LinkedIn Training Courses</p>
      </section>
    </div>
  </Layout>
);

export default Resume;
