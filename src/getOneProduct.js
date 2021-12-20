const oneProduct = [
    {id: 1, foto:"https://malditopaparazzo.com.ar/wp-content/uploads/2020/09/remera_personalizada_blanca_hombre.jpg", category:"remeras", name:"manga corta", price:"$1500"}
]

const getOneProduct = new Promise((resolve) => {
    setTimeout(() => {
        resolve(oneProduct);
    }, 3000);
});

export default getOneProduct;