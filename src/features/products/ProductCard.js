import { Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../cart/cartSlice";
import Counter from "../../app/components/Counter";
import { useState } from "react";

const ProductCard = ({ data }) => {
    const [count, setCount] = useState(1);

    const dispatch = useDispatch();

    // handle counter
    const increment = () => {
        setCount(prev => prev + 1);
    };
    const decrement = () => {
        setCount(prev => prev - 1);
    };

    const handleAddToCart = () => {
        dispatch(addToCart({ ...data, count }));
    };

    return (
        <Card className="shadow-sm" style={{ width: "15.6rem" }}>
            <Card.Img
                style={{
                    height: 200,
                    objectFit: "contain",
                }}
                className={"p-4"}
                src={data.image}
            />
            <Card.Body>
                <Card.Title
                    style={{ height: 50 }}
                    className={"overflow-hidden"}
                >
                    {data.title}
                </Card.Title>

                <Card.Text>{data.price} $</Card.Text>

                <Counter
                    count={count}
                    increment={increment}
                    decrement={decrement}
                />

                <Button variant="primary" onClick={handleAddToCart}>
                    Add to cart
                </Button>
            </Card.Body>
        </Card>
    );
};

export default ProductCard;
