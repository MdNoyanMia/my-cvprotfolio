import React from 'react'

import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'

const Rootlayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Rootlayout