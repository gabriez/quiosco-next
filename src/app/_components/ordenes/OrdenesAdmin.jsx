"use client";
import Loading from "../Loading";
import useSWR from "swr"
import axios from "axios";
import Orden from "./Orden";
const OrdenesAdmin = () => {
  const fetcher = () => fetch('/api/pedidos').then(response => response.json()).catch(error => console.error(error));
  const { data, error, isLoading } = useSWR('/api/pedidos', fetcher, {refreshInterval: 1000});
  console.log(data, error)
  return (
    <>
      {
        isLoading? (<Loading admin={'admin'}/>) : data && data?.length > 0 ? data.map(order => (<Orden order={order} key={order.id} />)) : <p> No hay ordenes pendientes </p>
      }
    </>
  )
}

export default OrdenesAdmin
