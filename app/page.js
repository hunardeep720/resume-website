import Layout from "@/component/Layout";
import Image from "next/image";
import Link from "next/link";

const Home = () => (
  <Layout>
    <div className="text-center p-10 ">
      <Image
        src="/image/IMG_1882.jpeg"
        alt="HUNARDEEP SINGH"
        width={200}
        height={200}
        className="rounded-full mx-auto"
      />
      <div className="mt-4">
        <Link
          href="https://www.linkedin.com/in/hunardeep-singh-9a5785269?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BcU7Zs2tmSH%2BiNbqeD9MBKA%3D%3D"
          target="_blank"
          className="text-blue-500"
        >
          LinkedIn
        </Link>
        {" | "}
        <Link
          href="https://github.com/hunardeep720"
          className="text-blue-500"
          target="_blank"
        >
          GitHub
        </Link>
        {" | "}
        <Link
          href="https://next-j-resume.vercel.app"
          target="_blank"
          className="text-blue-500"
        >
          Portfolio
        </Link>
      </div>
      <h1 className="text-4xl font-bold mt-4">HUNARDEEP SINGH</h1>
      <p className="mt-4 text-lg">
        Software Developer Student at{" "}
        <span className="font-bold">
          Southern Alberta Institute of Technology (SAIT)
        </span>
      </p>
      <p className="mt-2 text-lg">
        Currently in 4th Semester (Final Semester) | Program Duration: January
        2023 - August 2024
      </p>
      <p className="mt-4 text-lg">
        Passionate about contributing to software development and
        technology-driven education. Strong foundation in object-oriented
        programming and hands-on project experience.
      </p>
    </div>
  </Layout>
);

export default Home;
