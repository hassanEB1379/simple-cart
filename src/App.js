import { BrowserRouter, Route, Switch } from "react-router-dom";

// routes layouts components
import MainLayout from "./app/layouts/MainLayout";
import AuthLayout from "./app/layouts/AuthLayout";

function App() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path={"/auth"} component={AuthLayout} />
                <Route path={"/"} component={MainLayout} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
