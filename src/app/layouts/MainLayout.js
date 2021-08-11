import Navbar from "../components/Navbar";
import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import Cart from "../../features/cart/Cart";
import ProductList from "../../features/products/ProductList";

const MainLayout = () => {
    return (
        <>
            <Navbar />

            <Container className="mt-5">
                <Switch>
                    {/* routes */}
                    <Route path="/cart" component={Cart} />
                    <Route path="/" component={ProductList} />
                </Switch>
            </Container>
        </>
    );
};

export default MainLayout;
