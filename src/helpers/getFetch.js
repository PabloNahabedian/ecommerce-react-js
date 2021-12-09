const productos = [
    {id: 1, foto:"https://malditopaparazzo.com.ar/wp-content/uploads/2020/09/remera_personalizada_blanca_hombre.jpg", category:"remeras", name:"manga corta", price:"$1500"},
    {id: 2, foto:"https://malditopaparazzo.com.ar/wp-content/uploads/2020/09/remera_personalizada_blanca_hombre.jpg", category:"remeras", name:"manga corta", price:"$1500"},
    {id: 3, foto:"https://malditopaparazzo.com.ar/wp-content/uploads/2020/09/remera_personalizada_blanca_hombre.jpg", category:"remeras", name:"manga corta", price:"$1500"},
    {id: 4, foto:"https://redsport.vteximg.com.br/arquivos/ids/996048-1000-1000/GA050005727.jpg?v=637102804721100000", category:"pantalones", name:"shorts", price:"$1800"},
    {id: 5, foto:"https://redsport.vteximg.com.br/arquivos/ids/996048-1000-1000/GA050005727.jpg?v=637102804721100000", category:"pantalones", name:"shorts", price:"$1800"},
    {id: 6, foto:"https://redsport.vteximg.com.br/arquivos/ids/996048-1000-1000/GA050005727.jpg?v=637102804721100000", category:"pantalones", name:"shorts", price:"$1800"}
]

export const getFetch = new Promise ((resolve)=>{
    setTimeout(()=>{
        resolve(productos)
    }, 3000)
})
