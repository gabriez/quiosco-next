'use client'
import Sidebar from "../Sidebar"
import useQuiosco from '@/app/context/QuioscoProvider'
import ProductModal from "../ProductModal";
import Modal from 'react-modal';
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css'
import StepsNav from "../StepsNav";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

// Make sure to bind modal to your appElement (https://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root');

const LayoutHome = ({children}) => {
  const {modal, isOpen} = useQuiosco();

  return (
    <>
      <div className='md:flex '> 
          <aside className={`md:h-screen h-fit md:w-4/12 xl:w-1/4 2xl:w-1/5 overflow-y-scroll transition duration-300`}>
            <Sidebar/>
          </aside>
          <main className="md:w-8/12 xl:w-3/4 2xl:w-4/5 h-screen overflow-y-scroll">
            <div className="p-10">
              <StepsNav/>
              {children}
            </div>
            
          </main>
      </div>
      {
          modal && (
          <Modal isOpen={modal}
            style={customStyles}
          >
            <ProductModal/>
          </Modal>)
      }
      <ToastContainer/>
    </>
  )
}

export default LayoutHome
