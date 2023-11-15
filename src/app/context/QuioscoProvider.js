'use client'
import { useState, useContext, createContext, useEffect } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
const QuioscoContext = createContext();

export default function useQuiosco () {
    return useContext(QuioscoContext)
}
export const QuioscoProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [selectCategory, setSelectCategory] = useState({})
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});
    const [pedidos, setPedidos] = useState([])
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

    const handleProductModal = information => {
      if (information?.nombre) setProduct(information);
      setModal(!modal);
    }

    const handleCreatePedido = ({categoriaId, imagen, ...pedido}) => {
      if (pedidos.some(order => order.id === pedido.id)) {
        setPedidos(pedidos.map( order => order.id === pedido.id ? pedido : order));
        toast.success('Se actualizó el pedido correctamente');
      } else { 
        setPedidos([...pedidos, pedido]);
        toast.success('Se agregó el pedido correctamente');
      }      
      setModal(false);
    }

  return (
    <QuioscoContext.Provider value={{categories, handleSelect, selectCategory, handleProductModal, product, modal, handleCreatePedido, pedidos}}>
      {children}
    </QuioscoContext.Provider>
  )
}

