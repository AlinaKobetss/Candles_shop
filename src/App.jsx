import React, { useEffect, useState } from 'react'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Products from './components/Products/Products'
import Popular from './components/Popular/Popular'
import Reviews from './components/Reviews/Reviews'

const data = [
  {
    id: "1",
    title: "Spiced Mint",
    price: 9.9,
    sale: 0,
    image: "./images/products/product-1.png"
  },
  {
    id: "2",
    title: "Sweet Straweberry",
    price: 9.9,
    sale: 0,
    image: "./images/products/product-2.png"
  },
  {
    id: "3",
    title: "Cool Blueberries",
    price: 9.9,
    sale: 0,
    image: "./images/products/product-3.png"
  },
  {
    id: "4",
    title: "Juicy Lemon",
    price: 9.9,
    sale: 0,
    image: "./images/products/product-4.png"
  },
  {
    id: "5",
    title: "Product name",
    price: 9.9,
    sale: 0,
    image: "./images/products/product-5.png"
  },
  {
    id: "6",
    title: "Fragrant Cinnamon",
    price: 9.9,
    sale: 0,
    image: "./images/products/product-6.png"
  },
  {
    id: "7",
    title: "Summer Cherries",
    price: 9.9,
    sale: 0,
    image: "./images/products/product-7.png"
  },
  {
    id: "8",
    title: "Clean Lavander",
    price: 9.9,
    sale: 0,
    image: "./images/products/product-8.png"
  }
]

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(()=>{
    setProducts(data)
  },[])

  return (
    <>
      <Navbar />

      <Header/>

      <Products data={products}/>

      <Reviews />

      {/* <Popular data={products}/> */}
    </>
  )
}

export default App

