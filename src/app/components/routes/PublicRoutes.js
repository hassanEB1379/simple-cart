import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoutes = props => {
    const { component: Component, restricted = false, ...rest } = props;

    const userAuthenticated = useSelector(({ user }) => user.isAuthenticated);

    const render = renderProps => {
        if (userAuthenticated && restricted) {
            // return user to panel if user authenticated
            return <Redirect to="/" />;
        } else {
            return <Component {...renderProps} />;
        }
    };

    return <Route {...rest} render={render} />;
};

export default PublicRoutes;
