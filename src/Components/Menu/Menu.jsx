import React from 'react'
import { MenuList } from '../../helpers/MenuList'
import MenuItem from '../../helpers/MenuItem'
import './Menu.css'
function Menu() {
  return (
    <div className=' bg-gray-100'>
      <h1 className='MenuTitle'>Our Menu</h1>
      <div className='menuList'>
        {MenuList.map((menuItem, key)=>{
          return(
            <div>
            <div className='null'>
              <img src={menuItem.image} height={50} width={100} className='brand'/>
            </div>
            <div className='text'>
               <h3 className=' font-semibold cursor-pointer'> {menuItem.name} </h3>
               <button className="px-6 h-12 uppercase font-semibold tracking-wider border border-slate-200 text-slate-900" type="button">
          {menuItem.price}$
        </button>
        </div>
        </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu




// (<MenuItem key={key} image={menuItem.image } name={menuItem.name} price={menuItem.price}/>)