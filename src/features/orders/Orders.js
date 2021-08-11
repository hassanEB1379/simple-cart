import { useSelector } from "react-redux";
import { Card, Col, Row } from "react-bootstrap";

const Orders = () => {
    const orders = useSelector(state => state.orders);

    return (
        <Row>
            <Col className="mx-auto" xs={8}>
                <h2 className="mb-5">My orders</h2>

                {orders.map(order => (
                    <Card className="mb-3" key={order.id}>
                        <Card.Header>
                            <Card.Text>
                                <span className="fw-bold">id :</span> {order.id}
                            </Card.Text>

                            <Card.Text>
                                <span className="fw-bold">
                                    purchases date :
                                </span>{" "}
                                {order.orderDate}
                            </Card.Text>

                            <Card.Text>
                                <span className="fw-bold">arriving time :</span>{" "}
                                never
                            </Card.Text>
                        </Card.Header>
                        <Card.Body>
                            <p className="fw-bolder mb-5">products : </p>
                            <div className="d-flex gap-4">
                                {order.data.map(orderDetails => (
                                    <img
                                        alt={orderDetails.title}
                                        key={orderDetails.id}
                                        width="80px"
                                        style={{ objectFit: "contain" }}
                                        src={orderDetails.image}
                                    />
                                ))}
                            </div>
                        </Card.Body>
                    </Card>
                ))}
            </Col>
        </Row>
    );
};

export default Orders;
