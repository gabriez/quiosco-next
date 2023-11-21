import LayoutHome from "./_components/layouts/LayoutHome"
import axios from "axios";
import Product from "./_components/Product";
import {headers} from 'next/headers'

export function generateMetadata ({searchParams}) {
  const name = searchParams.name;
  return {
    title: `Cafe - ${name}`,
    description: `Compra tu comida favorita en nuestro quiosco virtual, comida, comida rapida, venta ${name}`
  }
}



export default async function Home({searchParams}) {
  const headersList = headers()

  async function getProducts (id) {

    const data = await fetch(`http://${headersList.get('host')}/api/products?id=${id}`, {cache: 'no-store'}).then(  res =>
    {
      console.log(res)
      if (new Headers(res.headers).get('content-type') === 'text/html; charset=utf-8'){
        return res
      }
      return res.json()
    }
    ).catch(error => console.log(error));
    console.log(data)
    return data
  }
  let products = [];
  if (searchParams?.id) products = await getProducts(searchParams.id);


  const name = searchParams.name;
  return (
    <LayoutHome>
      <h1 className="text-4xl font-black mt-3">{name}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido
        
      </p>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {
          products?.length > 0 && 
          products?.map(product => <Product key={product.id} product={product}/>)
        }
      </div>
    </LayoutHome>
  )
}
