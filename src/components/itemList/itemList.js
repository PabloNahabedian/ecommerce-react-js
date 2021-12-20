import React from 'react'
import item from '../item/item'

function itemList({productos}) {
    return (
        <>
          {productos.map((prod)=> <item prod = {prod}/>)}  
        </>
    )
}

export default itemList