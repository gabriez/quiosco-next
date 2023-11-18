'use client'
import { useState, useContext, createContext, useEffect } from "react"
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useSearchParams, usePathname } from "next/navigation";
const QuioscoContext = createContext();

export default function useQuiosco () {
    return useContext(QuioscoContext)
}
export const QuioscoProvider = ({children}) => {
    const [categories, setCategories] = useState([]);
    const [modal, setModal] = useState(false);
    const [product, setProduct] = useState({});
    const [pedidos, setPedidos] = useState([])
    const searchParams = useSearchParams();
    const step = searchParams.get('step')
    const path = usePathname();
    const router = useRouter();

    const getCategories = async () => {
        const {data} = await axios('/api/categories');
        setCategories(data);
        if ((!/(1|2)/.test(step) || step?.length === 0)&& path !== '/admin') {
          router.push(`/?name=${data[0].nombre}&id=${data[0].id}&step=0`);
        }
    }
    useEffect(()=> {
        getCategories();
    }, []);

    const handleProductModal = information => {
      if (information?.nombre) setProduct(information);
      setModal(!modal);
    }

    const handleCreatePedido = ({categoriaId, ...pedido}) => {
      if (pedidos.some(order => order.id === pedido.id)) {
        setPedidos(pedidos.map( order => order.id === pedido.id ? pedido : order));
        toast.success('Se actualizó el pedido correctamente');
      } else { 
        setPedidos([...pedidos, pedido]);
        toast.success('Se agregó el pedido correctamente');
      }      
      setModal(false);
    }

    const handleEditQuantity = id => {
      let ModalInfo = pedidos.filter( item => item.id === id)
      setModal(true);
      setProduct(ModalInfo[0]);
    }

    const handleDeleteProduct = id => {
      let pedidosUndeleted = pedidos.filter( item => item.id !== id)
      setPedidos(pedidosUndeleted);
    }
  return (
    <QuioscoContext.Provider value={{
      categories, 
      handleProductModal, 
      product, 
      modal, 
      handleCreatePedido, 
      pedidos,
      handleEditQuantity,
      handleDeleteProduct,
      setPedidos
    }}
      >
      {children}
    </QuioscoContext.Provider>
  )
}

