import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import { Col, Row } from "react-bootstrap";
import CartSidebar from "./CartSidebar";

const Cart = () => {
    const cartData = useSelector(state => state.cart);

    return (
        <Row>
            <Col xs={12} lg={4}>
                <CartSidebar />
            </Col>

            <Col xs={12} lg={8}>
                {cartData.map(item => (
                    <CartItem data={item} key={item.id} />
                ))}
            </Col>
        </Row>
    );
};

export default Cart;
