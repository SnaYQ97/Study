import {BrowserRouter, Route, Routes} from "react-router-dom";
import Lab2 from "@components/labs/lab2/Lab2";
import Lab1 from "@components/labs/lab1/Lab1";
import Ball from "@components/labs/lab2/ball/Ball";
import Main from "@components/main/main";
import Triangle from "@components/labs/lab2/triangle/Triangle";
import Zadanie1 from "@components/labs/lab1/zadania/zadanie1/zadanie1";
import Zadanie2 from "@components/labs/lab1/zadania/zadanie2/zadanie2";

const AppRouter = () => {
    console.log("AppRouter");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main/>} />
                <Route path="/lab1" element={<Lab1/>} />
                <Route path="/lab1/zadanie1" element={<Zadanie1/>} />
                <Route path="/lab1/zadanie2" element={<Zadanie2/>} />
                <Route path="/lab2" element={<Lab2/>} />
                <Route
                    path="/lab2/kula"
                    element={<Ball/>}
                />
                <Route
                    path="/lab2/trojkat"
                    element={<Triangle/>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
