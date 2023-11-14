import Sidebar from "../Sidebar"

const LayoutHome = ({children}) => {
  return (
    <div className='md:flex '> 
        <aside className="md:w-4/12 xl:w-1/4 2xl:w-1/5 h-screen overflow-y-scroll">
          <Sidebar/>
        </aside>
        <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
          <div className="p-10">
            {children}
          </div>
        </main>
    </div>
  )
}

export default LayoutHome
