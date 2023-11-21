'use client';
import { useState } from "react";
import useQuiosco from "@/app/context/QuioscoProvider"
import Image from "next/image"
import Category from "./Category";
import { Squash as Hamburger } from "hamburger-react";

const Sidebar = () => {
  const {categories, isOpen, setOpen} = useQuiosco();
  
  return (
    <>
      <div>
        <div className='md:hidden'>
          <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
        <Image
          width={200}
          height={100}
          alt="Logotipo"
          src={'/assets/img/logo.svg'}
          className="m-auto"
        />
      </div>
      <nav className={`${isOpen? 'left-0' : 'left-[-100%]'} top-2 bg-white absolute w-full md:relative overflow-hidden mt-10 md:block transition-all h-screen duration-300`}>
        {categories.map(category => (
          <Category 
          key={category.id}
          category={category}/>
        ))}
      </nav>
    </>
  )
}

export default Sidebar
