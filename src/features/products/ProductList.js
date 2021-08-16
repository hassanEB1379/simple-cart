import { Col, Row } from "react-bootstrap";

import ProductCard from "./ProductCard";
import ProductSidebar from "./ProductSidebar";

import { useSelector } from "react-redux";
import { fetchProducts, selectProductDataByCategory } from "./productSlice";
import Fetch from "../../app/components/Fetch";
import SelectedFilters from "../filter/SelectedFilters";

const ProductList = () => {
    const data = useSelector(selectProductDataByCategory);
    const { error, status } = useSelector(state => state.products);

    return (
        <Row>
            <Col style={{ zIndex: 2 }} className="d-none d-lg-block" xs={2}>
                <ProductSidebar />
            </Col>

            <Col lg={10} xs={12}>
                {/* show selected filters top of product list */}
                <SelectedFilters />

                <Row className="mx-3">
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
