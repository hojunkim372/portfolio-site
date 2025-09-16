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
