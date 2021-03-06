import React from 'react';
import Header from './header';
import Footer from './footer';
import '../styles/index.scss';
import layoutStyles from './layout.module.scss';

const Layout = (prpps) => {

    return (
        <div className={layoutStyles.container}>
            <Header />
            <div className={layoutStyles.content}>
                {prpps.children}
            </div>
            <Footer />
        </div>
    )
}


export default Layout