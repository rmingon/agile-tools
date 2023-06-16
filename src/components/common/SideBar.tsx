'use client'
import React, { useState } from 'react';
import Image from "next/image";
import Drawer from "@/components/common/Drawer";

const project = {
  title: "TOTO",
  category: 'FFP'

}

function SideBar() {
  const [closed, setClosed] = useState(false)

  return (
    <div className={'flex-col bg-gray-800 h-screen justify-between'}>
      <div className={'h-10 bg-red-100'}>
        LOGO
      </div>
      {/* <Drawer title={'Add a new project'} onClose={setClosed} closed={closed}>
        <input type="text"/>
      </Drawer> */}
      <header className="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6">
        <div className="flex items-center justify-between">
          <h2 className="font-semibold text-slate-900">Projects</h2>
          <a href="/new" className="hover:bg-blue-400 group flex items-center rounded-md bg-blue-500 text-white text-sm font-medium pl-2 pr-3 py-2 shadow-sm">
            <svg width="20" height="20" fill="currentColor" className="mr-2" aria-hidden="true">
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New
          </a>
        </div>
        <form className="group relative">
          <svg width="20" height="20" fill="currentColor" className="absolute left-3 top-1/2 -mt-2.5 text-slate-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
          </svg>
          <input className="focus:ring-2 focus:ring-blue-500 focus:outline-none appearance-none w-full text-sm leading-6 text-slate-900 placeholder-slate-400 rounded-md py-2 pl-10 ring-1 ring-slate-200 shadow-sm" type="text" aria-label="Filter projects" placeholder="Filter projects..."/>
        </form>
      </header>
      <ul className="bg-slate-50 p-4 flex-col">
        <li>
          
        </li>
        <li className="flex">
          <a href="/new" className="hover:border-blue-500 hover:border-solid hover:bg-white hover:text-blue-500 group w-full flex flex-col items-center justify-center rounded-md border-2 border-dashed border-slate-300 text-sm leading-6 text-slate-900 font-medium py-3">
            <svg className="group-hover:text-blue-500 mb-1 text-slate-400" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z" />
            </svg>
            New project
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SideBar;