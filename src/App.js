import {BrowserRouter, Route, Routes,MemoryRouter, HashRouter } from "react-router-dom";
import Home from "./Home";
import ProductSingle from "./components/Product/ProductSingle";

function App() {
    return (
            <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={'/product/:id'} element={<ProductSingle/>}>
                </Route>
            </Routes>
        </HashRouter>
    );
}

export default App;
