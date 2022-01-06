import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import HabitPage from "./components/HabitPage";
import TodayPage from "./components/TodayPage";
import HistoricPage from "./components/HistoricPage";

export default function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<RegisterPage />} />
        <Route path="/habito" element={<HabitPage />} />
        <Route path="/hoje" element={<TodayPage />} />
        <Route path="/historico" element={<HistoricPage />} />
      </Routes>

    </BrowserRouter>


  );
}