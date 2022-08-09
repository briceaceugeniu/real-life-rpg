import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import MainPage from "./components/MainPage";
import Register from "./components/Register";
import ForgotPasswd from "./components/ForgotPasswd";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-pass" element={<ForgotPasswd />} />
      <Route
        path="*"
        element={
          <main style={{ padding: "1rem" }}>
            <p>There's nothing here!</p>
          </main>
        }
      />
    </Routes>
  );
}

export default App;
