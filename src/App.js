import {Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import NavigationBar from "./components/navigationBar";
import "../src/style/Home.css"

function App() {
    return (
        <div className="App">
                <NavigationBar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                {/*<Route path="*" element={<ErrorPage/>}/>*/}
            </Routes>
        </div>
    );
}

export default App;
