
import { BrowserRouter as Router, Switch, Route,Redirect} from "react-router-dom";
import Home from "./Home";
import Crew from "./Crew";
import Destination from "./Destination";
import Technology from "./Technology";
import Navbar from "./Navbar";



function App() {
return(
    <Router>
    <div>
        <Navbar/>
        <Switch>
            <Route exact path="/">
                <Redirect to="/home" />
            </Route>
            <Route path="/home">
                <Home/>
            </Route>
            <Route path="/destination">
                <Destination />
            </Route>
            <Route path="/crew">
                <Crew />
            </Route>
            <Route path="/technology">
                <Technology />
            </Route>
        </Switch>
    </div>
    </Router>
)
}

export default App;