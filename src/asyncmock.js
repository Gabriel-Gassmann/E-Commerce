const productos = [
    {nombre: "Hamburguesa Completa", precio: 2500, id: 1, img: "./img/HamburguesaCompleta.jpg"},
    {nombre: "Hamburguesa Doble Carne", precio: 2000, id: 2, img: "./img/HamburguesaDobleCarne.jpg"},
    {nombre: "Pizza CuatroQuesos", precio: 3500, id: 3, img: "./img/PizzaCuatroQuezos.jpg"},
    {nombre: "Pizza Napolitana", precio: 3500, id: 4, img: "./img/PizzaNapolitana.jpg"},


]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(productos)
        }, 2000)
    })
}