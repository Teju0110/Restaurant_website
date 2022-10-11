import React from 'react'
import './Award_Item.css'

const Award_Items = ({item}) => {
  return (
    <div className='award_Items'>
        <div className='award_Items_Image'>
        <img src={item.img}/>
        </div>
        <div className='award_Items_content'>
            <h3>{item.name}</h3>
            <h4>{item.info}</h4>
        </div>
    </div>
  )
}

export default Award_Items