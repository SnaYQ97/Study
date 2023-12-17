import {BrowserRouter, Route, Routes} from "react-router-dom";
import Lab2 from "../components/lab2/Lab2";
import Ball from "../components/lab2/ball/Ball";
import Main from "../components/main/Main";
import Triangle from "../components/lab2/triangle/Triangle";

const AppRouter = () => {
    console.log("AppRouter");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main/>} />
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
