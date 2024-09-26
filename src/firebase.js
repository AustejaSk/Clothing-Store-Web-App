import { initializeApp } from "firebase/app"
import { getFirestore, getDocs, collection } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDP-lSs5SaBMdVeQOpIR_q6JcLSKbYuuCU",
    authDomain: "clothing-store-8df42.firebaseapp.com",
    projectId: "clothing-store-8df42",
    storageBucket: "clothing-store-8df42.appspot.com",
    messagingSenderId: "1094546255059",
    appId: "1:1094546255059:web:8ea9a06ebd84a3ce8e7826"
  }

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const fetchProducts = async () => {

  try {
      const productsSnapshot = await getDocs(collection(db, 'products'))
      const productsList = productsSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))

      const categoriesSet = new Set(productsList.map(product => product.category))
      const categoriesList = Array.from(categoriesSet)

      return { productsList, categoriesList }

  } catch (error) {
      console.error("Error fetching products:", error)
      throw error
  }
}

export { fetchProducts }