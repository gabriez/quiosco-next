'use client'
import { useState, useContext, createContext, useEffect } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";

const QuioscoContext = createContext();

export default function useQuiosco () {
    return useContext(QuioscoContext)
}
export const QuioscoProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [selectCategory, setSelectCategory] = useState({})
    const router = useRouter();


    const getCategories = async () => {
        const {data} = await axios('/api/categories');
        setCategories(data);
        setSelectCategory(data[0])
        router.push(`/?name=${data[0].nombre}&id=${data[0].id}`)
    }
    useEffect(()=> {
        getCategories();
    }, []);

    const handleSelect = id => {
      let cat = categories.filter(item => item.id === id );
      setSelectCategory(...cat);
    }

  return (
    <QuioscoContext.Provider value={{categories, handleSelect, selectCategory}}>
      {children}
    </QuioscoContext.Provider>
  )
}

