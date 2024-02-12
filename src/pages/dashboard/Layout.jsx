import React from 'react';
import Header from './component/Header';
import Footer from './component/Footer';
import { Outlet } from "react-router-dom";

const Layout = () => {

    return (
        <div className="wrapper">
            <header className='head'><Header /></header>
               <main className='main container'><Outlet /></main> 
            <footer className='footer'><Footer /></footer>
        </div>
    );
};


export default Layout;
