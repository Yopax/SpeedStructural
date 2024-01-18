"use client"
import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

export default function EnlaceOne() {
  return (
    <div className="flex top-16  text-right">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="max-[470px]:text-[12px] max-[768px]:text-[12px] max-[320px]:text-[10px] font font-semibold inline-flex w-full justify-center rounded-md  py-2 text-sm text-gray focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75">
            Proyectos
            <ChevronDownIcon
              className="-mr-1 ml-2 h-5 w-5  hover:text-gray-500"
              aria-hidden="true"
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="max-[700px]:w-[100px] max-[320px]:w-[80px] absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link href="/projectos/ingenieria">
                    <button
                      className={`${
                        active ? " bg-[#014ba0] text-white" : "text-gray-600 enlaces max-[700px]:text-[12px]  max-[320px]:text-[10px]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <EditActiveIcon
                          className=" mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <EditInactiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Speed Structural
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/projectos/desarrollo-web">
                    <button
                      className={`${
                        active ? "bg-[#014ba0] text-white" : "text-gray-600 enlaces max-[700px]:text-[12px] max-[320px]:text-[10px]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DuplicateActiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <DuplicateInactiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Desarrollo Web
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link href="/projectos/desing">
                    <button
                      className={`${
                        active ? "bg-[#014ba0] text-white" : "text-gray-600 enlaces max-[700px]:text-[12px] max-[320px]:text-[10px]"
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      {active ? (
                        <DuplicateActiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      ) : (
                        <DuplicateInactiveIcon
                          className="mr-2 h-5 w-5"
                          aria-hidden="true"
                        />
                      )}
                      Diseñador Web
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#f0f9ff"
        stroke="#014ba0"
        strokeWidth="2"
      />
    </svg>
  )
}

function EditActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#f0f9ff"
        stroke="#014ba0"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#f0f9ff"
        stroke="#014ba0"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#f0f9ff"
        stroke="#014ba0"
        strokeWidth="2"
      />
    </svg>
  )
}

function DuplicateActiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 4H12V12H4V4Z"
        fill="#f0f9ff"
        stroke="#014ba0"
        strokeWidth="2"
      />
      <path
        d="M8 8H16V16H8V8Z"
        fill="#f0f9ff"
        stroke="#014ba0"
        strokeWidth="2"
      />
    </svg>
  )
}
