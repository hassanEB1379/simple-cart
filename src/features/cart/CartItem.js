import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
    countItemDecrement,
    countItemIncrement,
    removeOneFromCart,
} from "./cartSlice";
import Counter from "../../app/components/Counter";

const CartItem = ({ data }) => {
    const dispatch = useDispatch();

    // handle counter
    const increment = () => {
        dispatch(countItemIncrement(data.id));
    };
    const decrement = () => {
        dispatch(countItemDecrement(data.id));
    };

    const handleDeleteCartItem = () => {
        dispatch(removeOneFromCart(data.id));
    };

    return (
        <Card border="primary" className="gap-4 rounded mb-3">
            <div className="p-4 d-flex gap-4">
                <Card.Img
                    style={{ width: 125, height: 125, objectFit: "contain" }}
                    src={data.image}
                />

                <div>
                    <Card.Title>{data.title}</Card.Title>

                    <div>
                        count :
                        <Counter
                            count={data.count}
                            increment={increment}
                            decrement={decrement}
                        />
                    </div>

                    <Card.Text>
                        total price : {Math.floor(data.count * data.price)} $
                    </Card.Text>
                </div>
            </div>

            <Card.Footer className="d-flex justify-content-end">
                <Button onClick={handleDeleteCartItem} variant="danger">
                    Delete
                </Button>
            </Card.Footer>
        </Card>
    );
};

export default CartItem;
