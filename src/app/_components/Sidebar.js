'use client';
import useQuiosco from "@/app/context/QuioscoProvider"
import Image from "next/image"
import Category from "./Category";

const Sidebar = () => {
  const {categories} = useQuiosco();
  return (
    <>
      <Image
        width={200}
        height={100}
        alt="Logotipo"
        src={'/assets/img/logo.svg'}
        className="m-auto"
      />
      <nav className="mt-10 ">
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
