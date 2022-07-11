import React from 'react'
import './FavouritePage.css'
import data from '../data'



import { useSelector } from 'react-redux/es/exports'
import Top from './Top'
import Item from './Items'

const FavouritePage = () => {

    const {cartItems, total, amount} = useSelector((store) => store.cart)



    if(amount < 1) {
        return (
            <section className='cart'>
                <Top />
            <header>
                <h2 className='big'>Ваши Избранные</h2>
                <h4 className='empty-cart'>на даный момент пусты</h4>
            </header>
        </section>
        )
    }

  return (
    <div>
        <Top />
        <div id='disappear' className='wrap'>
            {
                data.map( (item) => {
                    return (
                        <Item key={item.id} {...item} />
                    )
             } )
            }
        </div>
    </div>
  )
}

export default FavouritePage