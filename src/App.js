import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Layout, Typography, Space } from "antd";
import { Navbar, Exchanges, Cryptocurrencies, News, CryptoDetails, HomePage } from './components';

import './App.css'

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <div className="main">
                <Layout>
                    <div className="routes">
                        <Routes>
                            <Route path='/'>
                                <HomePage />
                            </Route>
                            <Route path='/exchanges'>
                                <Exchanges />
                            </Route>
                            <Route path='/cyptocurrencies'>
                                <Cryptocurrencies />
                            </Route>
                            <Route path='/crypto/:coinId'>
                                <CryptoDetails />
                            </Route>
                            <Route path='/news'>
                                <News />
                            </Route>
                        </Routes>
                    </div>
                </Layout>
            </div>
            <div className="footer"></ div>
        </div>
    );
};

export default App;