import React from 'react'
import { CartIcon } from '../icons'
import { useSelector } from 'react-redux/es/exports'
import { store } from '../store'


const Top = () => {

    const {amount} = useSelector((store) => store.cart)


  return (
    <div>
    <div className='top'>
           <h1>Избранное</h1>
        <div className='icon'>
            <CartIcon />
            <div className='amount-container'>
                <p className='total-amount'>{amount}</p>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Top