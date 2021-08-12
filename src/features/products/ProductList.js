import { Col, Row } from "react-bootstrap";

import ProductCard from "./ProductCard";
import ProductSidebar from "./ProductSidebar";

import { useSelector } from "react-redux";
import { fetchProducts, selectByCategory } from "./productSlice";
import Fetch from "../../app/components/Fetch";

const ProductList = ({ match }) => {
    const { category } = match.params;

    const { error, status, data } = useSelector(selectByCategory(category));

    return (
        <Row>
            <Col className="" xs={1} lg={2}>
                <ProductSidebar />
            </Col>

            <Col xs={11} lg={10}>
                <Row>
                    {error && <Fetch error refetch={fetchProducts} />}

                    {status === "loading" && <Fetch />}

                    {data.map(product => (
                        <ProductCard key={product.id} data={product} />
                    ))}
                </Row>
            </Col>
        </Row>
    );
};

export default ProductList;
