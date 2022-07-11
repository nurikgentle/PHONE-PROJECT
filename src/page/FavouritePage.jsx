import React from 'react'
import './FavouritePage.css'
import data from '../data'
import stars from '../img/star.png'
import icon from '../img/icon.png'


import { useSelector } from 'react-redux/es/exports'
import { store } from '../store'
import Top from './Top'

const FavouritePage = () => {

    const {cartItems, total, amount} = useSelector((store) => store.cart)



    if(amount < 1) {
        return (
            <section className='cart'>
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
                data.map( ({id, img, title, vershion, porc, Mainphoto, secondPhoto, ssd, valuta}) => {
                    return (
                        <div className='goods' key={id}>
                            <div className='left'>
                                <img src={img} alt='hz'/>
                            </div>
                            <div className='middle'>
                                <h2 className='title'>{title}</h2>
                                <div className='stars'>
                                    <img src={stars}  alt=''/>
                                    <img src={stars}  alt=''/>
                                    <img src={stars}  alt=''/>
                                    <img src={stars}  alt=''/>
                                    <img src={stars}  alt=''/>
                                    <spa>15 отзывов</spa>
                                </div>
                                <p><span>Процессор</span> {porc}</p>
                                <p><span>Основная камера</span> {Mainphoto}</p>
                                <p><span>Фронтальная камера</span> {secondPhoto}</p>
                                <p><span>Встроенная память</span> {ssd} </p>
                                <p><span>Оперативная память</span> {ssd} </p>
                            </div>
                            <div className='right'>
                                <h2>{valuta} сом</h2>
                                <button className='korzina'>В корзину</button>
                                <div className='kettik'>
                                  <img src={icon}  alt="hello"/>
                                  <button className='delete'>Удалить</button>
                                </div>
                            </div>
                        </div>
                    )
                } )
            }
        </div>
    </div>
  )
}

export default FavouritePage