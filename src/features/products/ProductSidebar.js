import { Nav } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { filterByCategory } from "../filter/filterSlice";

const ProductSidebar = () => {
    const dispatch = useDispatch();

    const handleFilter = e => {
        const category = e.target.dataset.category;

        dispatch(filterByCategory(category));
    };

    return (
        <Nav className="flex-column position-fixed">
            <Nav.Item>
                <Nav.Link data-category="all" onClick={handleFilter}>
                    all
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link data-category="electronics" onClick={handleFilter}>
                    electronics
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link data-category="jewelery" onClick={handleFilter}>
                    jewelery
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link data-category="men's clothing" onClick={handleFilter}>
                    men clothing
                </Nav.Link>
            </Nav.Item>

            <Nav.Item>
                <Nav.Link
                    data-category="women's clothing"
                    onClick={handleFilter}
                >
                    women clothing
                </Nav.Link>
            </Nav.Item>
        </Nav>
    );
};

export default ProductSidebar;
