import LayoutHome from "../_components/layouts/LayoutHome"
import Pedidos from "../_components/pedidos/Pedidos"

export const metadata = {
  title: 'Cafe - Resumen', 
  description: 'Cafe - Resumen, compra tu comida favorita en nuestro quiosco virtual'
}


const Resumen = () => {
  return (
    <LayoutHome>
      <h1 className="text-4xl font-black mt-3">Resumen</h1>
      <p className="text-2xl my-10">
        Revisa tu pedido  
      </p>
      <Pedidos/>
    </LayoutHome>
  )
}

export default Resumen
