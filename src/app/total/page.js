import LayoutHome from "../_components/layouts/LayoutHome"

export const metadata = {
  title: 'Cafe - Total y confirmar pedido', 
  description: 'Cafe - Total y confirmar pedido, compra tu comida favorita en nuestro quiosco virtual'
}

const Total = () => {
  return (
    <LayoutHome>
    <h1 className="text-4xl font-black mt-3">Total y confirmar pedido</h1>
    <p className="text-2xl my-10">
      Confirma tu pedido a continuación  
    </p>
    <form> 
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 font-bold text-xl">
            Nombre
          </label>
          <input 
            id='name'
            type="text"
            className="bg-gray-200 rounded-md w-full lg:w-1/3 mt-3 p-2"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl"> Total a pagar:
            <span className="font-bold"> {}</span>
          </p>
        </div>
        <div className="mt-5">
          <input 
            type="submit"
            className="text-center bg-indigo-600 w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white"
            value='Confirmar Pedido'
          />
        </div>
      </form>
  </LayoutHome>
  )
}

export default Total
