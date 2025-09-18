/* 
  File: App.jsx
  Name: Hojun Kim
  Student ID: 301459546
  Date: Sept 18, 2025
*/
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import MainRouter from "./components/MainRouter";
import "./App.css"; 

export default function App() {
  return (
    <BrowserRouter>
      <Layout />
      <MainRouter />
    </BrowserRouter>
  );
}
