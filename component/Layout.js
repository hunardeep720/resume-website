import Link from "next/link";

const Layout = ({ children }) => (
  <div>
    <nav className="p-4 shadow-md">
      <div className="container mx-auto flex justify-between w-full">
        <div className="text-white flex items-center">
          <ul className="text-center w-full" style={{display:"grid",gridTemplateColumns:"repeat(3, minmax(0, 1fr))",paddingTop:"15px"}}>
            <li className="mb-4 md:mr-4 md:mb-0">
              <Link href="/" className="text-lg hover:text-gray-300 transition duration-300">
                Home
              </Link>
            </li>
            <li className="mb-4 md:mr-4 md:mb-0">
              <Link href="/resume" className="text-lg hover:text-gray-300 transition duration-300">
                Resume
              </Link>
            </li>
            <li className="mb-4 md:mr-0">
              <Link href="/contact" className="text-lg hover:text-gray-300 transition duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex items-center mt-4 md:mt-0">
          <Link href="https://www.linkedin.com/in/hunardeep-singh-9a5785269" target="_blank">
            <i className="fab fa-linkedin text-2xl text-white hover:text-gray-300 transition duration-300" />
          </Link>
          <Link href="https://github.com/hunardeep720" target="_blank" className="ml-4">
            <i className="fab fa-github text-2xl text-white hover:text-gray-300 transition duration-300" />
          </Link>
        </div>
      </div>
    </nav>
    <main className="container mx-auto p-4">{children}</main>
  </div>
);

export default Layout;