import React from 'react'
import Head from 'next/head' // Head is a built-in component in Next.js that allows you to modify the <head> of a page. Or the metadata
import { Footer, Navbar } from '.'


const Layout = ({ children }) => {
  return (
    <div className='layout'>
        <Head>
            <title>Centrum E-Shop</title>
        </Head>
        <header>
            <Navbar />
        </header>
        <main className="main-container">
            {children}
        </main>
        <footer>
            <Footer />
        </footer>
    </div>
  )
}

export default Layout