import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const SideMenus = (props: any) => {
  const { showNav } = props;
  const router = useRouter();
  return (
    <aside
      className={`w-64 space-y-6 md:static fixed z-10 transition-all md:translate-x-0 md:transition duration-200 ease-in-out md:mt-0 mt-0 py-0 md:py-0
        ${showNav ? "left-0" : "-left-full"}`}
    >
      <div className="py-4 px-3 bg-gray-50 rounded dark:bg-gray-800 min-h-screen ">
        <ul className="space-y-2">
          <li>
            <div className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg">
              <svg
                className="w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span className="ml-3">Dashboard</span>
            </div>
          </li>
          <li>
            <Link href="/class" passHref>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal text-yellow-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-yellow-700 ${
                  router.asPath === "/class" ? "bg-yellow-400 text-white" : ""
                }`}
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Kelas</span>
              </a>
            </Link>
          </li>
          <Link href="/instructor" passHref>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal text-yellow-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-yellow-700 ${
                  router.asPath === "/instructor"
                    ? "bg-yellow-400 text-white"
                    : ""
                }`}
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">
                  Instruktur
                </span>
              </a>
            </li>
          </Link>
          <Link href="/" passHref>
            <li>
              <a
                href="#"
                className={`flex items-center p-2 text-base font-normal text-yellow-900 rounded-lg dark:text-white hover:bg-yellow-300 dark:hover:bg-yellow-700 `}
              >
                <svg
                  className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </aside>
  );
};

export default SideMenus;
