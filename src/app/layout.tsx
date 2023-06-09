import './globals.css'
import { Inter } from 'next/font/google'
import {ReactNode} from "react";
import SideBar from "@/components/common/SideBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <div className={'flex'}>
        <div className={'w-1/6 h-full'}>
          <SideBar/>
        </div>
        <div>
          {children}
        </div>
      </div>
      </body>
    </html>
  )
}
