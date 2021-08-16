import {
    Badge,
    Container,
    Nav,
    Navbar as BsNavbar,
    NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import AccountDropdown from "../../features/user/AccountDropdown";

import { FiShoppingCart } from "react-icons/fi";

import { useSelector } from "react-redux";
import { BiFilterAlt } from "react-icons/all";
import FilterByCategory from "../../features/filter/FilterByCategory";
import FilterByPrice from "../../features/filter/FilterByPrice";
import { categories } from "../../features/products/ProductSidebar";

const Navbar = () => {
    const itemCartLength = useSelector(state => state.cart.length);
    const userAuthenticated = useSelector(state => state.user.isAuthenticated);

    return (
        <BsNavbar
            style={{ height: 60 }}
            sticky="top"
            bg="primary"
            variant="dark"
            expand="sm"
        >
            <Container fluid="lg">
                <Nav className="me-auto">
                    <Nav.Item className="py-2">
                        <Link
                            className="text-white text-decoration-none"
                            to="/"
                        >
                            Home
                        </Link>
                    </Nav.Item>

                    {/* show login button if user is not logged in */}
                    {!userAuthenticated && (
                        <Nav.Item className="py-2">
                            <Link
                                className="text-white text-decoration-none ms-3"
                                to="/auth/login"
                            >
                                Login
                            </Link>
                        </Nav.Item>
                    )}
                </Nav>

                <Nav className="gap-3 flex-row ">
                    {/* show filter menu in mobile */}
                    <NavDropdown
                        id="filter-dropdown"
                        title={
                            <span className="text-white ms-3">
                                <BiFilterAlt size="1.5em" />
                            </span>
                        }
                        className="d-lg-none"
                    >
                        <div style={{ width: 250 }} className="p-3">
                            <FilterByCategory categories={categories} />
                            <hr />
                            <FilterByPrice />
                        </div>
                    </NavDropdown>

                    {/*  show user account if user is logged in  */}
                    {userAuthenticated && <AccountDropdown />}

                    {/* cart */}
                    <Nav.Item className="d-flex align-items-center me-2">
                        <Link className="position-relative" to="/cart">
                            <FiShoppingCart color="#fff" size="1.5em" />
                            <Badge
                                style={{ top: -10, right: -15 }}
                                className="position-absolute"
                                pill
                                bg="danger"
                            >
                                {itemCartLength}
                            </Badge>
                        </Link>
                    </Nav.Item>
                </Nav>
            </Container>
        </BsNavbar>
    );
};

export default Navbar;
