import {BrowserRouter, Route, Routes} from "react-router-dom";
import Lab2 from "../components/lab2/Lab2";
import Ball from "../components/lab2/ball/Ball";
import Main from "../components/main/Main";

const AppRouter = () => {
    console.log("AppRouter");
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Main/>} />
                <Route path="/lab2" element={<Lab2/>} >
                </Route>
                <Route
                    path="/lab2/kula"
                    element={<Ball/>}
                />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouter;
