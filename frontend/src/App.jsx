import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import useGetCurrentUser from "./hooks/useGetCurrentUser";
import { useSelector } from "react-redux";
import Dashboard from "./pages/Dashboard";
import Generate from "./pages/Generate";
import WebsiteEditor from "./pages/WebsiteEditor";
import LiveSite from "./pages/LiveSite";
import Pricing from "./pages/Pricing";
import PaymentSuccess from "./pages/PaymentSuccess";
export const serverUrl = "https://gen-web-ai.onrender.com";

const App = () => {
  useGetCurrentUser();
  const { userData } = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/dashboard"
          element={userData ? <Dashboard /> : <Home />}
        />
        <Route path="/generate" element={userData ? <Generate /> : <Home />} />
        <Route
          path="/editor/:id"
          element={userData ? <WebsiteEditor /> : <Home />}
        />
        <Route path="/site/:id" element={<LiveSite />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/success" element={<PaymentSuccess />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
