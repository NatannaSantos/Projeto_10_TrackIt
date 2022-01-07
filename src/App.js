import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HabitPage from "./components/HabitPage";
import TodayPage from "./components/TodayPage";
import HistoricPage from "./components/HistoricPage";
import { useState } from "react";

export default function App() {

  const [token, setToken]=useState('');

  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage setToken={setToken}/>} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/habito" element={<HabitPage />} />
        <Route path="/hoje" element={<TodayPage token={token}/>} />
        <Route path="/historico" element={<HistoricPage />} />
      </Routes>

    </BrowserRouter>


  );
}