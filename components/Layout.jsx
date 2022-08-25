import React from 'react'
import Head from 'next/head';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className='layout'>
      <title>Sound Waves - Online Store</title>
      <header>
      <Navbar />
      </header>
      <main className='main-container'>
        Empty
      </main>
    </div>
    
  )
}

export default Layout