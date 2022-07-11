import React from 'react'
import { CartIcon } from '../icons'
import { useSelector, useDispatch } from 'react-redux/es/exports'
import { clearCart } from '../features/cart/cartSlice'


const Top = () => {

    

    const dispatch = useDispatch()

    const {amount} = useSelector((store) => store.cart)


  return (
    <div>
    <div className='top'>
           <h1 id='p'>Избранное</h1>
        <div className='icon'>
            <CartIcon />
            <div className='amount-container'>
                <p className='total-amount'>{amount}</p>
            </div>
           </div>
        </div>
           <button className='deleted' onClick={() => dispatch(clearCart())}>Удалить Товары</button>
    </div>
  )
}

export default Top