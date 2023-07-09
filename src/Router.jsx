import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./page/Home";
import Dashboard from "./page/Dashboard";

function Router() {
    return (
        <Routes>
            <Route path='/' element={Home} />
            <Route path='/dashboard' element={Dashboard} />
            <Route path='*' element={<Navigate to='/' />}/>
        </Routes>
    );
}

export default Router;