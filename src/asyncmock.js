const productos = [
    { nombre: "Galaxy Pocket", precio: 1000, stock: 5, id: "1", img: "../img/galaxypocket.jpg", idCat: "2" },
    { nombre: "Galaxy Fame", precio: 1500, stock: 5, id: "2", img: "../img/galaxyfame.jpg", idCat: "2" },
    { nombre: "Funda pocket", precio: 3400, stock: 10, id: "3", img: "../img/fundagalaxypocket.webp", idCat: "3" },
    { nombre: "Funda Fame", precio: 4300, stock: 5, id: "4", img: "../img/FundaGalaxyFame.webp", idCat: "3" },
]

export const getProductos = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(productos)
        }, 2000)
    })
}


export const getUnProducto = (id) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const producto = productos.find(prod => prod.id === id);
            resolve(producto);
        }, 2000)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise(resolve => {
        setTimeout(() => {
            const productosCategoria = productos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 2000)
    })
}