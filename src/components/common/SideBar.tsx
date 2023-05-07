'use client'
import React, {useState} from 'react';
import Image from "next/image";
import Drawer from "@/components/common/Drawer";

function SideBar(props) {
  const [closed, setClosed] = useState(false)

  return (
    <div className={'flex-col bg-gray-800 h-screen justify-between'}>
      <div className={'h-10 bg-red-100'}>
        LOGO
      </div>
      <Drawer title={'Add a new project'} onClose={setClosed} closed={closed}>
        <input type="text"/>
      </Drawer>
      <div className={'flex justify-between items-center px-5 h-10 text-gray-300 cursor-pointer'}>
        <div className={'flex space-x-1 items-center'}>
          <div className={'rotation-90 transition'}>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M16 18L6 8l1.4-1.4l8.6 8.6l8.6-8.6L26 8zM4 22h24v2H4z"/></svg>
          </div>
          <p>
            Projects
          </p>
        </div>
        <div>
          <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 32 32"><path fill="currentColor" d="M16 4c6.6 0 12 5.4 12 12s-5.4 12-12 12S4 22.6 4 16S9.4 4 16 4m0-2C8.3 2 2 8.3 2 16s6.3 14 14 14s14-6.3 14-14S23.7 2 16 2z"/><path fill="currentColor" d="M24 15h-7V8h-2v7H8v2h7v7h2v-7h7z"/></svg>
        </div>
      </div>
      <div className={'sticky bottom-0'}>
        <Image src={'https://api.dicebear.com/6.x/pixel-art/svg'} width={30} height={30}/>
      </div>
    </div>
  );
}

export default SideBar;