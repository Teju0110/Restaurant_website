import React from 'react'
import './Menu_Items.css'

const Menu_Items = ({item}) => {
  return (
    <div className='menu_items'>
        <div className='menu_items_title'>
            <h3>{item.name}</h3>
            <div/>
            <h4>{item.price}</h4>
        </div>
        <div className='menu_items_text'>
            <p>{item.quantity}</p>
        </div>
    </div>
  )
}

export default Menu_Items