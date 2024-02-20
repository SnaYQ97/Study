import {BrowserRouter, Route, Routes} from "react-router-dom";
import Lab2 from "@components/labs/lab2/Lab2";
import Lab1 from "@components/labs/lab1/Lab1";
import Main from "@components/main/main";
import {
    Zadanie1 as Lab1Zad1,
    Zadanie2 as Lab1Zad2
} from "@components/labs/lab1/zadania/index.ts";
import { Zadanie1 as Lab2Zad1 } from "@components/labs/lab2/zadania/index.ts";


const AppRouter = () => {
    console.log("AppRouter");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main/>} />
                <Route path="/lab1" element={<Lab1/>} />
                <Route path="/lab1/zadanie1" element={<Lab1Zad1/>} />
                <Route path="/lab1/zadanie2" element={<Lab1Zad2/>} />
                <Route path="/lab2" element={<Lab2/>} />
                <Route path="/lab2/zadanie1/:r?/:g?/:b?" element={<Lab2Zad1/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
