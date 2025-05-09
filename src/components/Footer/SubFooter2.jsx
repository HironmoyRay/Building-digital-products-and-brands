import DribbleIcon from "../../svg/DribbleIcon";
import FacebookIcon from "../../svg/FacebookIcon";
import GitHubIcon from "../../svg/GithubIcon";
import InstagramIcon from "../../svg/InstagramIcon";
import TwitterIcon from "../../svg/TwitterIcon";

export default function SubFooter2() {
  return (
    <div className="text-center">
      <a
        href="#"
        className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900 dark:text-white"
      >
        <img
          src="./src/assets/logo.svg"
          className="h-6 mr-3 sm:h-9"
          alt="Learn with Sumit Logo"
        />
        Learn with Sumit{" "}
      </a>
      <span className="block text-sm text-center text-gray-500 dark:text-gray-400">
        © 2024-2025 Learn with Sumit. All Rights Reserved. Built with{" "}
        <a
          href="#"
          target="_blank"
          className="text-purple-600 hover:underline dark:text-purple-500"
        >
          Flowbite
        </a>{" "}
        and{" "}
        <a
          href="#"
          className="text-purple-600 hover:underline dark:text-purple-500"
        >
          Tailwind CSS
        </a>
        .
      </span>
      <ul className="flex justify-center mt-5 space-x-5">
        <li>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <FacebookIcon />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <InstagramIcon />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <TwitterIcon />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <GitHubIcon />
          </a>
        </li>
        <li>
          <a
            href="#"
            className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400"
          >
            <DribbleIcon />
          </a>
        </li>
      </ul>
    </div>
  );
}
