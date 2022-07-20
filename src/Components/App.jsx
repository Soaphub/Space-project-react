
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
            <Route exact path="/Space-project-react">
                <Redirect to="/Space-project-react/home" />
            </Route>
            <Route path="/Space-project-react/home">
                <Home/>
            </Route>
            <Route path="/Space-project-react/destination">
                <Destination />
            </Route>
            <Route path="/Space-project-react/crew">
                <Crew />
            </Route>
            <Route path="/Space-project-react/technology">
                <Technology />
            </Route>
        </Switch>
    </div>
    </Router>
)
}

export default App;
