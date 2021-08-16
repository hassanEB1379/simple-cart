import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Container } from "react-bootstrap";
import { Route, Switch } from "react-router-dom";

import Cart from "../../features/cart/Cart";
import ProductList from "../../features/products/ProductList";
import Orders from "../../features/orders/Orders";
import PrivateRoute from "../components/routes/PrivateRoute";

const MainLayout = () => {
    return (
        <div
            style={{ minHeight: "100vh" }}
            className="d-flex flex-column justify-content-between"
        >
            <Navbar />

            <main className="my-5 flex-grow-1">
                <Container fluid="lg">
                    <Switch>
                        {/* routes */}
                        <PrivateRoute path="/orders" component={Orders} />
                        <Route path="/cart" component={Cart} />
                        <Route path="/" component={ProductList} />
                    </Switch>
                </Container>
            </main>

            <Footer />
        </div>
    );
};

export default MainLayout;
