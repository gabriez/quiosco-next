"use client";
import { useFormStatus, useFormState} from 'react-dom';
import useQuiosco from '../context/QuioscoProvider';
import { createTodo } from '../lib/actions';
import { useEffect, useState } from 'react';
import { formatMoney } from '../lib/helper';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';
import Loading from './Loading';

const initialState = {
    type: null,
    message: null
}

const ButtonForm = ({handleEmptyOrder}) => {
  const {pending } = useFormStatus(); 
  return (
    <button
      className={`${handleEmptyOrder() || pending ? 'bg-indigo-300' : 'bg-indigo-600'} text-center cursor-pointer w-full lg:w-auto lg:min-w-[250px] px-5 py-2 rounded uppercase font-bold text-white`}
      type='submit' aria-disabled={pending || handleEmptyOrder()}>
      { pending ?  (
       <Loading/>
      ) : 'Confirmar Pedido' }
    </button>
  )
}


const FormTotal = () => {
    const {pedidos, setPedidos} = useQuiosco();
    const [state, formAction] = useFormState(createTodo, initialState)
    const [total, setTotal] = useState(0);
    const router = useRouter();

    const handleEmptyOrder = () => {
        return pedidos.length === 0;
    }

    useEffect(() => {
        let montoTotal = pedidos.reduce((a, b) => a + (b.quantity * b.precio), 0);
        setTotal(montoTotal);
    }, [pedidos])
    
    useEffect(() => {
      if(state.type === 408) {
        console.log(state.message)
        toast.error(state.message)
      } 
      if (state.type === 201) {
        toast.success(state.message)
        setTimeout(()=> {
          setPedidos([])
          router.push('/?name=Café&id=1&step=0')
        }, 2500)
        
      }
    }, [state])

  return (
    <form action={formAction}> 
    <input type="hidden" name="total" value={total} />
    <input type="hidden" name="pedido" value={JSON.stringify(pedidos)} />
    <div>
      <label
        htmlFor="nombre"
        className="block uppercase text-slate-800 font-bold text-xl">
        Nombre
      </label>
      <input 
        id='nombre'
        name='nombre'
        type="text"
        className="bg-gray-200 rounded-md w-full lg:w-1/3 mt-3 p-2"
      />
      <p aria-live="polite" className={state.type === 400 ? 'w-full lg:w-1/3 text-center bg-red-500 text-white font-bold text-base rounded-md uppercase py-2 mt-2' : ''}>
        {state.type === 400 && state?.message}
      </p>
    </div>
    <div className="mt-10">
      <p className="text-2xl"> Total a pagar:
        <span className="font-bold"> {formatMoney(total)}</span>
      </p>
    </div>
    <div className="mt-5">
      <ButtonForm handleEmptyOrder={handleEmptyOrder} />
    </div>
  </form>
  )
}

export default FormTotal
