import { Route, Routes, HashRouter } from "react-router-dom";
import Home from "./Home";
import ProductSingle from "./components/Product/ProductSingle";
import IzmjeniProduct from "./components/Product/IzmjeniProduct";

function App() {
    return (
            <HashRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path={'/product/:id'} element={<ProductSingle/>}/>
                <Route path={'/izmjeni/:id'} element={<IzmjeniProduct/>}/>
            </Routes>
        </HashRouter>
    );
}

export default App;
