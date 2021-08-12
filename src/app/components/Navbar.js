import { Badge, Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import AccountDropdown from "../../features/user/AccountDropdown";

import { FiShoppingCart } from "react-icons/fi";

import { useSelector } from "react-redux";

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
            <Container>
                <Nav className="me-auto">
                    <Nav.Item className="py-2">
                        <Link
                            className="text-white text-decoration-none"
                            to="/all"
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
