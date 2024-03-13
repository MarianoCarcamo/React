import { initializeApp } from "firebase/app";
import { getFirestore, addDoc, collection, getDocs, getDoc, doc, updateDoc, deleteDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyAd8yJG0l_t-yQ2MdatykmhxItS6z8cOKw",
  authDomain: "fycbeauty.firebaseapp.com",
  projectId: "fycbeauty",
  storageBucket: "fycbeauty.appspot.com",
  messagingSenderId: "730360318802",
  appId: "1:730360318802:web:f61887f02857b1a169088b"
};

const app = initializeApp(firebaseConfig);

// Consultar BDD
const bdd = getFirestore()

//Array de productos
const productos = [
    {
        "title": "GUDUCHI Aceite esencial - 10 ml",
        "price": 6999.00,
        "stock": 5,
        "category":"hogar",
        "img": "https://firebasestorage.googleapis.com/v0/b/fycbeauty.appspot.com/o/1.jpg?alt=media&token=fc06d6cf-d405-4168-afb5-222bfd62c83f"
    },
    {
        "title": "PALO SANTO - AROMATIZANTE AMBIENTAL 125 ml",
        "price": 7999.00,
        "stock": 3,
        "category":"hogar",
        "img": "https://firebasestorage.googleapis.com/v0/b/fycbeauty.appspot.com/o/2.jpg?alt=media&token=bfcd4135-4336-4cbb-a508-ab85163b7ab0"
    },
    {
        "title": "ESPARTA Eau de Parfum - 50 ml",
        "price": 11999.00,
        "stock": 2,
        "category":"perfume",
        "img": "https://firebasestorage.googleapis.com/v0/b/fycbeauty.appspot.com/o/3.jpg?alt=media&token=8a3427e1-237b-4b8b-bee0-d1235e705e5f"
    },
    {
        "title": "MANHATTAN Eau de Parfum - 50 ml",
        "price": 11999.00,
        "stock": 5,
        "category":"perfume",
        "img": "https://firebasestorage.googleapis.com/v0/b/fycbeauty.appspot.com/o/4.jpg?alt=media&token=cddbf03c-36b0-46be-95f9-7387d6b78d22"
    },
    {
        "title": "FRESCA NATURALEZA - Aromatizante textil 500 ml",
        "price": 6499.00,
        "stock": 7,
        "category":"hogar",
        "img": "https://firebasestorage.googleapis.com/v0/b/fycbeauty.appspot.com/o/5.jpg?alt=media&token=178a6903-6ebe-497e-929f-6eff9e203893"
    },
    {
        "title": "CREMA REVITALIZANTE OLIVA, MIEL Y PROPOLEO - 100 g",
        "price": 9999.00,
        "stock": 8,
        "category":"cosmetica",
        "img": "https://firebasestorage.googleapis.com/v0/b/fycbeauty.appspot.com/o/6.jpg?alt=media&token=ef5caa0b-787e-447c-b2f9-e980719641ce"
    },
    {
        "title": "ORTIGA Y ROMERO SHAMPOO - 210 ml",
        "price": 6299.00,
        "stock": 3,
        "category":"cosmetica",
        "img": "https://firebasestorage.googleapis.com/v0/b/fycbeauty.appspot.com/o/7.jpg?alt=media&token=6100312c-4448-47a4-8f66-0e3be4109e3c"
    },
    {
        "title": "COCO SHAMPOO - 210 ml",
        "price": 6299.00,
        "stock": 5,
        "category":"cosmetica",
        "img": "https://firebasestorage.googleapis.com/v0/b/fycbeauty.appspot.com/o/8.jpg?alt=media&token=4951d292-2c6c-4d1b-a3c0-9237b1f40c6b"
    },
    {
        "title": "LABIAL CREMOSO - 4 g",
        "price": 5499.00,
        "stock": 10,
        "category":"maquillaje",
        "img": "https://firebasestorage.googleapis.com/v0/b/fycbeauty.appspot.com/o/9.jpg?alt=media&token=9de7ac70-7053-4ffe-8240-cd21a2d296be"
    },
    {
        "title": "DUO DE SOMBRAS - 3 g",
        "price": 7999.00,
        "stock": 5,
        "category":"maquillaje",
        "img": "https://firebasestorage.googleapis.com/v0/b/fycbeauty.appspot.com/o/10.jpg?alt=media&token=33f4999e-109e-4160-8395-dcf746ef58ce"
    }
]

// crear productos

export const createProducts = async () => {
    productos.forEach( async (prod) => {
        await addDoc(collection(bdd, "productos"),{
            "title": prod.title,
            "price": prod.price,
            "stock": prod.stock,
            "category":prod.category,
            "img": prod.img
        })
    })
}

export const getProducts = async () => {
    const productos = await getDocs(collection(bdd,"productos"))
    const items = productos.docs.map(prod => {return {id: prod.id,...prod.data()}})
    return items
}

export const getProduct = async (id) => {
    const producto = await getDoc(doc(bdd,"productos",id))
    const item = {id: producto.id,...producto.data()}
    return item
}

export const updateProduct = async (id, info) => {
    await updateDoc(doc(bdd,"productos", id), info)
}

export const deleteProduct = async (id) => {
    await deleteDoc(doc(bdd,"productos", id))
}

// Crear y leer ordenes de compra
export const createOrdenCompra = async (cliente, precioTotal, carrito, fecha) => {
    const ordenCompra = await addDoc(collection(bdd, "ordenesCompra"), {
        cliente: cliente,
        items: carrito,
        precioTotal: precioTotal,
        fecha: fecha
    })
    return ordenCompra
}

export const getOrdenCompra = async (id) =>{
    const ordenCompra = await getDoc(doc(bdd,"ordenesCompra",id))
    const item = { id: ordenCompra.id, ...ordenCompra.data()}
    return item
}