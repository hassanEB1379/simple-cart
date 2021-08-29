import { HashRouter, Route, Switch } from "react-router-dom";

// routes layouts components
import MainLayout from "./app/layouts/MainLayout";
import AuthLayout from "./app/layouts/AuthLayout";

function App() {
    return (
        <HashRouter>
            <Switch>
                <Route path={"/auth"} component={AuthLayout} />
                <Route path={"/"} component={MainLayout} />
            </Switch>
        </HashRouter>
    );
}

export default App;
