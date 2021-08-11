import { Button } from "react-bootstrap";

const Counter = ({ count = 1, increment, decrement }) => {
    return (
        <div className="d-inline-flex mb-4 border rounded">
            <Button
                style={{ width: 30 }}
                variant="light p-2"
                onClick={increment}
            >
                +
            </Button>
            <span
                style={{ width: 30 }}
                className="d-flex align-items-center justify-content-center"
            >
                {count}
            </span>
            <Button
                disabled={count <= 1}
                style={{ width: 30 }}
                variant="light p-2"
                onClick={decrement}
            >
                -
            </Button>
        </div>
    );
};

export default Counter;
