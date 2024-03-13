import { useRef } from 'react' 
import { useCarritoContext } from '../context/CartContext'
import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import { createOrdenCompra, getOrdenCompra, updateProduct, getProduct } from '../firebase/firebase.js'


const Checkout = () => {
    const formRef = useRef()
    const navigate = useNavigate() //devuelve la locacion actual de mi componente
    const {carrito, totalPrice, emptyCart} = useCarritoContext()

    const handleSubmit = (e) => {
        e.preventDefault()
        const datForm = new FormData(formRef.current)
        const cliente = Object.fromEntries(datForm)

        const aux = [...carrito]

        
        //Modificar stock
        aux.forEach( prodCarrito => {
            getProduct(prodCarrito.id).then(prodBDD => {
                if(prodBDD.stock >= prodCarrito.quantity) {
                    prodBDD.stock -= prodCarrito.quantity
                    updateProduct(prodBDD.id,prodBDD)
                } else {
                    toast.info(`El stock del producto ${prodBDD.title} no se puede comprar porque no tiene stock suficiente`,{
                        position:'top-right',
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        draggable:true,
                        progress: undefined,
                        theme: "dark"
                    })
                    aux.filter(prod => prod.id != prod.BDD.id) // Elimino el producto del carrito al no tener stock 
                }
            })
        })
        
        //Generar orden de compra
        const aux2 = aux.map(prod => ({id: prod.id, quantity: prod.quantity, price: prod.price}))

        createOrdenCompra(cliente, totalPrice(), aux2, new Date().toLocaleDateString('es-AR', {timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone}))
            .then(ordenCompra => {
                toast.success(`Muchas gracias por comprar con nosotros, su Orden de compra es ${ordenCompra.id} por un total de ${totalPrice()}. En breve nos contactaremos para realizar el envio`,{
                position:'top-right',
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                draggable:true,
                progress: undefined
            })
                emptyCart()
                e.target.reset()
                navigate('/')
            
            })

            .catch(e => {
                toast.error(`Error al generar orden de compra: ${e}`,{
                    position:'top-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    draggable:true,
                    progress: undefined,
                    theme: "dark"
                })
            })
    }

    return (
        <>
        {
            carrito.length === 0?
            <>
                <h2> Para finalizar compra debe tener productos en el carrito </h2>
                <Link to={'/'}>
                    <button className='btn btn-primary'>Volver al inicio</button>
                </Link>
            </>
            :
            <div className='d-flex justify-content-center align-items-center light-primary-color' style={{minHeight:"100vh"}}>
                <form className='container form-floating' action='' ref={formRef} onSubmit={handleSubmit}>
                    <div className='d-flex'>
                        <div class="form-floating flex-fill mb-2 me-1 ms-2">
                            <input type="text" name='nombre' class="form-control" id="floatingInput" placeholder="Nombre"/>
                            <label for="floatingInput">Nombre</label>
                        </div>
                        <div class="form-floating flex-fill mb-2 mb-2 me-2 ms-1">
                            <input type="text" name='apellido' class="form-control" id="floatingInput" placeholder="Apellido"/>
                            <label for="floatingPassword">Apellido</label>
                        </div>
                    </div>
                    <div class="form-floating mb-2 mx-2">
                        <input type="text" name='direccion' class="form-control" id="floatingInput" placeholder="Direccion"/>
                        <label for="floatingPassword">Dirección</label>
                    </div>
                    <div className='d-flex'>
                        <div class="form-floating flex-fill mb-2 me-1 ms-2">
                            <input type="text" name='documento' class="form-control" id="floatingInput" placeholder="DNI"/>
                            <label for="floatingPassword">DNI</label>
                        </div>
                        <div class="form-floating flex-fill mb-2 me-2 ms-1">
                            <input type="tel" name='telefono' class="form-control" id="floatingInput" placeholder="Password"/>
                            <label for="floatingPassword">Teléfono</label>
                        </div>
                    </div>
                    <div class="form-floating mb-2 mx-2">
                        <input type="email" name='email' class="form-control" id="floatingInput" placeholder="Correo Electrónico"/>
                        <label for="floatingPassword">Correo Electrónico</label>
                    </div>
                    <div className='d-flex justify-content-center'>
                        <button type='submit' className="btn bg-dark-primary m-3 text-color-white">Finalizar Compra</button>
                    </div>
                </form>
            </div>
        }
        </>
    );
}

export default Checkout;
