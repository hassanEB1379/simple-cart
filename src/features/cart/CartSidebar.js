import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { clearCart, selectTotalPurchases } from "./cartSlice";
import { addOrders } from "../orders/ordersSlice";

const CartSidebar = () => {
    const cartData = useSelector(state => state.cart);

    const totalPurchases = useSelector(selectTotalPurchases);

    const userAuthenticated = useSelector(state => state.user.isAuthenticated);

    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleBuy = () => {
        if (userAuthenticated) {
            dispatch(addOrders(cartData));
            dispatch(clearCart());
        } else {
            alert("You must be logged in to purchase");
        }
    };

    return (
        <div
            style={{ top: 100 }}
            className="shadow p-3 rounded position-md-sticky mb-5"
        >
            <h3 className="mb-5">
                {cartData.length
                    ? `Total purchases : ${Math.floor(totalPurchases)} $`
                    : "Cart is empty"}
            </h3>

            <div className="d-flex gap-3">
                {cartData.length ? (
                    <>
                        <Button
                            onClick={handleBuy}
                            className="flex-grow-1 w-50"
                            variant="primary"
                        >
                            Buy
                        </Button>
                        <Button
                            onClick={handleClearCart}
                            className="flex-grow-1 w-50"
                            variant="danger"
                        >
                            Clear cart
                        </Button>
                    </>
                ) : (
                    <Link to="/" className="flex-grow-1">
                        <Button className="w-100" variant="primary">
                            Go to Shop
                        </Button>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default CartSidebar;
