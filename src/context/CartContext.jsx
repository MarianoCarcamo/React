import { useState, createContext, useContext } from 'react'

const CarritoContext = createContext() // Se crea el contexto 

export const useCarritoContext = () => useContext(CarritoContext) // Funcion para consultar mi el contexto

export const CarritoProvider = (props) => { // Forma de proveer el contexto, puede recibir props
    const [ carrito, setCarrito ] = useState([])

    //Buscar Producto
    const isInCart = (id) => {
        return carrito.some(prod => prod.id === id)
    }

    //Agregar producto
    const addItem = (item, cantidad) => {
        if(isInCart(item.id)){
            const indice = carrito.findIndex(prod => prod.id === item.id)
            const aux = [...carrito]
            aux[indice].quantity = cantidad
            setCarrito(aux)
        } else {
            const newItem = {
                ...item,
                quantity: cantidad
            }

            setCarrito([...carrito, newItem]) // Guardo en el carrito el nuevo producto
        }
    }

    //Quitar Producto
    const removeItem = (id) => {
        // const aux = [...carrito]
        // const indice = aux.findIndex(prod.id === id)

        // if(indice != -1){
        //     setCarrito(aux.splice(indice,1))
        // }
        setCarrito(carrito.filter(prod => prod.id !== id))
    }

    //Vaciar Carrito
    const emptyCart = () => {
        setCarrito([])
    }

    //Obtener catidad de productos
    const getItemQuantity = () => {
        return carrito.reduce((acum,prod) => acum += prod.quantity, 0)
    }

    //Obtener precio total
    const totalPrice = () => {
        return carrito.reduce((acum,prod) => acum += (prod.quantity * prod.price),0)
    }
    return (
        <CarritoContext.Provider value={{carrito, addItem, removeItem, emptyCart, getItemQuantity, totalPrice}}>
            {props.children}
        </CarritoContext.Provider>
    )
}