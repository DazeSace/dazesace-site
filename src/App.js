import './css/App.css';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Error404 from "./pages/Error404";
import Babs from "./pages/Babs";
import Main from "./pages/Main";


function App() {
    return (
        <Router>
            <div>
                <Route exact path="/">
                    <Main/>
                </Route>
                <Route path="/babs">
                    <Babs/>
                </Route>
                <Route path="*">
                    <Error404/>
                </Route>
            </div>
        </Router>
    );
}

export default App;
