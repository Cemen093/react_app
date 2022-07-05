import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";
import Home from "./components/pages/Home";
import Error from "./components/pages/Error";

function App() {
    return (
        <>

            <BrowserRouter>
                <Header/>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="*" element={<Error/>}/>
                </Routes>
                <Footer/>
            </BrowserRouter>
        </>
    );
}

export default App;