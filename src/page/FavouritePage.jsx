import React from 'react'
import './FavouritePage.css'
import data from '../data'
import stars from '../img/star.png'
import icon from '../img/icon.png'


const FavouritePage = () => {
  return (
    <div>
        <div className='top'>
           <h1>Избранное</h1>
        </div>
        <div className='wrap'>
            {
                data.map( ({id, img, title, vershion, porc, Mainphoto, secondPhoto, ssd, valuta}) => {
                    return (
                        <div className='goods'>
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