import React from 'react'
import Menu_Items from '../Container/Menu_Items'
import {beerMenu} from '../Data/MenuData.js'
import {cocktailMenu} from  '../Data/MenuData.js'
import menu from '../Images/menu.png'
import './Menu.css'

const Menu = () => {
  return (
    <div className='menu' id='menu'>
        <div className='menu_heading'>
            <p>Menu that fits you palatte</p>
            <h1>Today’s Special</h1>
        </div>
        <div className='menu_content'>
            <div className='menu1'>
                <h2>Wine & Beer</h2>
                {
                    beerMenu.map((item,index)=>(
                        <Menu_Items key={index} item={item}/>
                    ))
                }
            </div>
            <div className='menu_image'>
                <img src={menu} alt='Menu Image'/>
            </div>
            <div className='menu2'>
                <h2>Cocktails</h2>
                {
                    cocktailMenu.map((item,index)=>(
                        <Menu_Items key={index} item={item}/>
                    ))
                }
            </div>
        </div>
        <div className='menu_button'>
                <button>View More</button>
        </div>
    </div>
  )
}

export default Menu