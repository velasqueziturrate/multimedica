import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from './components/general/navbar';
import Routes from './helpers/routes';
import Footer from './components/general/footer';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Routes/>
      <Footer/>
    </BrowserRouter>
  );
}