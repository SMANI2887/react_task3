import React, { Children, useEffect, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./assets/style/style.css";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topper from "./components/Topper";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Buttons from "./components/pages/Buttons";
import Card from "./components/pages/Card";
import Color from "./components/utilities/Color";
import Border from "./components/utilities/Border";
import Animations from "./components/utilities/Animations";
import Other from "./components/utilities/Other";
import Login2 from "./components/pages/Login2";
import Register from "./components/pages/Register";
import Forgot_Password from "./components/pages/Forgot_Password";
import Blank_Page from "./components/pages/Blank_Page";
import Page_Error from "./components/pages/Page_Error";
import Charts_New from "./components/pages/Charts_New";
import Tables from "./components/pages/Tables";
import Wrapper from "./components/Wrapper";
import Full_Page from "./components/pages/Full_Page";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <Wrapper>
              <Dashboard />
            </Wrapper>
          }
        />
        <Route
          path="/Buttons"
          element={
            <Wrapper>
              <Buttons />
            </Wrapper>
          }
        />
        <Route
          path="/Card"
          element={
            <Wrapper>
              <Card />
            </Wrapper>
          }
        />
        <Route
          path="/Color"
          element={
            <Wrapper>
              <Color />
            </Wrapper>
          }
        />
        <Route
          path="/Border"
          element={
            <Wrapper>
              <Border />
            </Wrapper>
          }
        />
        <Route
          path="/Animations"
          element={
            <Wrapper>
              <Animations />
            </Wrapper>
          }
        />
        <Route
          path="/Other"
          element={
            <Wrapper>
              <Other />
            </Wrapper>
          }
        />
        <Route
          path="/Login2"
          element={
            <Full_Page>
              <Login2 />
            </Full_Page>
          }
        />
        <Route
          path="/Register"
          element={
            <Full_Page>
              <Register />
            </Full_Page>
          }
        />
        <Route
          path="/Forgot_Password"
          element={
            <Full_Page>
              <Forgot_Password />
            </Full_Page>
          }
        />
        <Route
          path="/Blank_Page"
          element={
            <Wrapper>
              <Blank_Page />
            </Wrapper>
          }
        />
        <Route
          path="/Page_Error"
          element={
            <Wrapper>
              <Page_Error />
            </Wrapper>
          }
        />
        <Route
          path="/Charts_New"
          element={
            <Wrapper>
              <Charts_New />
            </Wrapper>
          }
        />
        <Route
          path="/Tables"
          element={
            <Wrapper>
              <Tables />
            </Wrapper>
          }
        />
      </Routes>
    </>
  );
}

export default App;
