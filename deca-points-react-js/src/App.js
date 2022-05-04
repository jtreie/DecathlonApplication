import React from "react";
import Decathlon from "./components/Decathlon";
import Heptathlon from "./components/Heptathlon";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home";

function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/decathlon" element={<Decathlon />} />
                <Route path="/heptathlon" element={<Heptathlon />} />
                <Route path="*" element={<Navigate to="/" replace />}
        />
        </Routes>
        </BrowserRouter>
        // <div className="App">
        // <Routes>
        //     <Switch>
        // <Route path="/" element={Home} />
        // <Route path="/decathlon" element={Decathlon} />
        // <Route path="/heptathlon" element={Heptathlon} />
        // </Switch>
        // </Routes>
        // </div>
    );
}
export default App;