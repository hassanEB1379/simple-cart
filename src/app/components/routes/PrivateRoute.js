import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = props => {
    const { component: Component, ...rest } = props;

    const userAuthenticated = useSelector(({ user }) => user.isAuthenticated);

    const render = renderProps => {
        if (userAuthenticated) {
            return <Component {...renderProps} />;
        } else {
            // redirect to login page if user not logged in
            return <Redirect to="/auth/login" />;
        }
    };

    return <Route {...rest} render={render} />;
};

export default PrivateRoute;
