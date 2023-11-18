"use client";
import Loading from "../Loading";
import useSWR from "swr"
import axios from "axios";
import Orden from "./Orden";
const OrdenesAdmin = () => {
  const fetcher = () => axios('/api/pedidos').then(response => response.data);
  const { data, error, isLoading } = useSWR('/api/pedidos', fetcher, {refreshInterval: 100});

  return (
    <>
      {
        isLoading? (<Loading admin={'admin'}/>) : data && data.length !== 0 ? data.map(order => (<Orden order={order} key={order.id} />)) : <p> No hay ordenes pendientes </p>
      }
    </>
  )
}

export default OrdenesAdmin
