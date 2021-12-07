import React, {useState} from 'react'

const ItemCount = ({max, inicial}) => {

    const [value, setValue] = useState(inicial)

    const handleSuma = (valor) => {
        value < max ? setValue(prev => prev + valor) : alert("compra maxima")
    }

const handleResta = (valor) => {
    value > inicial ? setValue(prev => prev - valor) : alert("Compra mínima")
}

return (

    <div>
        <p>{value}</p>
        <button onClick={() => handleSuma(1)}>+</button>
        <button onClick={() => handleResta(1)}>-</button>
        
    </div>
)
}

export default ItemCount
