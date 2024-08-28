import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { IoDocumentOutline } from "react-icons/io5";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 text-center py-4">
      <div className="mx-auto pb-4 flex flex-row justify-center items-center text-gray-700 hover:text-gray-900">
        <a
          href="https://github.com/chrisg06"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 flex flex-col items-center">
          <FaGithub className="h-6 w-6" />
          <p className="text-xs font-light">GitHub</p>
        </a>
        <a
          href="mailto:chris@chrisgardiner.org"
          rel="noopener noreferrer"
          className="px-4 flex flex-col items-center">
          <AiOutlineMail className="h-6 w-6" />
          <p className="text-xs font-light">Email</p>
        </a>
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 flex flex-col items-center">
          <IoDocumentOutline className="h-6 w-6" />
          <p className="text-xs font-light">Resume</p>
        </a>
      </div>

      <p>&copy; {year} Chris Gardiner</p>
    </footer>
  );
}
