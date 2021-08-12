import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
    FaBoxes,
    FaTshirt,
    GiLargeDress,
    GiPearlNecklace,
    MdComputer,
} from "react-icons/all";

const categories = [
    { name: "all", icon: <FaBoxes size="1.5em" /> },
    {
        name: "electronics",
        icon: <MdComputer size="1.5em" />,
    },
    {
        name: "jewelery",
        icon: <GiPearlNecklace size="1.5em" />,
    },
    {
        name: "men's clothing",
        icon: <FaTshirt size="1.5em" />,
    },
    {
        name: "women's clothing",
        icon: <GiLargeDress size="1.5em" />,
    },
];

const ProductSidebar = () => {
    return (
        <Nav style={{ top: 85 }} className="flex-column position-sticky">
            {categories.map((category, index) => (
                <Link
                    key={index}
                    to={category.name}
                    className="d-flex gap-3 px-0 mb-4 align-items-center fw-bold"
                >
                    {category.icon}
                    <span className="d-none d-lg-block">{category.name}</span>
                </Link>
            ))}
        </Nav>
    );
};

export default ProductSidebar;
