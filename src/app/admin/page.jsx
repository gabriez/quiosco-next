import LayoutAdmin from "../_components/layouts/LayoutAdmin"
import OrdenesAdmin from "../_components/ordenes/OrdenesAdmin"

export const metadata = { 
    title: 'Cafe - Admin',
    description: 'Cafe - Admin, empleados, entregas, pedidos'
}

const Admin = () => {
  return (
    <LayoutAdmin>
        <h1 className="text-4xl font-black mt-3"> Panel de administración </h1>
        <p className="text-2xl my-10">
        Administra las ordenes  
        </p>
        <OrdenesAdmin/>
    </LayoutAdmin>
  )
}

export default Admin
