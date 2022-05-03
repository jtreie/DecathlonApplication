import React from "react";
import Decathlon from "./Decathlon";
import Heptathlon from "./Heptathlon";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";

function App() {
    return(
        <Decathlon />
        // <div className="App">
        // <Routes>
        // <Route path="/" element={Home} />
        // <Route path="/decathlon" element={Decathlon} />
        // <Route path="/heptathlon" element={Heptathlon} />
        // </Routes>
        // </div>
    );
}
export default App;