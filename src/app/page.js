import LayoutHome from "./_components/layouts/LayoutHome"
import axios from "axios";
import Product from "./_components/Product";

export function generateMetadata ({searchParams}) {
  const name = searchParams.name;
  return {
    title: `Cafe - ${name}`,
    description: `Cafe - ${name}, venta ${name}`
  }
}



export default async function Home({searchParams}) {
  async function getProducts (id) {
    const {data} = await axios(`http://localhost:3000/api/products?id=${id}`).then( response => response).catch(error => console.log(error));
    return data
  }
  const products = await getProducts(searchParams.id);


  const name = searchParams.name;
  return (
    <LayoutHome>
      <h1 className="text-4xl font-black">{name}</h1>
      <p className="text-2xl my-10">
        Elige y personaliza tu pedido
        
      </p>

      <div className="grid gap-4 grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
        {
          products.length > 0 && 
          products.map(product => <Product key={product.id} product={product}/>)
        }
      </div>
    </LayoutHome>
  )
}
