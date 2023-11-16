import LayoutHome from "../_components/layouts/LayoutHome"
import FormTotal from "../_components/FormTotal"

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
    <FormTotal/>
  </LayoutHome>
  )
}

export default Total
