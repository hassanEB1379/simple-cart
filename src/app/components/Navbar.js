import { Badge, Container, Nav, Navbar as BsNavbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import AccountDropdown from "../../features/auth/AccountDropdown";

import { FiShoppingCart } from "react-icons/fi";

import { useSelector } from "react-redux";

const Navbar = () => {
    const itemCartLength = useSelector(state => state.cart.length);
    const userAuthenticated = useSelector(state => state.auth.isAuthenticated);

    return (
        <BsNavbar sticky="top" bg="primary" variant="dark" expand="sm">
            <Container>
                <BsNavbar.Toggle aria-controls="basic-navbar-nav" />
                <BsNavbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link>
                            <Link style={{ color: "inherit" }} to="/">
                                Home
                            </Link>
                        </Nav.Link>

                        {/* show login button if user is not logged in */}
                        {!userAuthenticated && (
                            <Nav.Link>
                                <Link style={{ color: "inherit" }} to="/auth">
                                    Login
                                </Link>
                            </Nav.Link>
                        )}
                    </Nav>

                    <Nav className="gap-3">
                        {/*  show user account if user is logged in  */}
                        {userAuthenticated && <AccountDropdown />}

                        {/* cart */}
                        <Nav.Item className="d-flex align-items-center">
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
                </BsNavbar.Collapse>
            </Container>
        </BsNavbar>
    );
};

export default Navbar;
