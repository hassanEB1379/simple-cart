import { Col, Row } from "react-bootstrap";

import ProductCard from "./ProductCard";
import ProductSidebar from "./ProductSidebar";

import { useSelector } from "react-redux";
import { selectByCategory } from "./productSlice";

const ProductList = () => {
    const { error, status, data } = useSelector(selectByCategory);

    return (
        <Row>
            <Col xs={2}>
                <ProductSidebar />
            </Col>

            <Col xs={10}>
                <Row style={{ gap: 15 }}>
                    {error && <p>{error}</p>}

                    {status === "loading" && <p>is loading ...</p>}

                    {data.map(product => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </Row>
            </Col>
        </Row>
    );
};

export default ProductList;
